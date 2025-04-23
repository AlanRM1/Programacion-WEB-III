import React, { useState } from 'react';
import axios from 'axios';

const UserEditForm = ({ user, refreshUsers, closeForm }) => {
    const [formData, setFormData] = useState({
        nombre: user.nombre,
        email: user.email,
        edad: user.edad,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/users/${user.id}`, formData);
            refreshUsers(); // Actualizar la lista de usuarios
            closeForm(); // Cerrar el formulario
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Editar Usuario</h2>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="number"
                name="edad"
                placeholder="Edad"
                value={formData.edad}
                onChange={handleChange}
            />
            <button type="submit">Guardar cambios</button>
            <button type="button" onClick={closeForm}>
                Cancelar
            </button>
        </form>
    );
};

export default UserEditForm;
