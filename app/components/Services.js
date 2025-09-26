import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">Comprehensive energy solutions powered by technology and market expertise</p>
                </div>
                <div className="services-grid">
                    <div className="service-card glass-card" data-animation="slideUp">
                        <div className="service-icon">💼</div>
                        <h3>Energy & Commodity Trading</h3>
                        <p>Comprehensive trading strategies across multiple energy markets and commodities</p>
                        <div className="service-features">
                            <span className="feature">Multi-Market Trading</span>
                            <span className="feature">Strategy Development</span>
                            <span className="feature">Market Intelligence</span>
                        </div>
                    </div>
                    <div className="service-card glass-card" data-animation="slideUp">
                        <div className="service-icon">🌱</div>
                        <h3>Green Attributes Trading</h3>
                        <p>Trading in RECs and ESCerts to optimize green attributes and achieve sustainability goals</p>
                        <div className="service-features">
                            <span className="feature">REC Trading</span>
                            <span className="feature">ESG Compliance</span>
                            <span className="feature">Sustainability Metrics</span>
                        </div>
                    </div>
                    <div className="service-card glass-card" data-animation="slideUp">
                        <div className="service-icon">🛡️</div>
                        <h3>Optimization & Risk Management</h3>
                        <p>Strategic energy mix management with advanced risk assessment and mitigation strategies</p>
                        <div className="service-features">
                            <span className="feature">Risk Modeling</span>
                            <span className="feature">Portfolio Protection</span>
                            <span className="feature">Hedging Strategies</span>
                        </div>
                    </div>
                    <div className="service-card glass-card" data-animation="slideUp">
                        <div className="service-icon">📊</div>
                        <h3>Power Portfolio Management</h3>
                        <p>Expert portfolio management and monitoring to maximize value and minimize risks across energy assets</p>
                        <div className="service-features">
                            <span className="feature">Real-time Monitoring</span>
                            <span className="feature">Performance Analysis</span>
                            <span className="feature">Optimization</span>
                        </div>
                    </div>
                    <div className="service-card glass-card" data-animation="slideUp">
                        <div className="service-icon">📈</div>
                        <h3>Forecasting & Scheduling Services</h3>
                        <p>Advanced forecasting, policy analysis, and market trend evaluations for informed decisions</p>
                        <div className="service-features">
                            <span className="feature">Demand Forecasting</span>
                            <span className="feature">Market Analysis</span>
                            <span className="feature">Scheduling</span>
                        </div>
                    </div>
                    <div className="service-card glass-card" data-animation="slideUp">
                        <div className="service-icon">⚡</div>
                        <h3>Coal/Pellets Trading</h3>
                        <p>Comprehensive trading solutions for coal and pellets with market intelligence and strategic sourcing</p>
                        <div className="service-features">
                            <span className="feature">Market Analysis</span>
                            <span className="feature">Strategic Sourcing</span>
                            <span className="feature">Risk Assessment</span>
                        </div>
                    </div>
                    <div className="service-card glass-card" data-animation="slideUp">
                        <div className="service-icon">🖥️</div>
                        <h3>Dashboard Solutions</h3>
                        <p>Integrated dashboard solutions providing real-time insights and comprehensive market intelligence</p>
                        <div className="service-features">
                            <span className="feature">Custom Dashboards</span>
                            <span className="feature">Real-time Data</span>
                            <span className="feature">Analytics</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
