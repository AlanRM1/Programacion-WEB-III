import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
    const [userId, setUserId] = useState('');

    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3001/api/usuarios/${userId}`)
            .then(response => {
                alert(response.data.message);
                setUserId(''); // Limpiar el campo de ID
            })
            .catch(error => {
                console.error('Error eliminando usuario:', error);
            });
    };

    return (
        <div>
            <h2>Eliminar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID del Usuario:</label>
                    <input
                        type="text"
                        value={userId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Eliminar Usuario</button>
            </form>
        </div>
    );
};

export default DeleteUser;
