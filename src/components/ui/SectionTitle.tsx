interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionTitleProps) => {
  const alignment = centered ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
      <div className={`h-1 w-20 bg-primary mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
