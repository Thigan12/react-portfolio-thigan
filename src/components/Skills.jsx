import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: "bx bx-code",
            desc: "Expertise in core programming paradigms and high-level languages.",
            skills: [
                { name: "Java", cert: "#" },
                { name: "JavaScript", cert: "https://drive.google.com/file/d/1qUo2ErftoguJSdl_IBmqXV15wAzqLrl9/view?usp=sharing" },
                { name: "Python", cert: "https://drive.google.com/file/d/1mhG14Sttvk46i1jADgBC6XJSnJhlXwHZ/view?usp=sharing" },
                { name: "C / C++", cert: "#" }
            ]
        },
        {
            title: "Mobile Development",
            icon: "bx bxl-android",
            desc: "Active internship experience building cross-platform mobile solutions.",
            skills: [
                { name: "Android (Java/Kotlin)", cert: "#" },
                { name: "React Native", cert: "#" },
                { name: "Mobile UI/UX", cert: "#" },
                { name: "API Integration", cert: "#" }
            ]
        },
        {
            title: "Web Engineering",
            icon: "bx bx-laptop",
            desc: "Full-stack development specializing in modern React frameworks.",
            skills: [
                { name: "React.js", cert: "#" },
                { name: "Node.js / Express", cert: "#" },
                { name: "HTML5 / CSS3", cert: "#" },
                { name: "MySQL / MongoDB", cert: "#" }
            ]
        },
        {
            title: "Cyber Security",
            icon: "bx bx-shield-quarter",
            desc: "Advanced MSc training in securing infrastructures and applications.",
            skills: [
                { name: "Network Security", cert: "#" },
                { name: "Ethical Hacking", cert: "#" },
                { name: "Penetration Testing", cert: "#" },
                { name: "Digital Forensics", cert: "#" }
            ]
        }
    ];

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="skills" id="skills">
            <motion.h2
                className="heading1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                Skills <span>& Certifications</span>
            </motion.h2>

            <div className="skills-container">
                {skillCategories.map((category, index) => (
                    <motion.div
                        className="skills-box"
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={cardVariants}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                        <i className={category.icon}></i>
                        <h4>{category.title}</h4>
                        <p>{category.desc}</p>
                        <div className="skills-list">
                            {category.skills.map((skill, sIndex) => (
                                <div className="skill-item" key={sIndex}>
                                    <span>{skill.name}</span>
                                    {skill.cert !== "#" && (
                                        <a href={skill.cert} target="_blank" rel="noopener noreferrer" className="btn2">
                                            View Certificate
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
