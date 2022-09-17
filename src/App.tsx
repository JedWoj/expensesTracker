import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Overview from './pages/Overview';
import Add from './pages/Add';
import Transactions from './pages/Transactions';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRout from './components/PrivateRout/PrivateRout';

const App = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate replace to="/overview" />} />
            <Route path='/overview' element={
                <PrivateRout>
                    <Overview />
                </PrivateRout>
            } />
            <Route path='/add' element={
                <PrivateRout>
                    <Add />
                </PrivateRout>
            } />
            <Route path='/transactions' element={
                <PrivateRout>
                    <Transactions />
                </PrivateRout>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}

export default App;