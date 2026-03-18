const db = require("../db/queries");

async function getNewCategory(req, res) {
  const list = await db.joinItemsOnCategory();
  const productCount = (await db.countItemsCategorys()).productRows;
  const categoryCount = (await db.countItemsCategorys()).categoryRows;
  res.render("newCategory", {
    title: "New Category",
    list: list,
    productCount: productCount,
    categoryCount: categoryCount,
  });
}

async function postNewCategory(req, res) {
  const categoryData = await req.body;
  await db.insertCategoryData(categoryData);
  res.redirect("/");
}

module.exports = { getNewCategory, postNewCategory };
