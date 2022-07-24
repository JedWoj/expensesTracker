import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Overview from './pages/Overview';

const App = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate replace to="/overview" />} />
            <Route path='/overview' element={<Overview />} />
        </Routes>
    )
}

export default App;