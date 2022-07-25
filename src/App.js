import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Overview from './pages/Overview';
import AddExpense from './components/AddExpense/AddExpense';

const App = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate replace to="/overview" />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/add' element={<AddExpense />} />
        </Routes>
    )
}

export default App;