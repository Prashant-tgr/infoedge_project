import React from 'react';
import assets from '../figmaAssets';

export const TrustedCard: React.FC = () => {
  return (
    <div className="trusted-card">
      <div className="thumb" style={{backgroundImage:`url(${assets.briefcase})`}} />
      <div className="trusted-body">
        <div className="trusted-top">Trusted by</div>
        <div className="trusted-count">250+</div>
        <div className="trusted-label">Professionals</div>
      </div>
    </div>
  );
};

export default TrustedCard;
