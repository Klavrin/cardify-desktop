import { ReactNode } from 'react';

interface SmallProps {
  children: ReactNode;
}

const Small: React.FC<SmallProps> = ({ children }) => {
  return <small className="text-sm font-medium leading-none">{children}</small>;
};

export default Small;
