const Button = ({ className, onClick }) => {
  return (
    <div className="flex">
      <button className={`${className}`} onClick={onClick}>
        ... загружаем еще котиков ...
      </button>
    </div>
  );
};

export default Button;
