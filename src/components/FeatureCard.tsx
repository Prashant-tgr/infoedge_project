interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <img src={icon} alt={title} />
      </div>

      <div className="feature-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;