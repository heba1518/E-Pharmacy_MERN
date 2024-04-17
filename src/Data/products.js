import img1 from "../Assets/images/products/123.png";
import img2 from "../Assets/images/products/panadol.webp";
import img3 from "../Assets/images/products/adol.jpg";
import img4 from "../Assets/images/products/alphintern.jpg";
import img5 from "../Assets/images/products/antinal.webp";
import img6 from "../Assets/images/products/apidone.jpg";
import img7 from "../Assets/images/products/COMTREX.jpg";
import img8 from "../Assets/images/products/flagyl.png";
import img9 from "../Assets/images/products/limitless.jpg";
import img10 from "../Assets/images/products/Strepsils.jpg";

let productsData = [
  {
    _id: "e02d3e9a-4b37-4b95-bcd2-3bd28effd937",
    shopId: "0743def8-4a34-4d23-bd7d-1dd3b36d1c84",
    name: "ANTINAL",
    image: img5,
    description:
      "Suspected acute diarrhea caused by bacteria in the absence of suspicion of invasive phenomena ( poor general condition, fever, poisoning signs of infection ...). The treatment does not eliminate dietary and rehydration if The importance of rehydration with oral rehydration solution or intravenous should be adjusted according to the intensity of diarrhea, age and patient characteristics (associated diseases ...).",
    price: 36,
    rating: 5,
    totalReview: 12,
    brand: "AMOUN",
    category: "diarrhea & gastroenteritis",
    stock: 32,
    document: 20,
    isDeliveryFree: false,
    fav: false,
    cart: false,
    quantity:1,
  },
  {
    _id: "a5c7863c-6754-432b-8e2f-9d2210b1dbfd",
    shopId: "debe1e61-5d49-47a1-b544-d59c0e52003e",
    name: "FLAGYL",
    image: img8,
    description: "FLAGYL 125 MG / 5 ML ( METRONIDAZOLE ) SUSPENSION 100 ML",
    price: 16,
    rating: 4,
    totalReview: 12,
    brand: "SANOFI",
    category: "Enteric disinfectants",
    stock: 594,
    document: 96,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity:1,
  },
  {
    _id: "c990a9e3-0b7a-4d43-822d-4d81048f5852",
    shopId: "ce2231a8-c886-43fd-92c8-0fe70a622fa2",
    name: "Alphintern tablets",
    image: img4,
    description:
      "Alphintern tablets ( chemotrypsin 300 mg + trypsin 300 mg ) 30 film-coated tablets ",
    price: 54,
    rating: 4,
    brand: "AMOUN",
    category: "Anti-inflammatory",
    stock: 398,
    document: 1,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity:1,
  },
  {
    _id: "f0d2c336-5b07-45a5-8676-993fa5b45b11",
    shopId: "0743def8-4a34-4d23-bd7d-1dd3b36d1c84",
    name: "Panadol",
    image: img2,
    description:
      "This medication is a trusted ally in managing a spectrum of discomforts, including headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers. It is important to note that while it eases the pain of mild arthritis, it does not address the root cause of inflammation. For optimal relief, it is recommended to adhere to dosing guidelines: orally or rectally, take 325 to 650 mg every 4 to 6 hours, or 1000 mg every 6 to 8 hours. While rare, some individuals may experience side effects such as bloody stools, cloudy urine, fever, skin rash, sore throat, or unusual tiredness. Should any of these symptoms manifest, it is crucial to promptly consult with your healthcare provider. Additionally, safeguard your health by strictly adhering to the prescribed dosage to mitigate the risk of liver damage. Your well-being is paramount, so please feel free to voice any questions or concerns you may have. Your health journey is important to us, and we are here to support you every step of the way.",
    price: 36,
    rating: 5,
    totalReview: 12,
    brand: "GSK",
    category: "Analgesics and antipyretics",
    stock: 32,
    document: 20,
    isDeliveryFree: false,
    fav: false,
    cart: false,
    quantity:1,
  },
  {
    _id: "1ff9b0c2-d0b5-4bf4-a44d-8a441bd44fc1",
    shopId: "6e097319-04c9-4c89-8f4e-42bef7e9c5e8",
    name: "Apidone",
    image: img6,
    description:
      "Apidone Syrup ( Chlorpheniramine 2 mg + Dexamethasone 0.5 mg ) 125 mL",
    price: 15,
    rating: 3,
    totalReview: 12,
    brand: "AMOUN",
    category: "treatment and prevention",
    stock: 434,
    document: 31,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity:1,
  },
  {
    _id: "22a8d485-9a9e-4b76-9479-7240b7889812",
    shopId: "f9e38e14-82e5-47d4-9117-48294e1f780e",
    name: "Strepsils",
    image: img10,
    description:
      "Strepsils Orange with Vitamin C antibacterial lozenges provide fast, soothing and effective relief from the discomfort of sore throats. Each lozenge contains a combination of antibacterials to help kill the bacteria which can cause sore throat and mouth infections.",
    price: 165,
    rating: 4,
    totalReview: 12,
    brand: "Reckitt Benckiser",
    category: "sore & itchy throat",
    stock: 722,
    document: 59,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity:1,
  },
  {
    _id: "c07c8a5a-24ec-49d8-9189-8db3e8b9c2fd",
    shopId: "d437908e-94ed-4674-8059-a02080cc8009",
    name: "LIMITLESS OMEGA 3",
    image: img9,
    description:
      "LIMITLESS OMEGA 3 2000 MG ( VIT. D3 10 MCG + FISH OIL 2000 MG + TOTAL OMEGA3 ACIDS 1400 MG ) 30 CAPSULES",
    price: 145,
    rating: 5,
    totalReview: 12,
    brand: "EVA PHARMA",
    category: "Vitamins & Supplements",
    stock: 618,
    document: 37,
    isDeliveryFree: false,
    fav: false,
    cart: false,
    quantity:1,
  },
  {
    _id: "c89ecf6b-2260-4d11-b49a-7a9f4e73e186",
    shopId: "156de5ef-208b-40d9-94a9-9dd65e75b902",
    name: "COMTREX",
    image: img7,
    description:
      "COMTREX ACUTE HEAD COLD ( BROMPHENIRAMINE 2 MG + PARACETAMOL 500 MG + PSEUDOEPHEDRINE 30 MG ) 20 FILM-COATED TABLETS",
    price: 30,
    rating: 3,
    totalReview: 12,
    brand: "GSK",
    category: "Anti-hestaminic & Respiratory Drugs",
    stock: 881,
    document: 24,
    isDeliveryFree: false,
    fav: false,
    cart: false,
    quantity:1,
  },
  {
    _id: "d9dab99d-4b4c-4f99-b35a-0f99b1bc0c2a",
    shopId: "3bae1ffa-4a57-4b04-8eb5-a35b14ee6d2f",
    name: "1 2 3 ONE TWO THREE ",
    image: img1,
    description:
      "1 2 3 ONE TWO THREE ( CHLORPHENIRAMINE 2 MG + PARACETAMOL 500 MG + PSEUDOEPHEDRINE 20 MG ) 20 FILM-COATED TABLETS",
    price: 24,
    rating: 5,
    totalReview: 12,
    brand: "HIKMA",
    category: "Anti-hestaminic & Respiratory Drugs",
    stock: 148,
    document: 32,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity:1,
  },
  {
    _id: "a8119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "ADOL",
    image: img3,
    description: "ADOL 500 MG ( PARACETAMOL ACETAMINOPHEN ) 24 CAPLETS",
    price: 16,
    rating: 0,
    totalReview: 12,
    brand: " julphar",
    category: "Sedatives",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity:1,
  },
];


export function updateQuantity(id, newData) {
  let arr = localStorage.getItem("products");
  let products = JSON.parse(arr);
  // console.log(newData)
  const index = productsData.findIndex(item => item._id === id)
  console.log(index)
  if (index !== -1) {
    productsData[index] = { ...productsData[index], ...newData };
    console.log(productsData)
    // products[index] = { ...productsData[index], ...newData };
    // localStorage.setItem("products",products );
    // console.log(products)
    return true;
  }
  console.log("newData")
  return false;
}



export default productsData;