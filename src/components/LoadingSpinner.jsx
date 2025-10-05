import React from 'react';

// AI-optimized neural network loading animation
// Uses pure CSS keyframes for performance on budget devices
function LoadingSpinner() {
  return (
    <div className="loading-container" role="status" aria-label="Loading application">
      <div className="neural-network">
        {/* Neural nodes with pulsing animation */}
        <div className="node node-1"></div>
        <div className="node node-2"></div>
        <div className="node node-3"></div>
        <div className="node node-4"></div>
        <div className="node node-5"></div>
        
        {/* Connection lines between nodes */}
        <div className="connection connection-1"></div>
        <div className="connection connection-2"></div>
        <div className="connection connection-3"></div>
        <div className="connection connection-4"></div>
      </div>
      
      <p className="loading-text">
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
      </p>
      <p className="loading-subtitle">Initializing Himalaya Apex Academy</p>
    </div>
  );
}

export default LoadingSpinner;
