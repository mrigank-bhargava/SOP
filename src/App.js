import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import { Routes, Route, Link } from 'react-router-dom';
import Result from './screens/Result';
import Diet from './screens/Diet';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/result' element={<Result />} />
        <Route path='/diet' element={<Diet />} />
      </Routes>
    </div>
  );
}

export default App;
