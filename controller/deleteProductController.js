const db = require("../db/queries");

async function deleteProductPost(req, res) {
  const id = req.params.id;
  await db.deleteProduct(id);
  res.redirect("/productList");
}

module.exports = { deleteProductPost };
