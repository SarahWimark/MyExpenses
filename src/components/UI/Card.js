import "./Card.css";

export const Card = (props) => {
  const { children, className } = props;
  return <div className={`card ${className}`}>{children}</div>;
};
