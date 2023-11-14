
import React, { useState, useEffect, useContext } from 'react';
import { Link, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider';
import AddProject from '../Components/AddProject';
import UpdateSkills from '../Components/UpdateSkills';
import ProjectList from '../Components/ProjectList';
import "../App.css";


const AdminPage = () => {
  const [activeComponent, setActiveComponent] = useState('addProject');
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleNavigation = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleLogout = () => {
    setIsAuthenticated(false); 
    localStorage.removeItem('token');
    navigate('/login'); 
  };

  return (
    <div className='wrapper-general'>
      <div id='admin-menu'>
        <ul className='ul-wrapper' >
            <button className='logout' onClick={handleLogout}>Logout</button> 
          <li id='admin-menu-item-addProject'>
            <Link
              to='add-project'
              onClick={() => handleNavigation('addProject')}
              id={`admin-menu-link-addProject ${activeComponent === 'addProject' ? 'active' : ''}`}
            >
              Add Project
            </Link>
          </li>
          <li id='admin-menu-item-updateSkills'>
            <Link
              to='update-skills'
              onClick={() => handleNavigation('updateSkills')}
              id={`admin-menu-link-updateSkills ${activeComponent === 'updateSkills' ? 'active' : ''}`}
            >
              Update Skills
            </Link>
          </li>
          <li id='admin-menu-item-projectList'>
            <Link
              to='project-list'
              onClick={() => handleNavigation('projectList')}
              id={`admin-menu-link-projectList ${activeComponent === 'projectList' ? 'active' : ''}`}
            >
              Project List
            </Link>
          </li>
        </ul>
        <Routes>
          <Route
            path='add-project'
            element={isAuthenticated ? <AddProject /> : <Navigate to='/admin' />}
          />
          <Route
            path='update-skills'
            element={isAuthenticated ? <UpdateSkills /> : <Navigate to='/admin' />}
          />
          <Route
            path='project-list'
            element={isAuthenticated ? <ProjectList /> : <Navigate to='/admin' />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;





