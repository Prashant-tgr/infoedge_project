import React from 'react';
import assets from '../figmaAssets';
import TrustedCard from './TrustedCard';


export const Hero: React.FC = () => {
  return (
    <section className="hero-figma">
      
      <div className="hero-left">
        <h1 className="hero-title">
          <span>Simplifying </span>
          <span className="accent">Compliance<img className='VectorBlue' src={assets.VectorBlue} alt="" /></span>
          <span> For Research Analysts</span>
        </h1>
        <p className="hero-sub">Stay focused on your insights—we’ll handle the compliance. Our expert solutions ensure your research practices meet every regulatory requirement with confidence and ease</p>
        <div className="hero-features">
          <div className="feature"><img src={assets.check} alt="check"/> End-to-end compliance support</div>
          <div className="feature"><img src={assets.check} alt="check"/> Regulatory filings made simple</div>
          <div className="feature"><img src={assets.check} alt="check"/> Tailored solutions for independent analysts & firms</div>
        </div>
        <div className="hero-actions">
          <button className="primary">Get Started</button>
          <button className="outline">Book a Consultation</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="illustration">
          <img src={assets.Banner_Image} alt="illustration" />
        
        
          
          <div className="rating-card">
            <div className="rating-number">4.8</div>
            <div className="rating-content">
              <div className="rating-stars">
                <img src={assets.star_vector} alt="stars" />
              </div>
              <div className="rating-label">Clients Rating</div>
            </div>
          </div>
          <div className="trusted-card-wrapper"><TrustedCard /></div>
        </div>
        </div>
      
    </section>
  );
};

export default Hero;
