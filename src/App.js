import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import { Routes, Route, Link } from 'react-router-dom';
import Result from './screens/Result';
import Diet from './screens/Diet';
import Exercise from './screens/Exercise';
import Entries from './screens/Entries';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/result' element={<Result />} />
        <Route path='/diet' element={<Diet />} />
        <Route path='/exercise' element={<Exercise />} />
        <Route path='/entries' element={<Entries />} />
      </Routes>
    </div>
  );
}

export default App;
