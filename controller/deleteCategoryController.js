const db = require("../db/queries");

async function deleteCategoryPost(req, res) {
  const categoryId = req.params.id;
  await db.deleteCategory(categoryId);
  res.redirect("/categoryList");
}

module.exports = { deleteCategoryPost };
