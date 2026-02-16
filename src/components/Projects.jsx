import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import p1 from '../assets/images/portfolio1.jpg';
import p2 from '../assets/images/portfolio2.jpg';
import p3 from '../assets/images/portfolio3.jpg';
import p4 from '../assets/images/portfolio4.jpg';
import p5 from '../assets/images/portfolio5.jpg';
import p6 from '../assets/images/portfolio6.jpg';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectList = [
        {
            img: p1,
            title: 'PubgPro',
            desc: 'Next-Gen Emulator & System Performance Booster for gaming PCs.',
            tech: ['C++', 'Python', 'WinAPI', 'System Optimization'],
            github: 'https://github.com/Thigan12/PubgPro'
        },
        {
            img: p2,
            title: 'Invoice Sender',
            desc: 'PySide6 desktop app for automated invoice generation and WhatsApp distribution.',
            tech: ['Python', 'PySide6', 'SQLite', 'WhatsApp API'],
            github: 'https://github.com/Thigan12/Invoice-sender-'
        },
        {
            img: p3,
            title: '3D Portfolio',
            desc: 'Immersive 3D animated portfolio built with React and Three.js.',
            tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
            github: 'https://github.com/Thigan12/3D-portfolio'
        },
        {
            img: p4,
            title: 'Library Management System',
            desc: 'Complete system for managing books, students, and library staff.',
            tech: ['Java', 'MySQL', 'JDBC', 'Desktop GUI'],
            github: 'https://github.com/Thigan12/Librarymanagentsystem'
        },
        {
            img: p5,
            title: 'Blood Bank System',
            desc: 'System to simplify blood donation and storage management processes.',
            tech: ['PHP', 'MySQL', 'Web Security', 'Database Design'],
            github: 'https://github.com/Thigan12/blood-bank-management-system'
        },
        {
            img: p6,
            title: 'Maid Connect Pro',
            desc: 'A comprehensive platform connecting professional domestic services with clients seamlessly.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            github: 'https://github.com/Thigan12/maidconnect_pro'
        },
    ];

    const openDetails = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="project" id="project">
            <motion.h2
                className="heading1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                My <span>Projects</span>
            </motion.h2>

            <div className="project-container">
                {projectList.map((project, index) => (
                    <motion.div
                        className="project-box"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src={project.img} alt={project.title} />
                        <div className="project-layer">
                            <h4>{project.title}</h4>
                            <p>{project.desc.substring(0, 80)}...</p>
                            <div className="link-container">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <i className='bx bxl-github'></i>
                                </a>
                                <button className="info-btn" onClick={() => openDetails(project)}>
                                    <i className='bx bx-info-circle'></i>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={closeModal}>&times;</button>
                            <img src={selectedProject.img} alt={selectedProject.title} className="modal-img" />
                            <div className="modal-body">
                                <h3>{selectedProject.title}</h3>
                                <p className="modal-desc">{selectedProject.desc}</p>
                                <div className="modal-tech">
                                    <strong>Technical Stack:</strong>
                                    <div className="tech-tags">
                                        {selectedProject.tech.map((tag, i) => (
                                            <span key={i} className="tech-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="modal-links">
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn">
                                        <i className='bx bxl-github'></i> View Repository
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
