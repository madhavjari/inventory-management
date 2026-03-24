const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query(`SELECT * FROM cosmetic_item`);
  return rows;
}

async function insertProductData(productData) {
  await pool.query(
    `INSERT INTO cosmetic_item 
    (productname,sellprice,stock,costprice,category_id)
    VALUES ($1,$2,$3,$4,$5)`,
    [
      productData.name,
      productData.sellPrice,
      productData.stock,
      productData.costPrice,
      productData.category,
    ],
  );
}

async function insertCategoryData(categoryData) {
  await pool.query(
    `INSERT INTO category
    (categoryname)
    VALUES ($1)`,
    [categoryData.categoryName],
  );
}

async function joinItemsOnCategory() {
  const { rows } = await pool.query(
    `SELECT productid, productname,sellprice,stock,costprice,categoryname 
    FROM cosmetic_item 
    JOIN category ON category.id = cosmetic_item.category_id`,
  );
  return rows;
}

async function countItemsCategorys() {
  const totalProduct = await pool.query(
    `SELECT COUNT(productname) AS product_count 
    FROM cosmetic_item`,
  );
  const totalCategory = await pool.query(
    `SELECT COUNT(categoryname) AS category_count 
    FROM category`,
  );
  const productRows = totalProduct.rows[0].product_count;
  const categoryRows = totalCategory.rows[0].category_count;
  return { productRows, categoryRows };
}

async function getAllCategory() {
  const { rows } = await pool.query("SELECT * FROM category");
  return rows;
}

module.exports = {
  getAllItems,
  getAllCategory,
  joinItemsOnCategory,
  countItemsCategorys,
  insertProductData,
  insertCategoryData,
};
