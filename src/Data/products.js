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
import img11 from "../Assets/images/products/actos.jpeg";
import img12 from "../Assets/images/products/aspirin.jpeg";
import img13 from "../Assets/images/products/fucicort.jpg";
import img14 from "../Assets/images/products/zithromax.jpg";
import img15 from "../Assets/images/products/panadol-day.webp";
import img16 from "../Assets/images/products/dorzolamide.webp";
import img17 from "../Assets/images/products/perderm.jpeg";
import img18 from "../Assets/images/products/fernilar.jpg";
import img19 from "../Assets/images/products/betaloc.jpg";
import img20 from "../Assets/images/products/cimetidine.jpg";
import img21 from "../Assets/images/products/Codeine-Sulphate.jpg";
import img22 from "../Assets/images/products/Lubricant-EyeDrops.webp";
import img23 from "../Assets/images/products/analgesic-tablet.png";
import img24 from "../Assets/images/products/chloramphenicol-eye-ointment.webp";
import img25 from "../Assets/images/products/motinorm.webp";
import img26 from "../Assets/images/products/minalax.jpg";
import img27 from "../Assets/images/products/coloverin.jpg";

let productsData = [
  {
    _id: "e02d3e9a-4b37-4b95-bcd2-3bd28effd937",
    shopId: "0743def8-4a34-4d23-bd7d-1dd3b36d1c84",
    name: "Antinal",
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
    quantity: 1,
  },
  {
    _id: "a5c7863c-6754-432b-8e2f-9d2210b1dbfd",
    shopId: "debe1e61-5d49-47a1-b544-d59c0e52003e",
    name: "Flagyl",
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
    quantity: 1,
  },
  {
    _id: "c990a9e3-0b7a-4d43-822d-4d81048f5852",
    shopId: "ce2231a8-c886-43fd-92c8-0fe70a622fa2",
    name: "Alphintern",
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
    quantity: 1,
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
    category: "Cold & Flu Relief",
    stock: 32,
    document: 20,
    isDeliveryFree: false,
    fav: false,
    cart: false,
    quantity: 1,
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
    quantity: 1,
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
    quantity: 1,
  },
  {
    _id: "c07c8a5a-24ec-49d8-9189-8db3e8b9c2fd",
    shopId: "d437908e-94ed-4674-8059-a02080cc8009",
    name: "Limitless omega3",
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
    quantity: 1,
  },
  {
    _id: "c89ecf6b-2260-4d11-b49a-7a9f4e73e186",
    shopId: "156de5ef-208b-40d9-94a9-9dd65e75b902",
    name: "Comtrex",
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
    quantity: 1,
  },
  {
    _id: "d9dab99d-4b4c-4f99-b35a-0f99b1bc0c2a",
    shopId: "3bae1ffa-4a57-4b04-8eb5-a35b14ee6d2f",
    name: "123 one two three ",
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
    quantity: 1,
  },
  {
    _id: "a8119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Adol",
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
    quantity: 1,
  },
  {
    _id: "ab119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Actos 30mg",
    image: img11,
    description:
      "Antidiabetic agent belongs to thiazolidinedione group used in the treatment of type 2 diabetes mellitus.",
    price: 210,
    rating: 0,
    totalReview: 12,
    brand: " Jar",
    category: "Diabetes",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "ac119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Aspirin",
    image: img12,
    description:
      "Nonsteroidal Anti-inflammatory Drug used in the treatment of acute coronary syndrome, primary and secondary prevention of atherosclerotic cardiovascular diseases, prevention of preeclampsia and used in the prophylaxis against venous thromboembolism.",
    price: 21,
    rating: 0,
    totalReview: 12,
    brand: " Box",
    category: "Anti-inflammatory",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "ad119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Fucicort cream",
    image: img13,
    description:
      "Topical antibiotic and corticosteroid combination therapy used in the treatment of corticosteroid-responsive dermatoses with secondary bacterial infection that are sensitive to fusidic acid.",
    price: 32,
    rating: 0,
    totalReview: 12,
    brand: " Box",
    category: "Antibiotics",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "af119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Zithromax",
    image: img14,
    description:
      "Antibiotic, belongs to the macrolides group used in the treatment of pneumonia, Streptococcus infections, sexually transmitted infections, mycobacterial infection, Lyme disease, infectious diarrhea, bronchiolitis and inflammatory acne vulgaris.",
    price: 79,
    rating: 0,
    totalReview: 12,
    brand: " Box",
    category: "Antibiotics",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a1119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Panadol Day",
    image: img15,
    description:
      "Panadol Cold & Flu Day caplets provide relief from Major Cold and flu symptoms. It is a non-drowsy formulation for day time relief.",
    price: 300,
    rating: 0,
    totalReview: 12,
    brand: " Box",
    category: "Cold & Flu Relief",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a2119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Dorzolamide",
    image: img16,
    description:
      "Ocular hypertension or open-angle glaucoma Dosage: As a single treatment: 1 drop, 3 times a day. As a treatment in addition to beta-blockers: 1 drop, twice a day.",
    price: 30,
    rating: 0,
    totalReview: 12,
    brand: "Dropper",
    category: "Eye Drops",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a3119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Perderm ",
    image: img17,
    description:
      "Atopic dermatitis, discoid lupus erythematosus, eczema, granuloma annulare, pruritus, psoriasis, seborrheic dermatitis, xerosis: TOPICAL: Adults, Elderly, Children 1 yr and older. Apply a thin film to the affected area 2-3 times a day.",
    price: 12,
    rating: 0,
    totalReview: 12,
    brand: " Tube",
    category: "Skin Diseases",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a4119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Fernilar ",
    image: img18,
    description:
      "Histamine H1 Antagonist belongs to the second-generation antihistamines used in the treatment of allergic rhinitis and urticaria.",
    price: 9,
    rating: 0,
    totalReview: 12,
    brand: " Strip",
    category: "Respiratory System Diseases",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a5119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Betaloc",
    image: img19,
    description:
      "Betaloc 100mg Tablet belongs to a group of medicines called beta-blockers. It is used to treat high blood pressure (hypertension), angina (heart-related chest pain), irregular heart rhythms (arrhythmia). It also helps to prevent future heart attacks and stroke and to prevent migraines.",
    price: 124,
    rating: 0,
    totalReview: 12,
    brand: "AstraZeneca",
    category: "Hypertension",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a6119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Cimetidine",
    image: img20,
    description:
      "Cimetidine is a histamine H2 receptor antagonist used to manage GERD, peptic ulcer disease, and indigestion.",
    price: 500,
    rating: 0,
    totalReview: 12,
    brand: "Tagamet",
    category: "Death Diseases",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a7119b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Codeine sulfate",
    image: img21,
    description:
      "Codeine is used to relieve mild to moderate pain. It belongs to the group of medicines called narcotic analgesics (pain medicines). This medicine acts on the central nervous system (CNS) to relieve pain.",
    price: 100,
    rating: 0,
    totalReview: 12,
    brand: "Codeine Contin",
    category: "Antitussives",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a8219b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Lubricant Eye Drops",
    image: img22,
    description:
      "Avenova Lubricating Eye Drops – TWIN PACK. Use throughout the day for instant relief from dry eye symptoms due to MGD, contact lenses, prolonged screen use, or everyday exposure to wind or sun.One box contains 2 x 0.5 fluid oz (15 ml) bottles for a total of 1 fluid ounce (30 ml).",
    price: 19.99,
    rating: 0,
    totalReview: 12,
    brand: "Avenova Eye Drops",
    category: "Eye Drops",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a8319b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Analgesic Tablets",
    image: img23,
    description:
      "Analgesics are medicines that are used to relieve pain. They are also known as painkillers or pain relievers. Technically, the term analgesic refers to a medication that provides relief from pain without putting you to sleep or making you lose consciousness.",
    price: 24.5,
    rating: 0,
    totalReview: 12,
    brand: "Etoricoxib Tablets",
    category: "Analgesics",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a8419b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Chloramphenicol Eye Ointment",
    image: img24,
    description:
      "This medication is used to treat bacterial eye infections. Chloramphenicol is an antibiotic that works by stopping the growth of bacteria. This medication treats only bacterial eye infections. It will not work for other types of eye infections.",
    price: 100,
    rating: 0,
    totalReview: 12,
    brand: "Chloramphenicol",
    category: "Eye Ointment",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a8519b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Motinorm Tablet",
    image: img25,
    description:
      "Motinorm DT 10mg Tablet is used in the treatment of indigestion, nausea, and vomiting. It increases the movement of food through the stomach and intestines, thereby relieving bloating, fullness, and gastric discomfort.",
    price: 25.75,
    rating: 0,
    totalReview: 12,
    brand: "Medley Pharmaceuticals",
    category: "Gastrointestinal Diseases",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a8619b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Minalax",
    image: img26,
    description:
      "Bisacodyl increases the secretion of mucus in the large intestine, accelerates and increases its peristalsis. The action is due to direct stimulation of nerve endings in the mucous membrane of the large intestine. When taken orally, it is absorbed from the intestines in a minimal amount. The laxative effect usually occurs after 6 hours, when taken before bedtime – after 8-12 hours.",
    price: 11.5,
    rating: 0,
    totalReview: 12,
    brand: "AMOUN",
    category: "Laxative",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
  {
    _id: "a8719b57-d4fb-407b-a2ea-d5c3e3a02d6b",
    shopId: "6d98040f-5b2d-44bb-bace-7a143ffb2af2",
    name: "Coloverin D",
    image: img27,
    description: "Mebeverine HCl 135 mg + Dimethicone 40 mg.",
    price: 69,
    rating: 0,
    totalReview: 12,
    brand: "Chemipharm",
    category: "Antispasmodic/Antiflatulent",
    stock: 943,
    document: 74,
    isDeliveryFree: true,
    fav: false,
    cart: false,
    quantity: 1,
  },
];

export function updateQuantity(id, newData) {
  let arr = localStorage.getItem("products");
  let products = JSON.parse(arr);
  // console.log(newData)
  const index = productsData.findIndex((item) => item._id === id);
  console.log(index);
  if (index !== -1) {
    productsData[index] = { ...productsData[index], ...newData };
    console.log(productsData);
    // products[index] = { ...productsData[index], ...newData };
    // localStorage.setItem("products",products );
    // console.log(products)
    return true;
  }
  console.log("newData");
  return false;
}

export default productsData;
