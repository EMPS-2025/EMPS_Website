import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization

const Journey = () => {
    return (
        <section id="journey" className="journey-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Journey</h2>
                    <p className="section-subtitle">Key milestones in our technology-enabled transformation</p>
                </div>
                <div className="journey-timeline">
                    <div className="timeline-line">
                        <div className="timeline-progress" id="timelineProgress"></div>
                    </div>

                    <div className="milestone" data-animation="timeline">
                        <div className="milestone-marker">
                            <div className="marker-glow"></div>
                        </div>
                        <div className="milestone-content glass-card">
                            <div className="milestone-date">March 2020</div>
                            <h4>Foundation</h4>
                            <p>Energy Minds started as LLP with a vision of technology in trading</p>
                            <div className="milestone-category high">Foundation</div>
                        </div>
                    </div>

                    <div className="milestone" data-animation="timeline">
                        <div className="milestone-marker">
                            <div className="marker-glow"></div>
                        </div>
                        <div className="milestone-content glass-card">
                            <div className="milestone-date">June 2021</div>
                            <h4>Product Development</h4>
                            <p>Power Portfolio Optimisation – Dashboard based solutions launched</p>
                            <div className="milestone-category high">Product Launch</div>
                        </div>
                    </div>

                    <div className="milestone" data-animation="timeline">
                        <div className="milestone-marker">
                            <div className="marker-glow"></div>
                        </div>
                        <div className="milestone-content glass-card">
                            <div className="milestone-date">September 2021</div>
                            <h4>Business Milestone</h4>
                            <p>170 MUs traded in first 3 months of operation</p>
                            <div className="milestone-category medium">Achievement</div>
                        </div>
                    </div>

                    <div className="milestone" data-animation="timeline">
                        <div className="milestone-marker">
                            <div className="marker-glow"></div>
                        </div>
                        <div className="milestone-content glass-card">
                            <div className="milestone-date">January 2022</div>
                            <h4>Major Contract</h4>
                            <p>First 5-year contract for complete management of Hydro Power Plant in HP</p>
                            <div className="milestone-category high">Major Contract</div>
                        </div>
                    </div>

                    <div className="milestone" data-animation="timeline">
                        <div className="milestone-marker">
                            <div className="marker-glow"></div>
                        </div>
                        <div className="milestone-content glass-card">
                            <div className="milestone-date">August 2022</div>
                            <h4>Geographic Expansion</h4>
                            <p>Footprints expanded across India</p>
                            <div className="milestone-category medium">Expansion</div>
                        </div>
                    </div>

                    <div className="milestone" data-animation="timeline">
                        <div className="milestone-marker">
                            <div className="marker-glow"></div>
                        </div>
                        <div className="milestone-content glass-card">
                            <div className="milestone-date">February 2023</div>
                            <h4>Market Access</h4>
                            <p>Became Facilitator Members – IEX, HPX, PXIL</p>
                            <div className="milestone-category high">Market Access</div>
                        </div>
                    </div>

                    <div className="milestone" data-animation="timeline">
                        <div className="milestone-marker">
                            <div className="marker-glow"></div>
                        </div>
                        <div className="milestone-content glass-card">
                            <div className="milestone-date">April 2024</div>
                            <h4>Volume Achievement</h4>
                            <p>950 MUs traded in FY 2024-25</p>
                            <div className="milestone-category high">Performance</div>
                        </div>
                    </div>

                    <div className="milestone" data-animation="timeline">
                        <div className="milestone-marker">
                            <div className="marker-glow"></div>
                        </div>
                        <div className="milestone-content glass-card">
                            <div className="milestone-date">October 2024</div>
                            <h4>Service Expansion</h4>
                            <p>Launched Advisory service for Derivatives</p>
                            <div className="milestone-category medium">Service Launch</div>
                        </div>
                    </div>

                    <div className="milestone" data-animation="timeline">
                        <div className="milestone-marker">
                            <div className="marker-glow"></div>
                        </div>
                        <div className="milestone-content glass-card">
                            <div className="milestone-date">August 2025</div>
                            <h4>Regulatory</h4>
                            <p>Petition filed with CERC for Trading Licensee</p>
                            <div className="milestone-category high">Regulatory</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
