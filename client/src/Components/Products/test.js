import productsLocal from "../../Data/products";
const [products, setProducts] = useState(productsLocal);

const [filteredProducts, setFilteredProducts] = useState([]);

const handle = (extracted_words) => {
  let filteredItems = []
  extracted_words.forEach((index) => filteredItems.push( products.filter((product) =>
    product.name.toLowerCase().includes(extracted_words[index].toLowerCase())
  )))
  setFilteredProducts(filteredItems);
}

handle("Aspirin","Fucicort")
console.log(filteredProducts)
