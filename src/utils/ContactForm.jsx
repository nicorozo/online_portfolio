import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", phone: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef();

  const validateForm = () => {
    let formValid = true;
    let newErrors = { name: "", phone: "", message: "" };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      formValid = false;
    }

    // Phone number validation (basic regex for phone numbers)
    const phoneRegex = /^\d{9}$/; // Simple check for 10-digit numbers
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
  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
        () => {
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
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="contact_form-text-input"
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div className="contact_form-group radio">
        <span className="contact_form-options-title">
          Any project or idea in mind?
        </span>
        <div className="contact_form-options-container">
          <div className="contact_form-options-collumn">
            <div className="contact_form-options-div">
              <input type="radio" name="photo_type" id="photo_portrait" />
              <label htmlFor="photo_portrait">Portrait</label>
            </div>
            <div className="contact_form-options-div">
              <input type="radio" name="photo_type" id="photo_family" />
              <label htmlFor="photo_family">Family</label>
            </div>
            <div className="contact_form-options-div">
              <input type="radio" name="photo_type" id="photo_boudoir" />
              <label htmlFor="photo_boudoir">Boudoir</label>
            </div>

            <div className="contact_form-options-div">
              <input type="radio" name="photo_type" id="photo_event" />
              <label htmlFor="photo_event">Event</label>
            </div>

            <div className="contact_form-options-div">
              <input type="radio" name="photo_type" id="photo_wedding" />
              <label htmlFor="photo_wedding">Wedding</label>
            </div>

            <div className="contact_form-options-div">
              <input type="radio" name="photo_type" id="photo_other" />
              <label htmlFor="photo_other">Other</label>
            </div>
          </div>
        </div>
        <div className="contact_form-group">
          <label htmlFor="contact_message">Message</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact_form-text-input message"
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
