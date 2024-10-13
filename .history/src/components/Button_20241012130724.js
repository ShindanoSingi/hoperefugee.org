import React from 'react';

const Button = ({ href, icon, text, type = 'default' }) => {
  const buttonClasses = {
    default: 'bg-gray-200 text-black hover:bg-gray-300',
    primary: 'bg-primary text-my_white hover:bg-black',
    secondary: 'bg-gray-400 text-black hover:bg-gray-600',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
  };

  return (
    <a
      href={href}
      className={`${buttonClasses[type]} w-[20rem] text-xl font-bold border-black border-2 py-3 px-6 rounded-full flex items-center justify-center`}
      aria-disabled={type === 'disabled'}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </a>
  );
};

export default Button