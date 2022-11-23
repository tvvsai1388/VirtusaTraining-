import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Password from './components/pages/Password';
import Popupbox from './components/pages/Popupbox';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/password" element={<Password/>} />
          <Route path="/popupbox" element={<Popupbox/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
