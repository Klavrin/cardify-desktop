import { ReactNode } from 'react';

interface LargeProps {
  children: ReactNode;
}

const Large: React.FC<LargeProps> = ({ children }) => {
  return <div className="text-lg font-semibold">{children}</div>;
};

export default Large;
