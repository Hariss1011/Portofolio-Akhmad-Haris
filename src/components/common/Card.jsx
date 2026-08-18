const Card = ({ children, className = "", hover = true, as: Tag = "div" }) => {
  return (
    <Tag
      className={`
        glass
        noise
        relative
        overflow-hidden

        rounded-3xl

        ${hover ? "glass-hover" : ""}

        ${className}
      `}
    >
      {children}
    </Tag>
  );
};

export default Card;
