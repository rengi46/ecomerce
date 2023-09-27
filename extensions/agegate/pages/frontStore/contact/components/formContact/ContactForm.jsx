import React, { useState } from "react";
// import sgMail from "@sendgrid/mail";
import "./contactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: email,
      from: "YOUR_EMAIL_ADDRESS",
      subject: `New message from ${name}`,
      text: message,
    };

    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     console.log("Email sent");
    //     alert("Message sent successfully!");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     alert("An error occurred, please try again.");
    //   });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="formContact" onSubmit={handleSubmit}>
      <div className="formContact__name">
        <label  htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="formContact__email">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="formContact__message">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button className="formContact__submit" type="submit">Send</button>
    </form>
  );
};

export default ContactForm;