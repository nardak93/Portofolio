import React from "react";
const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form action="mailto:nardak1993@gmail.com">
        <label htmlFor="name">Nom</label>
        <input type="text" name="name" id="name" placeholder="Votre nom" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Votre email" />
        <label htmlFor="message">Message</label>
        <textarea
          className="message"
          name="message"
          id="message"
          cols="40"
          rows="20"
          placeholder="Votre message"
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </section>
  );
}

export default Contact;

