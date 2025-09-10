import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card = ({ children, className = '', hoverable = false }: CardProps) => {
  const hoverClasses = hoverable
    ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg'
    : '';

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
