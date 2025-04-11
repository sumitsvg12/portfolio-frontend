import {  FaLaptopCode, FaServer, FaDatabase,   } from "react-icons/fa";


function Services(){
  return(
    <>
      <section>
                <div className="services" id="services">
                    <div className="container">
                        <h2 className="sub-title">My <span>services</span></h2>
                        <div className="services-list">
                            <div>
                                <FaLaptopCode color="#00eeff" className="webdev" />
                                <h2>Frontend Development</h2>
                                <p>Building responsive and interactive user interfaces using React.js, HTML, CSS, and JavaScript.</p>
                                <a href=" #" className="read">lern more</a>
                            </div>
                            <div>
                                <FaServer color="#00eeff" className="webdev" />
                                <h2>Backend Development</h2>
                                <p>Creating robust and scalable backend solutions with Node.js, Express.js, and RESTful APIs.</p>
                                <a href=" #" className="read">lern more</a>
                            </div>
                            <div>
                                <FaDatabase color="#00eeff" className="webdev" />
                                <h2>Database Management</h2>
                                <p>Managing and optimizing databases using MongoDB, Mongoose, and cloud storage solutions.</p>
                                <a href=" #" className="read">lern more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Services;