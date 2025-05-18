
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const products = [
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: 99.99,
    category: "Electronics"
  },
  {
    name: "Yoga Mat",
    description: "Non-slip mat for yoga and exercise.",
    price: 25.99,
    category: "Fitness"
  },
  {
    name: "Running Shoes",
    description: "Lightweight and comfortable running shoes.",
    price: 59.99,
    category: "Footwear"
  },
  {
    name: "Smart Watch",
    description: "Fitness tracker with heart rate monitor.",
    price: 149.99,
    category: "Wearables"
  },
  {
    name: "Water Bottle",
    description: "Insulated stainless steel water bottle.",
    price: 19.99,
    category: "Accessories"
  }
];

const seedProducts = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Products seeded");
  mongoose.disconnect();
};

seedProducts();
