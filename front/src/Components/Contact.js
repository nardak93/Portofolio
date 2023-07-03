import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    setSubmitting(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}/contact`, {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setSuccess(true);
        setError("");
      } else {
        setError("Erreur, essayer plus tard. Merci");
        setSuccess(false);
      }
    } catch (error) {
      setError("Erreur, essayer plus tard. Merci");
      setSuccess(false);
    }

    setSubmitting(false);
  };

  return (
    <div className="contact-container">
      <section className="contact-title">
      <h2>Contactez-moi pour discuter de votre projet web.</h2>  
      <h3>Développeur Web à votre service !</h3>
      </section>
        
    <section className="contact">
      
      
      {success && <p>Message envoye avec success!</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          className="message"
          name="message"
          id="message"
          cols="40"
          rows="20"
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button id="submit" type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Envoyer"}
        </button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25225.631665609595!2d2.2075596550754497!3d48.71614232209511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67815c8bc82eb%3A0xfcf8dd0628c34a6!2s91120%20Palaiseau!5e0!3m2!1sen!2sfr!4v1686821645725!5m2!1sen!2sfr"
        width="400"
        height="450"
        style={{ border: 0,borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </section>
    </div>
  );
};


export default Contact;

