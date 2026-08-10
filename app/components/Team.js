import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization

const Team = () => {
    return (
        <section id="team" className="team-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Leadership Team</h2>
                    <p className="section-subtitle">
                        Expert leaders driving innovation in energy trading and market operations
                    </p>
                </div>

                <div className="team-grid">
                    <div className="team-card glass-card" data-animation="slideUp">
                        <div className="team-avatar">💼</div>
                        <h3>Anmol Sirohi</h3>
                        <p className="team-role">Power Trading & Market Operations</p>
                        <p className="team-background">
                            Founder – ENERCHAIN and Co-founder & Director: EnergyMinds
                        </p>
                        <p className="team-education">MBA (Power) - NPTI</p>
                        <div className="expertise-tags">
                            <span className="tag">Trading</span>
                            <span className="tag">Strategy</span>
                        </div>
                    </div>

                    <div className="team-card glass-card" data-animation="slideUp">
                        <div className="team-avatar">🧑‍💻</div>
                        <h3>Samyak Singh</h3>
                        <p className="team-role">Technology Integration & Systems</p>
                        <p className="team-background">MS(IT) – Worcester, USA</p>
                        <p className="team-education">
                            Ex-Cyber Defense & Intelligence Centre - USA
                        </p>
                        <div className="expertise-tags">
                            <span className="tag">Technology</span>
                            <span className="tag">Systems</span>
                        </div>
                    </div>

                    <div className="team-card glass-card" data-animation="slideUp">
                        <div className="team-avatar">⚛︎</div>
                        <h3>Atul Shrivastav</h3>
                        <p className="team-role">Marketing</p>
                        <p className="team-background">12 years of extensive experience in the Indian power sector.</p>
                        <div className="expertise-tags">
                            <span className="tag">Power Regulatory</span>
                            <span className="tag">Open Access</span>
                            <span className="tag">C&amp;I Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
