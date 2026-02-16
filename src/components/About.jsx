import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const fadeInRotate = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const skillItemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, ease: "backOut" }
        }
    };

    return (
        <section className="about" id="about">
            <motion.h2
                className="heading"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                About <span>Me</span>
            </motion.h2>

            <div className="about-content-v2">
                <motion.div
                    className="about-text"
                    variants={fadeInRotate}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3>Software Engineer & Cyber Security Specialist</h3>
                    <p>
                        I have completed my Software Engineering degree at Sri Lanka Technological Campus and am currently
                        pursuing my <span>MSc in Cyber Security</span> at <span>Coventry University (PSB Singapore)</span>.
                        I am also gaining industry experience as a <span>Software Engineering Intern</span> in Mobile App Development
                        at <span>Nexgen Innovation</span>, Jaffna.
                    </p>
                    <p>
                        With a deep passion for <span>Software Engineering</span> and <span>Ethical Hacking</span>,
                        I bridge the gap between aesthetics and security. I am dedicated to finding innovative
                        solutions that protect users while delivering exceptional experiences.
                    </p>

                    <motion.div
                        className="about-skills-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="about-skill-item" variants={skillItemVariants}>
                            <i className='bx bx-check-shield'></i>
                            <span>Threat Analysis</span>
                        </motion.div>
                        <motion.div className="about-skill-item" variants={skillItemVariants}>
                            <i className='bx bx-code-alt'></i>
                            <span>Secure Coding</span>
                        </motion.div>
                        <motion.div className="about-skill-item" variants={skillItemVariants}>
                            <i className='bx bx-network-chart'></i>
                            <span>Network Defense</span>
                        </motion.div>
                        <motion.div className="about-skill-item" variants={skillItemVariants}>
                            <i className='bx bx-terminal'></i>
                            <span>Pentesting</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
