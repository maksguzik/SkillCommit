import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './userAuthentication/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
