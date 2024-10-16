import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef();

  const validateForm = () => {
    let formValid = true;
    let newErrors = { name: "", email: "", message: "" };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      formValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex

    // Assuming you're validating formData.email
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
        () => {
          console.log(form.current);
          setSuccessMessage("Message successfully sent!");
        },
        (error) => {
          console.error("Failed to send the message.", error);
        }
      );
    }
  };
  /* function testSend(e) {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData, form.current);
      setSuccessMessage("Sent!");
    }
  } */

  return (
    <form ref={form} onSubmit={sendEmail} className="contact_form">
      <div className="contact_form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contact_form-text-input"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="contact_form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contact_form-text-input"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="contact_form-group radio">
        <div className="contact_form-group">
          <label htmlFor="contact_message">Any project or idea in mind?</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact_form-text-input message"
            id="contact_message"
          />
        </div>
      </div>

      {successMessage && <p className="success">{successMessage}</p>}
      <button type="submit" className="contact_form-send">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
