import React from 'react';
import assets from '../figmaAssets';
import FeatureCard from './FeatureCard' ;

const features = [
  {
    icon: assets.search,
    title: "Regulatory Clarity",
    description:
      "We Decode Complex Compliance Rules Into Simple, Actionable Steps",
  },
  {
    icon: assets.clarity,
    title: "Hassle-Free Filings Clarity",
    description:
      "From Registration To Ongoing Reporting—We Manage It End-To-End.",
  },
  {
    icon: assets.risk,
    title: "Risk Protection",
    description:
      "Stay Ahead Of Audits, Inspections, And Compliance Gaps With Proactive Support.",
  },
];
 
export const WhySection: React.FC = () => {
  return (
    <section className="why">
      <div className="why-inner">
        <div className="why-text">
          <h2>Why <span className="accent">Compliance Matters</span> for Research Analysts</h2>
          
          <p>In today's regulatory environment, even a small oversight can lead to penalties, reputational risks, and loss of client trust. We help Research Analysts and firms navigate complex compliance requirements so they can focus on delivering high-quality research without worry.</p>
        </div>
        <div className="why-visual">
          <div className="why-illustration">
            <img src={assets.path_vector} alt="" />
            <img src={assets.Group12} alt="illustration" />
            <img src={assets.arrows} alt="" />
          </div>

          <div className='feature-list'>
            {features.map((item) => (
              <FeatureCard 
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
                />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySection;
