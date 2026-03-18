# Inventory

A simple inventory management app for beauty and cosmetic products, built with Node.js, Express, EJS, and PostgreSQL.

This project lets you track products, organize them into categories, and manage core pricing and stock details through a clean server-rendered interface.

## Features

- View all products with category, selling price, cost price, and stock
- View all product categories
- Add/Delete/Update products
- Add/Delete/Update new categories
- Display total product and category counts in the dashboard header
- Server-rendered UI with a shared custom stylesheet

## Tech Stack

- Node.js
- Express
- EJS
- PostgreSQL
- `pg`
- `dotenv`

## Project Structure

```text
inventory/
├── controller/     # Route controller logic
├── db/             # Database connection, queries, and seed script
├── public/         # Static assets like CSS
├── routes/         # Express route definitions
├── views/          # EJS templates and partials
├── server.js       # App entry point
└── package.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd inventory
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Add your PostgreSQL credentials to a `.env` file in the project root.

```env
DB_HOST=localhost
DB_USER=your_postgres_user
DB_NAME=your_database_name
DB_PASSWORD=your_postgres_password
DB_PORT=5432
DB_URL_LOCAL=postgresql://your_postgres_user:your_postgres_password@localhost:5432/your_database_name
```

## Database Setup

This app uses PostgreSQL.

The project includes a seed/setup script at `db/populatedb.js`.

Current notes based on the code:

- `db/pool.js` uses `DB_HOST`, `DB_USER`, `DB_NAME`, `DB_PASSWORD`, and `DB_PORT`
- `db/populatedb.js` uses `DB_URL_LOCAL`
- The seed script currently contains SQL for inserting starter data
- You may want to adjust `db/populatedb.js` so it creates both required tables before inserting records

### Suggested schema

The application expects these tables:

```sql
CREATE TABLE IF NOT EXISTS category (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  categoryname VARCHAR(50) UNIQUE
);

CREATE TABLE IF NOT EXISTS cosmetic_item (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  productname VARCHAR(255) NOT NULL,
  sellprice NUMERIC NOT NULL,
  stock INTEGER NOT NULL,
  costprice NUMERIC NOT NULL,
  category_id INTEGER REFERENCES category(id)
);
```

### Seed the database

Run the seed script if you want starter data:

```bash
node db/populatedb.js
```

## Running the App

Start the server with:

```bash
npm start
```

The app runs at:

```text
http://localhost:3000
```

## Routes

| Route           | Method | Description            |
| --------------- | ------ | ---------------------- |
| `/`             | `GET`  | Home page / dashboard  |
| `/productList`  | `GET`  | View all products      |
| `/categoryList` | `GET`  | View all categories    |
| `/newproduct`   | `GET`  | Show add product form  |
| `/newproduct`   | `POST` | Create a new product   |
| `/newcategory`  | `GET`  | Show add category form |
| `/newcategory`  | `POST` | Create a new category  |

## Scripts

```bash
npm start
```

## Future Improvements

- Add form validation and user-friendly error handling
- Add database migrations or a more complete setup script
- Add tests
- Add pagination or search for larger inventories

## Author

Built as a beauty products inventory management project using Express and PostgreSQL.

## License

This project is licensed under the ISC License.
