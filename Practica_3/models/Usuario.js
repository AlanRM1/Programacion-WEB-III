const db = require('./db');

exports.getUsuarios = (callback) => {
    const query = 'SELECT * FROM usuarios';
    db.query(query, (error, results) => {
        if (error) {
            console.error('Error obteniendo usuarios:', error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

exports.crearUsuario = (data, callback) => {
    const query = 'INSERT INTO usuarios (nombre, email, edad) VALUES (?, ?, ?)';
    db.query(query, [data.nombre, data.email, data.edad], (error, results) => {
        if (error) {
            console.error('Error creando usuario:', error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

exports.actualizarUsuario = (id, data, callback) => {
    const query = 'UPDATE usuarios SET nombre = ?, email = ?, edad = ? WHERE id = ?';
    db.query(query, [data.nombre, data.email, data.edad, id], (error, results) => {
        if (error) {
            console.error('Error actualizando usuario:', error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

exports.eliminarUsuario = (id, callback) => {
    const query = 'DELETE FROM usuarios WHERE id = ?';
    db.query(query, [id], (error, results) => {
        if (error) {
            console.error('Error eliminando usuario:', error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

exports.obtenerUsuarioPorId = (id, callback) => {
    const query = 'SELECT * FROM usuarios WHERE id = ?';
    db.query(query, [id], (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results[0]);
        }
    });
};
