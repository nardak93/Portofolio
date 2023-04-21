import React, { useState } from "react";

function Admin() {
  const [formData, setFormData] = useState({
    photo: "",
    name: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Here you can write the code to handle form submission, such as sending data to a backend API.
    console.log(formData);
  }

  return (
    <article className="form">
      <section className="addForm">
        <h1>Add Project</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleChange}
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

export default Admin;
