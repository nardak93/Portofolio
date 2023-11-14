import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function AddProject() {
  const [formData, setFormData] = useState({
    img: "", 
    name: "",
    description: "",
  });

  const [message, setMessage] = useState("");

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

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleImage(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        img: event.target.files[0], 
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    data.append("img", formData.img);
    data.append("name", formData.name);
    data.append("description", formData.description);

    axios
      .post(`${process.env.REACT_APP_HOST}/projects`, data)
      .then((response) => {
        console.log(response.data);
        setFormData({ img: "", name: "", description: "" });
        setMessage("Projet ajouté avec succès!");
      })
      .catch((error) => {
        console.error(error);
        setMessage("Erreur lors de l'ajout du projet");
      });
  }

  return (
    <article className="project-form">
      <section className="project-addForm">
        <h1>Add Project</h1>
        <p>{message}</p>
        <form onSubmit={handleSubmit} encType="multipart/form-data">  
          <label htmlFor="img">Photo:</label> 
          <input
            type="file"
            id="img"
            name="img" 
            onChange={handleImage}
          />
          <br />
          <br />
          <label htmlFor="name">Name:</label>
          <input
          
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </article>
  );
}

export default AddProject;
