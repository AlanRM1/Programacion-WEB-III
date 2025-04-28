import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
    const [userId, setUserId] = useState('');
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        edad: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/api/usuarios/${userId}`, formData)
            .then(response => {
                alert(response.data.message);
                setUserId('');
                setFormData({ nombre: '', email: '', edad: '' }); // Limpiar formulario
            })
            .catch(error => {
                console.error('Error actualizando usuario:', error);
            });
    };

    return (
        <div>
            <h2>Actualizar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID del Usuario:</label>
                    <input
                        type="text"
                        value={userId}
                        onChange={handleIdChange}
                        required
                    />
                </div>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Edad:</label>
                    <input
                        type="number"
                        name="edad"
                        value={formData.edad}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Actualizar Usuario</button>
            </form>
        </div>
    );
};

export default UpdateUser;
