const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_system",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.send("Hello to MySQL API");
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) console.log(err.message);
    else res.status(200).json(result);
  });
});

app.post("/create", (req, res) => {
  const { name, age, country, position, wage } = req.body;
  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) console.log(err);
      else res.status(200).send("Values inserted.");
    }
  );
});

app.put("/update", (req, res) => {
  const { id, name, age, country, position, wage } = req.body;
  db.query(
    "UPDATE employees SET name = ?, age = ?, country = ?, position = ?, wage = ? WHERE id = ?",
    [name, age, country, position, wage, id],
    (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    }
  );
});

app.delete(`/delete/:id`, (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on PORT", 3000);
});
