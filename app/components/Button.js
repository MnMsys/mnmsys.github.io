import React from 'react';
import Link from 'next/link';

const Button = ({
  isGradient = true,
  hasHover = true,
  size = 'md',
  color = 'blue',
  isLink = false,
  href = '/',
  className,
  children,
  ...props
}) => {
  const validColors = ['blue', 'purple', 'green'];
  const selectedColor = validColors.includes(color) ? color : 'blue';

  const baseClasses = `group relative font-bold rounded-full shadow-lg 
    transition-all duration-200 inline-flex items-center justify-center
    text-xs sm:text-sm md:text-base lg:text-lg
    ${hasHover ? 'hover:shadow-xl transform hover:-translate-y-0.5' : ''}
    ${className || ''}`;

  const sizeClasses = {
    sm: 'px-3 py-1.5 sm:px-4 sm:py-2',
    md: 'px-4 py-2 sm:px-6 sm:py-3',
    lg: 'px-6 py-3 sm:px-8 sm:py-4'
  };

  const colorGradients = {
    blue: {
      gradient: 'from-blue-500 to-purple-500',
      solid: 'bg-blue-500'
    },
    purple: {
      gradient: 'from-purple-500 to-blue-500',
      solid: 'bg-purple-500'
    },
    green: {
      gradient: 'from-green-500 to-teal-500',
      solid: 'bg-green-500'
    }
  };

  const GradientOverlay = () => (
    <div
      className={`absolute inset-0 bg-gradient-to-r 
        ${colorGradients[selectedColor].gradient} rounded-full 
        opacity-0 ${hasHover ? 'group-hover:opacity-100' : ''}
        transition-opacity duration-200`}
    />
  );

  const backgroundClass = isGradient 
    ? `bg-gradient-to-r ${colorGradients[selectedColor].gradient}`
    : colorGradients[selectedColor].solid;

  const ButtonContent = () => (
    <>
      <span className="relative z-10 whitespace-nowrap">{children}</span>
      {isGradient && <GradientOverlay />}
    </>
  );

  const buttonStyles = `${baseClasses} ${sizeClasses[size]} ${backgroundClass}`;

  if (isLink) {
    return (
      <Link href={href} {...props} className={buttonStyles}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button {...props} className={buttonStyles}>
      <ButtonContent />
    </button>
  );
};

export default Button;
