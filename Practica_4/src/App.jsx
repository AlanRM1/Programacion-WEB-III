import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const refreshUsers = () => {
        setRefresh(!refresh);
    };

    return (
        <div className='container'>
            <h1>CRUD Usando Vite+React</h1>
            <UserForm refreshUsers={refreshUsers} />
            <UserList refresh={refresh} />
        </div>
    );
};

export default App;