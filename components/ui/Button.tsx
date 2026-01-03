import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white neon-glow',
    secondary: 'bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-400 hover:to-cyan-600 text-white neon-glow-cyan',
    outline: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
