import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'light' | 'dark' | 'primary';
}

const Section = ({
  children,
  className = '',
  id,
  bgColor = 'white',
}: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-dark text-white',
    primary: 'bg-primary/10',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClasses[bgColor]} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
