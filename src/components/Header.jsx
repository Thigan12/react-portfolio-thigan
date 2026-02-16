import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Sticky header
            setIsSticky(window.scrollY > 100);

            // Active section highlighting
            const sections = document.querySelectorAll('section');
            const scrollY = window.scrollY;

            sections.forEach(sec => {
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (scrollY >= offset && scrollY < offset + height) {
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isSticky ? 'sticky' : ''}`}>
            <a href="#" className="logo">THIGAN.</a>
            <i
                className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}
                id="menu-icon"
                onClick={toggleMenu}
            ></i>

            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Education</a>
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="#project" className={activeSection === 'project' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Project</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;
