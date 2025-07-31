import "./ContactForm.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8wlk84r",
        "template_axvigrv",
        form.current,
        "aV8vJ4ZVz5h8lZ-ak"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="name" required />

        <div className="row">
          <input type="email" placeholder="E-Mail" name="email" required />
          <input type="text" placeholder="Phone" name="phone" />
        </div>

        <div className="row">
          <input type="text" placeholder="Country" name="country" />
          <input type="text" placeholder="Products" name="products" />
        </div>

        <textarea
          placeholder="Enter Your Requirement Details"
          name="message"
          required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
