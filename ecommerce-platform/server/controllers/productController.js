
const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  const { search, category } = req.query;
  let query = {};

  if (search) {
    query.name = { $regex: search, $options: 'i' };
  }

  if (category) {
    query.category = category;
  }

  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createProduct = async (req, res) => {
  const { name, description, price, category, imageUrl } = req.body;
  try {
    const product = new Product({ name, description, price, category, imageUrl });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
