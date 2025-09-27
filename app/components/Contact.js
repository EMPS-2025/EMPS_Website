"use client";

import { useState } from 'react';

const Contact = () => {
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

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', company: '', service: '', message: '' });
        } catch (error) {
            console.error('Contact form submission error:', error);
            setStatus('error');
        }
    };

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
