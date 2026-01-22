import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
        "service_bm0nejy",
        "template_0zlcbnl",
        {
          from_name: form.fname + " " + form.lname,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "QcXe3ZQChDPrbjjuo"
      ).then(
      () => {
        alert("Message sent successfully!");
        setForm({ fname: "", lname: "", email: "", phone: "", message: "" });
      },
      () => {
        alert("Failed to send message!");
      }
    );
  };

  return (
    <div className="contact-page">
      <div className="contact-left">
        <h2>Get in touch</h2>
        <h3>Let's talk</h3>
        <p>Get in touch with me to discuss your project or just to connect.</p>

        <div className="contact-info">
          <p>📞 Phone: +91 7778877401</p>
          <p>✉️ Email: bhaviiwala@gmail.com</p>
          <p className="linkedin-box">
            🔗 LinkedIn:
            <a
              href="https://www.linkedin.com/in/bhavi-iwala-b52590276"
              target="_blank"
              rel="noreferrer"
            >
              Bhavi Iwala
            </a>
          </p>
        </div>
      </div>

      <div className="contact-right">
        <form className="form-box" onSubmit={sendEmail}>
          <h4>Your contact information</h4>

          <div className="row">
            <input name="fname" value={form.fname} onChange={handleChange} placeholder="First name" required />
            <input name="lname" value={form.lname} onChange={handleChange} placeholder="Last name" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" required />
          </div>

          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />

          <h5>Tell me what you need help with</h5>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Type Your Message Here" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
