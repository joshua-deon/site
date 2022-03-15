import React from "react";
import "./styles.scss";

const ContactForm = () => {
  return (
    <div className="contact-form">
      Tap in, friend 📲
      <form>
        <label>
          Name:
          <br />
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email Address:
          <br />
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          Message:
          <br />
          <textarea type="text" name="message" rows="4" />
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
