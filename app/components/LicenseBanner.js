import React from 'react';


// We wrap the text in a container that will scroll
export default function LicenseBanner() {
  return (
    <div className="license-banner-container">
      <div className="license-banner-content">
        
        {/* First copy of the text */}
        <span>
          We are proud to announce we have received our CERC Trading License! &nbsp; | &nbsp; 
          EM-Spark is Live <a href="https://em-spark.energyminds.co.in/" className="banner-link" target="_blank" rel="noopener noreferrer">Now!!</a> &nbsp; &nbsp; &nbsp;
        </span>
        
        {/* Second copy for seamless loop */}
        <span>
          We are proud to announce we have received our CERC Trading License! &nbsp; | &nbsp; 
          EM-Spark is Live <a href="https://em-spark.energyminds.co.in/" className="banner-link" target="_blank" rel="noopener noreferrer">Now!!</a> &nbsp; &nbsp; &nbsp;
        </span>

      </div>
    </div>
  );
}
