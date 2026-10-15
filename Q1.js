const mysql = require("mysql");


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "k2",
});


db.connect((err) => {
  if (err) {
    console.log("Connection failed:", err.message);
    return;
  }

  console.log("Database connected successfully!");

  
  displayData();
});


function displayData() {
  const sql = "SELECT * FROM emp";

  db.query(sql, (err, data) => {
    if (err) {
      console.log("Error displaying data:", err.message);
      return;
    }

    console.log("Employee Records:");
    console.log(data);
  });
}


function insertData(name, salary) {
  const user = {
    name: name,
    salary: salary,
  };

  const sql = "INSERT INTO emp SET ?";

  db.query(sql, user, (err, result) => {
    if (err) {
      console.log("Error inserting data:", err.message);
      return;
    }

    console.log("Record inserted successfully!");
    console.log("Inserted ID:", result.insertId);

    displayData();
  });
}


function updateData(name, salary, id) {
  const sql = "UPDATE emp SET name = ?, salary = ? WHERE id = ?";

  const values = [name, salary, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("Error updating data:", err.message);
      return;
    }

    if (result.affectedRows === 0) {
      console.log("No employee found with this ID.");
      return;
    }

    console.log("Record updated successfully!");

    displayData();
  });
}


function deleteData(id) {
  const sql = "DELETE FROM emp WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log("Error deleting data:", err.message);
      return;
    }

    if (result.affectedRows === 0) {
      console.log("No employee found with this ID.");
      return;
    }

    console.log("Record deleted successfully!");

    displayData();
  });
}
