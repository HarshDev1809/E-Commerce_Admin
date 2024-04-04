import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SignInPage from './pages/SignInPage/SignInPage';
import LandingPage from './pages/LandingPage/LandingPage';
import AddProductPage from './pages/AddProductPage/AddProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route path="/home" element = {<LandingPage />} />
        <Route path='products/add' element = {<AddProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
