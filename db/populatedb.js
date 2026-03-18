require("dotenv").config();
const { Client } = require("pg");

const SQL1 = `CREATE TABLE IF NOT EXISTS category
(id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
categoryname VARCHAR(50) UNIQUE);
INSERT INTO category (categoryname) 
VALUES
  ('Makeup'),
  ('Skin'),
  ('Hair'),
  ('Body');
`;

const SQL2 = `INSERT INTO cosmetic_item 
(productname,sellprice,stock,costprice,category_id) 
VALUES ('Himalayan Facewash',150,5,120,2)`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL_LOCAL,
  });
  await client.connect();
  await client.query(SQL2);
  await client.end();
  console.log("done");
}

main();
