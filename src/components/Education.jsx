import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const cardVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="education" id="education">
            <motion.h2
                className="heading"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                My <span>Journey</span>
            </motion.h2>

            <div className="education-row">
                <div className="education-column">
                    <motion.h3
                        className="title"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        Education & Experience
                    </motion.h3>

                    <div className="education-box">
                        {[
                            {
                                year: '2025 - Present',
                                title: 'MSc Cyber Security - Coventry University (PSB Singapore)',
                                desc: 'Currently specializing in advanced cybersecurity strategies, threat intelligence, and digital forensics at Coventry University, PSB Academy Singapore.'
                            },
                            {
                                year: '2023 - 2024',
                                title: 'Software Engineering Intern (Mobile) - Nexgen Innovation',
                                desc: 'Working on mobile application development at Nexgen Innovation, Jaffna, focusing on building high-performance and user-friendly mobile solutions.'
                            },
                            {
                                year: '2020 - 2024',
                                title: 'BSc (Hons) Software Engineering - SLTC',
                                desc: 'Graduated from Sri Lanka Technological Campus, mastering core software principles, full-stack development, and system architecture.'
                            },
                            {
                                year: '2016 - 2019',
                                title: 'Kilinochchi Maha Vidyalayam',
                                desc: 'Completed G.C.E Advanced Level in Science stream, focusing on Physics, Chemistry, and Biology.'
                            },
                            {
                                year: '2009 - 2015',
                                title: 'VTTMV',
                                desc: 'Successfully completed G.C.E Ordinary Level (O/L) with a strong foundation in core academic subjects.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                className="education-content"
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                            >
                                <div className="content">
                                    <div className="year"><i className='bx bxs-calendar'></i> {item.year}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
