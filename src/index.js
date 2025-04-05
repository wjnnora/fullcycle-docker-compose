const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const dbConfig = {
  host: 'mysql-container',
  user: 'root',
  password: 'password',
  database: 'fullcycle',
};

const connection = mysql.createConnection(dbConfig);

connection.query(`CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL)`);

app.get('/', (req, res) => {

  const name = `FullCycle-${Math.floor(Math.random() * 1000)}`;  
  console.log(`Nome inserido: ${name}`);

  connection.query('INSERT INTO people (name) VALUES (?)', [name], (_) => {      
    connection.query('SELECT name FROM people', (err, results) => {
      const namesList = results.map((row) => `<li>${row.name}</li>`).join('');

      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>${namesList}</ul>
      `);
    });
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Serving running on port ${port}`);
});