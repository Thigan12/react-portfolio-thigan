import React from 'react';
import { motion } from 'framer-motion';
import homeImg from '../assets/images/home.png';

const Home = () => {
    return (
        <section className="home" id="home">
            <motion.div
                className="home-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h3>Hello<span>!!!</span>, It's Me</h3>
                <h1>R.THIGAMPARAN</h1>
                <h3><span>MSc Cyber Security Student</span> & <span>Software Engineer</span></h3>

                <p>
                    Passionate <span>Software Engineering Intern</span> at Nexgen Innovation and current
                    <span> MSc Cyber Security</span> student at Coventry University (PSB Singapore).
                    I specialize in building secure, high-performance digital solutions across mobile and web platforms.
                </p>

                <div className="social-media">
                    <a href="#" style={{ "--i": 7 }}><i className='bx bxl-facebook'></i></a>
                    <a href="https://instagram.com/ravi_thigan?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
                    <a href="https://www.linkedin.com/in/r-thigamparan-03a83923a/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/Thigan12" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                </div>

                <a
                    href="https://drive.google.com/file/d/1VDumeO24jvm_Kt3UlkcyzCxZMbAXxpq3/view?usp=sharing"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download CV
                </a>
            </motion.div>

            <motion.div
                className="home-img"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <img src={homeImg} alt="Home" />
            </motion.div>
        </section>
    );
};

export default Home;
