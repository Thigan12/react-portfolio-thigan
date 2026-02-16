import React from 'react';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="heading1">Contact <span>Me</span></h2>

            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                </div>

                <div className="input-box">
                    <input type="number" className="no-arrows" placeholder="Contact No" required />
                    <input type="text" placeholder="Email Subject" required />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
    );
};

export default Contact;
