const express = require("express");
const app = express();
const PORT = 3000;
const indexRouter = require("./routes/index");
const newProductRouter = require("./routes/newProduct");
const newCategoryRouter = require("./routes/newCategory");
const productListRouter = require("./routes/productList");
const categoryListRouter = require("./routes/categoryList");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(indexRouter);
app.use(newProductRouter);
app.use(newCategoryRouter);
app.use(productListRouter);
app.use(categoryListRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
