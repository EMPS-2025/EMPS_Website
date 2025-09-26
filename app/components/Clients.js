import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization

const Clients = () => {
    return(
        <section id="clients" className="clients-section">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Our Clients</h2>
                <p className="section-subtitle">Trusted by leading organizations across industries</p>
            </div>
            <div className="clients-showcase">
                <div className="client-category">
                    <h3>🏛️ Government Sector</h3>
                    <div className="client-grid">
                        <div className="client-item glass-card">Government Distribution Utilities</div>
                        <div className="client-item glass-card">All Government Distribution Utilities</div>
                    </div>
                </div>
                <div className="client-category">
                    <h3>🏭 Industrial Groups</h3>
                    <div className="client-grid">
                        <div className="client-item glass-card">NSL Group</div>
                        <div className="client-item glass-card">Kundan Group</div>
                        <div className="client-item glass-card">ITC Group</div>
                        <div className="client-item glass-card">Dhruvdesh Metasteels</div>
                        <div className="client-item glass-card">BS Ispat</div>
                        <div className="client-item glass-card">Rimjhim Ispat</div>
                    </div>
                </div>
                <div className="client-category">
                    <h3>🌿 Renewable Players</h3>
                    <div className="client-grid">
                        <div className="client-item glass-card">O2 Power</div>
                        <div className="client-item glass-card">Renewable Energy Companies</div>
                    </div>
                </div>
                <div className="client-category">
                    <h3>🍯 Sugar Industry</h3>
                    <div className="client-grid">
                        <div className="client-item glass-card">Narmada Sugars</div>
                        <div className="client-item glass-card">Shri Durga Sugar</div>
                    </div>
                </div>
                <div className="client-category">
                    <h3>⚡ Thermal Generators</h3>
                    <div className="client-grid">
                        <div className="client-item glass-card">Thermal Power Plants</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Clients;