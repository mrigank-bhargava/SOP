import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import { Routes, Route, Link } from "react-router-dom";
import Result from './screens/Result';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/result" element={<Result />} />

      </Routes>
    </div>
  );
}

export default App;
