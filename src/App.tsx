import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Overview from './pages/Overview';
import Add from './pages/Add';
import Transactions from './pages/Transactions';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate replace to="/overview" />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/add' element={<Add />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}

export default App;