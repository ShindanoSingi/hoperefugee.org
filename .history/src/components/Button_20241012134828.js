import React from 'react';

const Button = ({ href, icon, text, type = 'default', border = 'black' }) => {
    const buttonClasses = {
      default: 'bg-gray-200 text-black hover:bg-gray-300',
      primary: 'bg-primary text-my_white hover:bg-black',
      secondary: 'bg-gray-400 text-black hover:bg-gray-600',
      disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
    };

    const borderClasses = {
      white: 'border-white',
      black: 'border-black',
      noborder: 'border-none',
    };

    const hoverClasses = {
        default: 'hover:bg-gray-300',
        primary: 'hover:bg-blue-800',
        secondary: 'hover:bg-gray-600',
    }

    return (
      <a
        href={href}
        className={`${buttonClasses[type]} ${borderClasses[border]} w-[20rem] text-xl font-bold border-2 py-3 px-6 rounded-full flex items-center justify-center`}
        aria-disabled={type === 'disabled'}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </a>
    );
  };

export default Button