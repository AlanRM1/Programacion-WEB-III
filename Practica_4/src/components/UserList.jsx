import React, { useEffect, useState } from 'react';
import UserEditForm from './UserEditForm';
import axios from 'axios';

const UserList = ({ refresh }) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    // Obtener usuarios servidor
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            fetchUsers(); // Actualizar lista
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        };
        fetchUsers();
    }, [refresh]);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Lista de Usuarios</h1>
            {selectedUser ? (
                <UserEditForm
                    user={selectedUser}
                    refreshUsers={fetchUsers}
                    closeForm={() => setSelectedUser(null)}
                />
            ) : (
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
                                <td>{user.nombre}</td>
                                <td>{user.email}</td>
                                <td>{user.edad}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-2" onClick={() => setSelectedUser(user)}>
                                        Editar
                                    </button>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
        
};

export default UserList;
