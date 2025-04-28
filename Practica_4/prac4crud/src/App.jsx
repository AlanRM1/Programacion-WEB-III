import React from 'react';
import ReadUsers from './components/ReadUsers';
import CreateUser from './components/CreateUser';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Create Read Update Delete con React</h1>
            
            <div className="row">
                <div className="col-lg-9 col-md-12 mb-4">
                    <ReadUsers />
                </div>
                
                <div className="col-lg-3 col-md-12">
                    <CreateUser />
                </div>
            </div>
        </div>
    );
};

export default App;