const db = require("../db/queries");

async function getNewProduct(req, res) {
  const list = await db.joinItemsOnCategory();
  const productCount = (await db.countItemsCategorys()).productRows;
  const categoryCount = (await db.countItemsCategorys()).categoryRows;
  const categoryList = await db.getAllCategory();

  res.render("newProduct", {
    title: "New Product",
    list: list,
    productCount: productCount,
    categoryCount: categoryCount,
    categoryList: categoryList,
  });
}

async function postNewProduct(req, res) {
  const productData = await req.body;
  await db.insertProductData(productData);
  res.redirect("/");
}

module.exports = { getNewProduct, postNewProduct };
