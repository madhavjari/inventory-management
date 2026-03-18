const db = require("../db/queries");
const express = require("express");

async function getCosmeticList(req, res) {
  const list = await db.joinItemsOnCategory();
  const productCount = (await db.countItemsCategorys()).productRows;
  const categoryCount = (await db.countItemsCategorys()).categoryRows;
  res.render("index", {
    title: "Home",
    list: list,
    productCount: productCount,
    categoryCount: categoryCount,
  });
}

module.exports = { getCosmeticList };
