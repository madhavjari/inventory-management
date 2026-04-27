const db = require("../db/queries");

async function editCategoryPost(req, res) {
  const categoryId = req.params.id;
  const categoryData = await req.body;
  await db.editCategory(categoryData, categoryId);
  res.redirect("/categoryList");
}

module.exports = { editCategoryPost };
