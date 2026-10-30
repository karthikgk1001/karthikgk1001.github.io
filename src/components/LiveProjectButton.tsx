import React from 'react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = "Live Project",
  href,
  onClick,
  className = ""
}) => {
  const baseClasses = `
    inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
    font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base
    transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-white hover:text-white cursor-pointer select-none ${className}
  `;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
};
