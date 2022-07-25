import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Overview from './pages/Overview';
import Add from './pages/Add';
import Transactions from './pages/Transactions';

const App = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate replace to="/overview" />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/add' element={<Add />} />
            <Route path='/transactions' element={<Transactions />} />
        </Routes>
    )
}

export default App;