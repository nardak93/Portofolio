import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider.js"; 
import '../App.css'; 

function ProjectList() {
  const { isAuthenticated, token } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    let timeoutId;

    if (message !== "") {
      timeoutId = setTimeout(() => {
        setMessage("");
      }, 2000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [message]);

  const fetchProjects = () => {
    axios
      .get(`${process.env.REACT_APP_HOST}/projects`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        setProjects(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditProject = (projectId, updatedProject) => {
    axios
      .put(`${process.env.REACT_APP_HOST}/projects/${projectId}`, updatedProject, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        console.log(response.data);
        fetchProjects();
        setMessage("Changes have been saved successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteProject = (projectId) => {
    axios
      .delete(`${process.env.REACT_APP_HOST}/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        console.log(response.data);
        fetchProjects();
        setMessage("Projet supprimé avec succès !"); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (projectId, property, value) => {
    const updatedProject = projects.map((project) => {
      if (project._id === projectId) {
        return {
          ...project,
          [property]: value,
        };
      }
      return project;
    });
    setProjects(updatedProject);
    setMessage("");
  };

  if (!isAuthenticated) {
    return <p>Please log in to view the project list.</p>;
  }

  return (
    <div className="project-list">
      <h1>Project List</h1>
      <p>{message}</p>
      {projects.map((project) => (
        <div key={project._id} className="project">
          <input
            type="text"
            value={project.name}
            onChange={(e) =>
              handleInputChange(project._id, "name", e.target.value)
            }
          />
          <textarea
            value={project.description}
            onChange={(e) =>
              handleInputChange(project._id, "description", e.target.value)
            }
          />
          <img
            src={`${process.env.REACT_APP_HOST}/uploads/${project.img}`}
            alt={project.name}
          />
          <button
            onClick={() => {
              handleEditProject(project._id, project);
            }}
          >
            Save Changes
          </button>
          <button
            className="delete"
            onClick={() => {
              handleDeleteProject(project._id);
            }}
          >
            Delete Project
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;








