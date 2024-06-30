const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const USER_SCHEMA = mongoose.Schema(
  {
    fastName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    role:{
      type:String,
      required:true
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

// Encrypting password before save
USER_SCHEMA.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

USER_SCHEMA.pre("remove", async function (next) {
  try {
    await this.model("Cart").deleteOne({ userId: this._id });
  } catch (e) {
    console.log(e);
  }
});

// Return JWT token
USER_SCHEMA.methods.getJwtToken = async function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  this.tokens = this.tokens.concat({ token });
  await this.save();
  return token;
};

USER_SCHEMA.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const USER = mongoose.model("User", USER_SCHEMA);

module.exports = USER;
