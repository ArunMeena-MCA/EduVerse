import React from 'react';

function PrimaryButton({ children, onClick, className = '', ...props }) {
  return (
    <button
      className={`bg-rose-500 text-white rounded-md px-2 py-1 text-lg font-semibold hover:bg-rose-700 transition-all duration-200 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
