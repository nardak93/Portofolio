
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Contact from './Pages/ContactPage';
import Portofolio from './Pages/Portofolio';
import AdminPage from './Pages/AdminPage';
import Login from './Components/Login';
import NotFound from './Components/NotFound';

// comment

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="admin/*" element={<AdminPage isAuthenticated={isAuthenticated} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;








