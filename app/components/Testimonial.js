import Link from 'next/link'; // Use Next.js Link for navigation 
import Image from 'next/image'; // Use Next.js Image for optimization

const Testimonial = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Client Success Stories</h2>
                    <p className="section-subtitle">Real results from our technology-enabled energy solutions</p>
                </div>

                <div className="testimonial-card glass-card">
                    <div className="testimonial-header">
                        <div className="rating">
                            <span>⭐⭐⭐⭐⭐</span>
                            <span className="rating-text">Excellent Results</span>
                        </div>
                    </div>

                    <div className="testimonial-quote">
                        <p>
                            &quot;EM was very helpful in resource optimization with multiple workplace innovations. 
                            These ideas helped in managing the power plant very effectively, ultimately increasing the revenue of the company. 
                            Their strategic power sales planning, outage management with ideas of exploring new market opportunities has gained us 
                            considerable leads in Power Market. We once again thank you team Energy Minds for the same. Good Luck and All the Best.&quot;
                        </p>
                    </div>

                    <div className="testimonial-results">
                        <div className="result-item">
                            <div className="result-icon">📈</div>
                            <span>Revenue Increase</span>
                        </div>
                        <div className="result-item">
                            <div className="result-icon">🏆</div>
                            <span>Market Leadership</span>
                        </div>
                        <div className="result-item">
                            <div className="result-icon">⚡</div>
                            <span>Operational Efficiency</span>
                        </div>
                    </div>

                    <div className="testimonial-services">
                        <h4>Services Provided:</h4>
                        <div className="services-list">
                            <span className="service-tag">Water Resource Optimization</span>
                            <span className="service-tag">Asset Optimisation and Risk Management</span>
                            <span className="service-tag">Tariff Optimization</span>
                        </div>
                    </div>

                    <div className="testimonial-client">
                        <strong>— Major Power Plant Client</strong>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
