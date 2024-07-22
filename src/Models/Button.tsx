import React from 'react';

// Define the props interface for the Button component
interface ButtonProps {
  label: string; // Text label for the button
  className: string; // Additional class name for the button
}

// Define the Button functional component
const Button: React.FC<ButtonProps> = ({ label, className }) => {
  return (
    // Render a button element with dynamic classes and label
    <button className={`button__btn ${className}`}>{label}</button>
  );
}

export default Button; // Export the Button component
