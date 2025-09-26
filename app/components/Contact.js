import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Ready to transform your energy trading with technology?</p>
                </div>
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item glass-card" data-animation="slideUp">
                            <div className="contact-icon">📞</div>
                            <div className="contact-details">
                                <h4>Phone</h4>
                                <p>+91-9289079626</p>
                                <p>+91-9910499739</p>
                            </div>
                            <div className="contact-pulse"></div>
                        </div>
                        <div className="contact-item glass-card" data-animation="slideUp">
                            <div className="contact-icon">✉️</div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <p>info@energyminds.in</p>
                            </div>
                            <div className="contact-pulse"></div>
                        </div>
                        <div className="contact-item glass-card" data-animation="slideUp">
                            <div className="contact-icon">🌐</div>
                            <div className="contact-details">
                                <h4>Website</h4>
                                <a href="https://www.energyminds.in" target="_blank">www.energyminds.in</a>
                            </div>
                            <div className="contact-pulse"></div>
                        </div>
                        <div className="contact-item glass-card" data-animation="slideUp">
                            <div className="contact-icon">📍</div>
                            <div className="contact-details">
                                <h4>Address</h4>
                                <p>Tower –C, 503, Urbtech Trade Center, Sector -132, Noida (UP)</p>
                            </div>
                            <div className="contact-pulse"></div>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <form className="contact-form glass-card" data-animation="slideUp">
                            <h3>Start Your Trading Journey</h3>
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control cyber-input" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control cyber-input" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Company</label>
                                <input type="text" className="form-control cyber-input" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Service Interest</label>
                                <select className="form-control cyber-input" required>
                                    <option value="">Select a service</option>
                                    <option value="coal-trading">Coal/Pellets Trading</option>
                                    <option value="risk-management">Optimization & Risk Management</option>
                                    <option value="portfolio-management">Power Portfolio Management</option>
                                    <option value="green-trading">Green Attributes Trading</option>
                                    <option value="forecasting">Forecasting & Scheduling</option>
                                    <option value="energy-trading">Energy & Commodity Trading</option>
                                    <option value="dashboards">Dashboard Solutions</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-control cyber-input" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn--primary btn--full-width cyber-btn">
                                <span className="btn-text">Send Message</span>
                                <div className="btn-glow"></div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
