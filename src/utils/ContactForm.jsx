import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef();

  const validateForm = () => {
    let formValid = true;
    let newErrors = { name: "", phone: "" };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      formValid = false;
    }

    // Phone number validation (basic regex for phone numbers)
    const phoneRegex = /^\d{10}$/; // Simple check for 10-digit numbers
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  /* const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, form, USER_ID).then(
        () => {
          setSuccessMessage("Message successfully sent!");
        },
        (error) => {
          console.error("Failed to send the message.", error);
        }
      );
    }
  }; */
  function testSend(e) {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData, form);
      setSuccessMessage("Sent!");
    }
  }

  return (
    <form ref={form} onSubmit={testSend} className="contact_form">
      <div className="contact_form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="contact_form-group">
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      {successMessage && <p className="success">{successMessage}</p>}
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
