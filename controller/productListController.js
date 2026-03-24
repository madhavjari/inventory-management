const db = require("../db/queries");

async function getList(req, res) {
  const list = await db.joinItemsOnCategory();
  const categoryList = await db.getAllCategory();
  const productCount = (await db.countItemsCategorys()).productRows;
  const categoryCount = (await db.countItemsCategorys()).categoryRows;

  res.render("productList", {
    title: "Product List",
    list: list,
    categoryList: categoryList,
    productCount: productCount,
    categoryCount: categoryCount,
  });
}

module.exports = { getList };
