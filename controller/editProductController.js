const db = require("../db/queries");

async function editProductPost(req, res) {
  const productId = req.params.id;
  const productData = await req.body;
  await db.editProduct(productData, productId);
  res.redirect("/productList");
}

module.exports = { editProductPost };
