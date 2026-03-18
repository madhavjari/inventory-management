const db = require("../db/queries");

async function getList(req, res) {
  const list = await db.getAllCategory();
  const productCount = (await db.countItemsCategorys()).productRows;
  const categoryCount = (await db.countItemsCategorys()).categoryRows;
  res.render("categoryList", {
    title: "Category List",
    list: list,
    productCount: productCount,
    categoryCount: categoryCount,
  });
}

module.exports = { getList };
