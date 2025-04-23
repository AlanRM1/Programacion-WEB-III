import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ refreshUsers }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        edad: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Enviando datos:', formData); 
            const response = await axios.post('http://localhost:5000/users', formData);
            console.log('Respuesta del servidor:', response.data); 
            setFormData({ nombre: '', email: '', edad: '' });
            refreshUsers();
        } catch (error) {
            if (!formData.nombre || !formData.email || !formData.edad) {
                console.error('Todos los campos son obligatorios');
                return;
            }else
            console.error('Error al agregar usuario:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
            <h2 className="text-center">Agregar Usuario</h2>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input
                    type="number"
                    className="form-control"
                    id="edad"
                    name="edad"
                    placeholder="Edad"
                    value={formData.edad}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-success w-100">Agregar</button>
        </form>
    );
};

export default UserForm;
