import "./Button.scss";

const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
