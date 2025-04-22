import React from 'react';

interface ApiMethodCardProps {
  title: string;
  description: string;
  onClick: () => void;
  disabled?: boolean;
}

const ApiMethodCard: React.FC<ApiMethodCardProps> = ({ 
  title, 
  description, 
  onClick, 
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-left bg-white p-4 rounded-lg shadow-sm border border-gray-200 
        hover:shadow-md hover:border-green-300 transition-all duration-200 
        ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <h3 className="text-lg font-medium text-green-600 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  );
};

export default ApiMethodCard;