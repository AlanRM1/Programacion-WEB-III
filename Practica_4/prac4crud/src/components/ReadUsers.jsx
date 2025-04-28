import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadUsers = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        edad: ''
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3001/api/usuarios')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error obteniendo usuarios:', error);
            });
    };

    const deleteUser = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
            axios.delete(`http://localhost:3001/api/usuarios/${id}`)
                .then(response => {
                    alert(response.data.message);
                    fetchUsers();
                })
                .catch(error => {
                    console.error('Error eliminando usuario:', error);
                });
        }
    };

    const startEditing = (user) => {
        setEditingUser(user.id);
        setFormData({
            nombre: user.nombre,
            email: user.email,
            edad: user.edad
        });
    };

    const saveChanges = () => {
        axios.put(`http://localhost:3001/api/usuarios/${editingUser}`, formData)
            .then(response => {
                alert(response.data.message);
                setEditingUser(null);
                fetchUsers();
            })
            .catch(error => {
                console.error('Error actualizando usuario:', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container mt-4">
            <h2>Lista de Usuarios</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Edad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            {editingUser === user.id ? (
                                <>
                                    <td>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="edad"
                                            value={formData.edad}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </td>
                                    <td>
                                        <button className="btn btn-success me-2" onClick={saveChanges}>Guardar</button>
                                        <button className="btn btn-secondary" onClick={() => setEditingUser(null)}>Cancelar</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{user.nombre}</td>
                                    <td>{user.email}</td>
                                    <td>{user.edad} años</td>
                                    <td>
                                        <button className="btn btn-warning me-2" onClick={() => startEditing(user)}>Editar</button>
                                        <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Borrar</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReadUsers;
