


import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css'

function Admin() {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    value: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/api/updateSkills`)
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name) {
      console.error("No skill selected");
      return;
    }

    const selectedSkill = skills.find((skill) => skill.name === formData.name);

    if (!selectedSkill) {
      console.error("Invalid skill");
      return;
    }

    axios
      .put(`${process.env.REACT_APP_HOST}/api/updateSkills/${selectedSkill._id}`, {
        name: formData.name,
        value: formData.value,
      })
      .then((response) => {
        console.log(response.data);
        setMessage(`${formData.name} has been updated successfully!`); 
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <article className="admin-container">
      <section className="update-form">
        <h1>Update Skills</h1>
        <p>{message}</p> {/* Display the message */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Select Skill:</label>
          <select
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          >
            <option value="">Select a skill</option>
            {skills.map((skill) => (
              <option key={skill._id} value={skill.name}>
                {skill.name}
              </option>
            ))}
          </select>
          <br />
          <br />
          <label htmlFor="value">Value:</label>
          <input
            type="text"
            id="value"
            name="value"
            value={formData.value}
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </article>
  );
}

export default Admin;
