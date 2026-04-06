"use client";

import { useState } from 'react';

const Contact = () => {

    const [showMap, setShowMap] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
    });

    const [status, setStatus] = useState('idle');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                service: '',
                message: '',
            });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">

                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Ready to transform your energy trading with technology?
                    </p>
                </div>

                <div className="contact-grid">

                    {/* LEFT SIDE */}
                    <div className="contact-info">

                        <div className="contact-item glass-card">
                            <div className="contact-icon">📞</div>
                            <div className="contact-details">
                                <h4>Phone</h4>
                                <p>+91-9289079626</p>
                                <p>+91-9910499739</p>
                            </div>
                        </div>

                        <div
                            className="contact-item glass-card email-card"
                            onClick={() =>
                            (window.location.href =
                                "mailto:info@energyminds.in?subject=Business Inquiry&body=Hello Energyminds Team,")
                            }
                        >
                            <div className="contact-icon">✉️</div>

                            <div className="contact-details">
                                <h4>Email</h4>
                                <p className="email-text">info@energyminds.in</p>
                            </div>
                        </div>

                        <div className="contact-item glass-card">
                            <div className="contact-icon">🌐</div>
                            <div className="contact-details">
                                <h4>Website</h4>
                                <a href="https://www.energyminds.in" target="_blank" rel="noreferrer">
                                    www.energyminds.in
                                </a>
                            </div>
                        </div>

                        {/* ADDRESS WITH HOVER + CLICK */}

                        <div className={`address-wrapper ${showMap ? "active" : ""}`}>

                            <div
                                className="contact-item glass-card address-card"
                                onClick={() => setShowMap(prev => !prev)}
                            >
                                <div className="contact-icon">📍</div>
                                <div className="contact-details">
                                    <h4>Address</h4>
                                    <p>
                                        Tower –C, 506-507, Urbtech Trade Center,
                                        Sector -132, Noida (UP)
                                    </p>
                                </div>
                            </div>

                            {/* MAP - Only show when clicked */}
                            {showMap && (
                                <div className="hover-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8181991237175!2d77.37675999999999!3d28.515117000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7e46588a02d%3A0xc0237fd45b2ae00f!2sEnergyminds%20Power%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1774265888095!5m2!1sen!2sin"
                                        width="100%"
                                        height="220"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        title="Location Map"
                                    ></iframe>

                                    <a
                                        href="https://www.google.com/maps/place/Energyminds+Power+Solutions+Private+Limited/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="map-fullscreen-btn"
                                    >
                                        Open Full Map
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="contact-form-container">
                        <form className="contact-form glass-card" data-animation="slideUp" onSubmit={handleSubmit}>
                            <h3>Start Your Trading Journey</h3>
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control cyber-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control cyber-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    className="form-control cyber-input"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Service Interest</label>
                                <select
                                    className="form-control cyber-input"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
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
                                <textarea
                                    className="form-control cyber-input"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn--primary btn--full-width cyber-btn"
                                disabled={status === 'loading'}
                            >
                                <span className="btn-text">{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                                <div className="btn-glow"></div>
                            </button>
                            <div className="form-status" aria-live="polite">
                                {status === 'success' && (
                                    <p className="form-status__message form-status__message--success">
                                        Thank you for reaching out! We will get back to you shortly.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p className="form-status__message form-status__message--error">
                                        We&apos;re sorry, but something went wrong. Please try again later or contact us directly at
                                        <a href="mailto:marketing@energyminds.in"> marketing@energyminds.in</a>.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;