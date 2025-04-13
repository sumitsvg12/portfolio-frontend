import { FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";


function Skills(){
    return(
        <>
         <h2 className="sub-title">My <span>Skills</span></h2>
         <section className="technical">
                <div className="container1 " id="skill">
                    <h2 className="heading1">Technical Skills</h2>
                    <div className="Technical-bars">
                        <div className="bar"><FaHtml5 color="orange" />
                            <div className="info">
                                <span>HTML</span>
                            </div>
                            <div className="progress-line html">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><FaCss3Alt color="blue" />
                            <div className="info">
                                <span>CSS</span>
                            </div>
                            <div className="progress-line css">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"> <FaJs color="yellow" />
                            <div className="info">
                                <span>Javascript</span>
                            </div>
                            <div className="progress-line Javascript">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><FaReact color="cyan" />
                            <div className="info">
                                <span>React</span>
                            </div>
                            <div className="progress-line react">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><FaBootstrap color="green" />
                            <div className="info">
                                <span>Bootstrap</span>
                            </div>
                            <div className="progress-line bootstrap">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><FaNodeJs color="#b0bcle" />
                            <div className="info">
                                <span>Node</span>
                            </div>
                            <div className="progress-line node">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar"><FaDatabase color="red" />
                            <div className="info">
                                <span>MongoDB</span>
                            </div>
                            <div className="progress-line mongodb">
                                <span></span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container1 ">
                    <h2 className="heading1">Professional Skills</h2>
                    <div className="radial-bars">
                        <div className="radial-bar">
                            <svg x="0px" y='0px' viewBox="0 0 200 200">
                                <circle className="progress-bar" cx='100' cy='100' r='80' ></circle>
                                <circle className="path path-1" cx='100' cy='100' r='80' ></circle>
                            </svg>
                            <div className="percentage">90%</div>
                            <div className="text">Creativity</div>
                        </div>
                        <div className="radial-bar">
                            <svg x="0px" y='0px' viewBox="0 0 200 200">
                                <circle className="progress-bar" cx='100' cy='100' r='80' ></circle>
                                <circle className="path path-2" cx='100' cy='100' r='80' ></circle>
                            </svg>
                            <div className="percentage">65%</div>
                            <div className="text">Communication</div>
                        </div>
                        <div className="radial-bar">
                            <svg x="0px" y='0px' viewBox="0 0 200 200">
                                <circle className="progress-bar" cx='100' cy='100' r='80' ></circle>
                                <circle className="path path-3" cx='100' cy='100' r='80' ></circle>
                            </svg>
                            <div className="percentage">60%</div>
                            <div className="text">Problem Solving</div>
                        </div>
                        <div className="radial-bar">
                            <svg x="0px" y='0px' viewBox="0 0 200 200">
                                <circle className="progress-bar" cx='100' cy='100' r='80' ></circle>
                                <circle className="path path-4" cx='100' cy='100' r='80' ></circle>
                            </svg>
                            <div className="percentage">85%</div>
                            <div className="text">TeamWork</div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Skills;