const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// conectar a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prac4crud',
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos prac4crud');
});


app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error al obtener usuarios:', err);
            res.status(500).send('Error al obtener usuarios');
        } else {
            res.json(result);
        }
    });
});

// agregar usuario
app.post('/users', (req, res) => {
    const { nombre, email, edad } = req.body;
    const sql = 'INSERT INTO users (nombre, email, edad) VALUES (?, ?, ?)';
    db.query(sql, [nombre, email, edad], (err, result) => {
        if (err) {
            console.error('Error al agregar usuario:', err);
            res.status(500).send('Error al agregar usuario');
        } else {
            res.send('Usuario agregado correctamente');
        }
    });
});

// actualizar usuario
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, edad } = req.body;
    const sql = 'UPDATE users SET nombre = ?, email = ?, edad = ? WHERE id = ?';
    db.query(sql, [nombre, email, edad, id], (err, result) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            res.status(500).send('Error al actualizar usuario');
        } else {
            res.send('Usuario actualizado correctamente');
        }
    });
});

// eliminar usuario
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error al eliminar usuario:', err);
            res.status(500).send('Error al eliminar usuario');
        } else {
            res.send('Usuario eliminado correctamente');
        }
    });
});

app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});

app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});
