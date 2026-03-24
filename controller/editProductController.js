const db = require("../db/queries");

async function editProductGet(req, res) {
  res.render("/editProduct");
}

async function editProductPost(req, res) {
  res.redirect("/productList");
}

module.exports = { editProductGet, editProductPost };
