const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const usuarioController = require('./controllers/UsuarioController');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/usuarios', usuarioController.listarUsuarios);
app.post('/usuarios', usuarioController.crearUsuario);
app.get('/usuarios/editar/:id', usuarioController.mostrarFormularioEdicion);
app.post('/usuarios/editar/:id', usuarioController.actualizarUsuario);
app.post('/usuarios/eliminar/:id', usuarioController.eliminarUsuario);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('index');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
