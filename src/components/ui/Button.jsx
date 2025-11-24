

const Button = ({ onClick, children, className = "" }) => {
  return (
    <button
      className={`w-full flex justify-center sm:justify-between items-center gap-2 bg-lemon text-black px-6 py-4 cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <div className="w-6 group-hover:w-0 h-[1.5px] bg-black transition-all duration-300 ease-in-out" />
      <div
        id="btn-text"
        className="uppercase leading-loose tracking-wider text-sm"
      >
        {children}
      </div>
      <div className="w-0 group-hover:w-6 h-[1.5px] bg-black transition-all duration-300 ease-in-out" />
    </button>
  );
};
export default Button;
