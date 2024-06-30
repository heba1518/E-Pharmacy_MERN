const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/user_routes");
const medicineRouter = require("./routes/medicine_routes");
const cartRouter = require("./routes/cart_routes");
const orderRouter = require("./routes/order_routes");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

//connect to online mongodb
const url = process.env.MONGOURL;
mongoose.connect(url, () => {
  console.log("connected to atlas mongodb");
});

//middelwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(__dirname + "/images"));

// const corsOptions = {
//   origin: "http://localhost:3000" // frontend URI (ReactJS)
// }
// app.use(express.json());
// app.use(cors(corsOptions));

//routes
app.use("/api/users", userRouter);
app.use("/api/medicines", medicineRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("Welcome to medicine Store Project");
});

app.listen(port, () => {
  console.log(`connected to http://localhost:${port}`);
});
