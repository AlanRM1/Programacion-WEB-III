const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prac4crud'
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('¡Conectado a la base de datos!');
});

// Ruta para obtener datos
app.get('/api/usuarios', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Ruta para insertar un nuevo usuario
app.post('/api/usuarios', (req, res) => {
    const { nombre, email, edad } = req.body;
    const query = 'INSERT INTO users (nombre, email, edad) VALUES (?, ?, ?)';
    db.query(query, [nombre, email, edad], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: 'Usuario creado con éxito!' });
        }
    });
});

// Ruta para actualizar un usuario
app.put('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, edad } = req.body;
    const query = 'UPDATE users SET nombre=?, email=?, edad=? WHERE id=?';
    db.query(query, [nombre, email, edad, id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: 'Usuario actualizado con éxito!' });
        }
    });
});

// Ruta para eliminar un usuario
app.delete('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id=?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: 'Usuario eliminado con éxito!' });
        }
    });
});

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});
