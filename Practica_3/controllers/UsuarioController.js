const Usuario = require('../models/Usuario');

exports.listarUsuarios = (req, res) => {
    Usuario.getUsuarios((error, resultados) => {
        if (error) {
            res.status(500).send('Error al obtener los usuarios');
        } else {
            res.render('usuarios', { usuarios: resultados });
        }
    });
};

exports.crearUsuario = (req, res) => {
    const nuevoUsuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        edad: req.body.edad,
    };
    Usuario.crearUsuario(nuevoUsuario, (error, resultado) => {
        if (error) {
            res.status(500).send('Error al crear el usuario');
        } else {
            res.redirect('/usuarios');
        }
    });
};

exports.actualizarUsuario = (req, res) => {
    const id = req.params.id;
    const datosActualizados = {
        nombre: req.body.nombre,
        email: req.body.email,
        edad: req.body.edad,
    };

    Usuario.actualizarUsuario(id, datosActualizados, (error, resultado) => {
        if (error) {
            console.error('Error al actualizar el usuario:', error);
            res.status(500).send('Error al actualizar el usuario');
        } else {
            res.redirect('/usuarios');
        }
    });
};

exports.eliminarUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.eliminarUsuario(id, (error, resultado) => {
        if (error) {
            res.status(500).send('Error al eliminar el usuario');
        } else {
            res.redirect('/usuarios');
        }
    });
};

exports.mostrarFormularioEdicion = (req, res) => {
    const id = req.params.id;
    Usuario.obtenerUsuarioPorId(id, (error, usuario) => {
        if (error) {
            res.status(500).send('Error obteniendo el usuario');
        } else {
            res.render('editar', { usuario: usuario });
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
