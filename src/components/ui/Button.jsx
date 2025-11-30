export const Button = ({ onClick, children, className = "", variant = 'primary', size ='lg' }) => {
  const handleClick = (e) => {
    onClick(e);
  };

  const colors = {
    primary: 'lemon-600',
    black: 'black',
    white: 'white',
    transparent: 'transparent',
  }

  const btnVariant = {
    primary:  `bg-${colors.primary} text-${colors.black} outline-${colors.primary}`, // Primary
    secondary:  `bg-${colors.black} text-${colors.white} outline-${colors.black}`, // Secondary
    outlined:  `bg-${colors.transparent} text-${colors.black} outline-${colors.black}`, // Outlined
  }

  const btnSize = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  }

  return (
    <button
      className={`w-full flex justify-center sm:justify-between items-center gap-2 px-6 py-4 cursor-pointer group outline-2  -outline-offset-2 ${className} ${btnVariant[variant]} ${btnSize[size]} `}
      onClick={handleClick}
    >
      <div className={`w-6 group-hover:w-0 h-[1.5px] bg-${variant === 'secondary' ? 'white' : 'black'} transition-all duration-300 ease-in-out`}/>
      <div
        id="btn-text"
        className="uppercase leading-loose tracking-wider text-sm"
      >
        {children}
      </div>
      <div className={`w-0 group-hover:w-6 h-[1.5px] bg-${variant === 'secondary' ? 'white' : 'black'} transition-all duration-300 ease-in-out`} />
    </button>
  );
};
