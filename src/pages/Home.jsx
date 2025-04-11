import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import React, { useEffect, useRef} from "react";
import Typed from "typed.js";


function Home() {
    // Create a reference for the text element
   
    const typedElement = useRef(null);
    useEffect(() => {
        // Initialize Typed.js with the correct reference
        const typed = new Typed(typedElement.current, {
            strings: ['Frontend Developer', 'Backend Developer', 'Mern Stack Developer'], // Fixed "String" to "strings"
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy(); // Cleanup when component unmounts
        };
    }, []);

    return (
        <>
            <section className="home">
                <div className="home-content">
                    <h3>Hello, It's Me</h3>
                    <h1>Sumit Gupta</h1>
                    <h3>And I'm a <span ref={typedElement}></span></h3> 
                    <p>
                        I'm a web Designer with expertise in website design,
                        <br /> Front-end design, Back-end development
                    </p>

                    <div className="home-sci">
                        <a href=" https://www.facebook.com/people/Sumit-Gupta/pfbid04ey82hK8KFKfCMbnrs5MQspgLQQkG5se4mfpmRqsbg4B2Qm3CGzCP1UKXuJma9Xal/?mibextid=wwXIfr&rdid=OR5T6JciOK2xXsgk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CveBCEBXM%2F%3Fmibextid%3DwwXIfr" target="_blank" >
                            <FaFacebook />
                        </a>
                        <a href=" https://www.instagram.com/sumit_gupta_2524?igsh=MWM1MmVtc3d5MzUweQ%3D%3D&utm_source=qr " target="_blank" >
                            <FaInstagram />
                        </a>
                        <a href=" https://www.linkedin.com/in/sumit-gupta-81924525b" target="_blank" >
                            <FaLinkedin />
                        </a>
                        <a href=" https://github.com/sumitsvg12" target="_blank" >
                            <FaGithub />
                        </a>
                    </div>
                    <a href=" #" className="btn-box">More About Me</a>
                </div>

                <span className="home-imghover"></span>
            </section >   
          
           
         
        </>
    );
}

export default Home;
