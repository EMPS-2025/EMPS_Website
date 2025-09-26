import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization

const Markets = () => {
    return(
        <section id="markets" className="markets-section">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Trading Markets</h2>
                <p className="section-subtitle">Technology-enabled operations across diverse energy trading markets</p>
            </div>
            <div className="markets-grid">
                <div className="market-card glass-card" data-animation="slideUp">
                    <div className="market-icon">🌅</div>
                    <h3>Day Ahead Market (DAM)</h3>
                    <p>Next-day delivery with optimized bidding strategies and advanced price discovery mechanisms</p>
                    <div className="market-features">
                        <span className="feature">Price Analysis</span>
                        <span className="feature">Bid Optimization</span>
                    </div>
                    <div className="market-volume">High Volume</div>
                </div>
                <div className="market-card glass-card" data-animation="slideUp">
                    <div className="market-icon">⚡</div>
                    <h3>Real Time Market (RTM)</h3>
                    <p>Hour-ahead delivery with real-time market analytics and instant decision making capabilities</p>
                    <div className="market-features">
                        <span className="feature">Real-time Analytics</span>
                        <span className="feature">Instant Execution</span>
                    </div>
                    <div className="market-volume">Medium Volume</div>
                </div>
                <div className="market-card glass-card" data-animation="slideUp">
                    <div className="market-icon">📅</div>
                    <h3>Term Ahead Market (TAM)</h3>
                    <p>Customizable delivery periods up to 90 days with comprehensive forward curve analysis</p>
                    <div className="market-features">
                        <span className="feature">Forward Analysis</span>
                        <span className="feature">Risk Planning</span>
                    </div>
                    <div className="market-volume">Variable Volume</div>
                </div>
                <div className="market-card glass-card" data-animation="slideUp">
                    <div className="market-icon">🌱</div>
                    <h3>Green Day Ahead Market (GDAM)</h3>
                    <p>Green energy trading with sustainability focus and comprehensive environmental tracking</p>
                    <div className="market-features">
                        <span className="feature">Green Optimization</span>
                        <span className="feature">ESG Tracking</span>
                    </div>
                    <div className="market-volume">Growing Volume</div>
                </div>
                <div className="market-card glass-card" data-animation="slideUp">
                    <div className="market-icon">♻️</div>
                    <h3>Renewable Energy Certificates (REC)</h3>
                    <p>Green attributes trading (1MWh = 1 REC) with advanced verification and compliance systems</p>
                    <div className="market-features">
                        <span className="feature">Certificate Management</span>
                        <span className="feature">Compliance Tracking</span>
                    </div>
                    <div className="market-volume">High Volume</div>
                </div>
                <div className="market-card glass-card" data-animation="slideUp">
                    <div className="market-icon">💡</div>
                    <h3>Energy Savings Certificates (ESCerts)</h3>
                    <p>PAT scheme certificates (1 ESCert = 1 MTOE) with efficiency analysis and compliance management</p>
                    <div className="market-features">
                        <span className="feature">Efficiency Analysis</span>
                        <span className="feature">PAT Compliance</span>
                    </div>
                    <div className="market-volume">Steady Volume</div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Markets;