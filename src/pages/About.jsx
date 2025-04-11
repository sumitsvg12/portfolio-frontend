

import profileImage from "../images/ChatGPT_Image_Apr_1__2025__09_26_53_PM-removebg-preview.png"
function About() {
 
   
    return (
      <>
          <section className="about" id="about">
                <div className="about-container">
                    <div className="about-img">
                        <img src={profileImage} alt="myimg" className="profile-image" />
                    </div>
                    <div className="about-text">
                        <h2>About<span>Me</span></h2>
                        <h4>Mern stack Developer</h4>
                        <p>Hello! I'm Sumit Gupta, a passionate Frontend Developer, Backend Developer, and MERN Stack Developer. Currently, I am in BCA Semester 4 (External), continuously learning and improving my skills in full-stack web development.
                            I specialize in building dynamic, responsive, and user-friendly web applications using modern technologies like React.js, Node.js, Express.js, and MongoDB. My focus is on writing clean, efficient, and scalable code while ensuring the best user experience.
                            I love working on innovative projects, solving real-world problems, and keeping up with the latest trends in web development.
                            I am actively looking for opportunities to collaborate and grow in the tech industry. Feel free to connect with me!
                        </p>
                        <a href=" #" className="btn-box">More About Me</a>
                        <a href="/SUMIT GUPTA FULL STACK DEVELOPER.pdf" download className="btn-box">Download Resume</a>
                    </div>
                </div>

            </section>
 
      </>
    );
  }
  export default About;