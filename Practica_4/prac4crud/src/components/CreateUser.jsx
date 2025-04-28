import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        edad: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/usuarios', formData)
            .then(response => {
                alert(response.data.message);
                setFormData({ nombre: '', email: '', edad: '' });
            })
            .catch(error => {
                console.error('Error creando usuario:', error);
            });
    };

    return (
        <div className="container mt-4">
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Edad:</label>
                    <input
                        type="number"
                        name="edad"
                        value={formData.edad}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Crear Usuario</button>
            </form>
        </div>
    );
};

export default CreateUser;
