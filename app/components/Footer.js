import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Energy Minds Power Solutions</h3>
                        <p>THINK.ACT.SAVE - Empowering Trade Through Technology</p>
                        <div className="footer-tagline">Technology-Integrated Energy Trading Platform</div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#services">Trading Solutions</a></li>
                                <li><a href="#services">Risk Management</a></li>
                                <li><a href="#markets">Trading Markets</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#team">Leadership</a></li>
                                <li><a href="#journey">Our Journey</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#clients">Clients</a></li>
                                <li><a href="#testimonials">Success Stories</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; 2025 Energy Minds Power Solutions Private Limited. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
