import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components';
import { Header } from './components';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
    </div>
  );
}

export default App;