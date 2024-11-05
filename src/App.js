import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './pages/Home1';
import Login1 from './pages/Login1';
import Signup1 from './pages/Signup1';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home1 />} />
                <Route path="/login" element={<Login1 />} />
                <Route path="/signup" element={<Signup1 />} />
            </Routes>
        </Router>
    );
};

export default App;
