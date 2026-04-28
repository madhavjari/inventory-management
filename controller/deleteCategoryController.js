const db = require("../db/queries");

async function deleteCategoryPost(req, res) {
  const categoryId = req.params.id;
  const categoryFound = await db.searchCategoryInProduct(categoryId);
  console.log(categoryFound);
  if (categoryFound) return res.redirect("/categoryList?error=in_use");
  else await db.deleteCategory(categoryId);
  res.redirect("/categoryList");
}

module.exports = { deleteCategoryPost };
