import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaTwitter,FaArrowUp  } from "react-icons/fa";
import proflieimage from "../images/IMG_4004.jpeg";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", subject: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Response from server:', result);
      alert(result.message);

      // Reset form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <>
        <section className="contact" id="contact">
                <div className="contact-text">
                    <h2>Contact <span>Me</span></h2>
                    <div className="card">
                        <button className="mail">
                            <FaEnvelope className="emailicon" />  <span className="email-text">sumitsvg2409@gmail.com</span>
                        </button>
                        <div className="profile-pic">
                            <img src={proflieimage} alt="Profile Pic" width="50" height="50" />
                        </div>
                        <div className="bottom">
                            <div className="content">
                                <span className="name">Let's work Together</span>
                                <span className="about-me">
                                    Feel free to reach out to me for further inquiries.Drop Me a Message
                                </span>
                            </div>
                            <div className="bottom-bottom">
                                <div className="social-links-container">
                                    <a href=" https://www.facebook.com/people/Sumit-Gupta/pfbid04ey82hK8KFKfCMbnrs5MQspgLQQkG5se4mfpmRqsbg4B2Qm3CGzCP1UKXuJma9Xal/?mibextid=wwXIfr&rdid=OR5T6JciOK2xXsgk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CveBCEBXM%2F%3Fmibextid%3DwwXIfr" target="_blank" >
                                        <FaFacebook className="connect" />
                                    </a>
                                    <a href=" https://www.instagram.com/sumit_gupta_2524?igsh=MWM1MmVtc3d5MzUweQ%3D%3D&utm_source=qr " target="_blank" >
                                        <FaInstagram className="connect" />
                                    </a>
                                    <a href=" https://www.linkedin.com/in/sumit-gupta-81924525b" target="_blank" >
                                        <FaLinkedin className="connect" />
                                    </a>
                                    <a href=" https://x.com/sumitsvg2409" target="_blank" >
                                        <FaTwitter className="connect" />
                                    </a>
                                </div>
                                <button className="button"><FaPhoneAlt />   08128025173</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                        <input type="text" placeholder="Enter your subject" name="subject" value={formData.subject} onChange={handleChange} required />
                        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                        <input type="submit" value="submit" className="send" />
                    </form>
                </div>
            </section>
            <div className="last-text">
                <p>Developed with love by Sumit Gupta © 2025</p>
            </div>
            <a href=" #" className="top" ><FaArrowUp className="followup" /></a>
    </>


  );
}
export default Contact;
