import React, { useState } from "react";
import styles from './contact.module.css'

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div id="contactform" className={styles.contactForm}>
    <form onSubmit={handleSubmit} id="contact">
      <div className={styles.formField}>
        <label htmlFor="name">Name *:</label>
        <input type="text" id="name" placeholder="Your Name..." required />
      </div>
      <div className={styles.formField}>
        <label htmlFor="email">Email Address *:</label>
        <input type="email" id="email" placeholder="Your Email Address..."required />
      </div>
      <div className={styles.message}>
        <label htmlFor="message">Message *:</label>
        <textarea id="message" placeholder="Your Message..."required  />
      </div>
      <button type="submit">{status}</button>
    </form>
  </div>
  );
};

export default Contact;