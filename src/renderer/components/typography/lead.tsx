import { ReactNode } from 'react';

interface LeadProps {
  children: ReactNode;
}

const Lead: React.FC<LeadProps> = ({ children }) => {
  return <p className="text-xl text-muted-foreground">{children}</p>;
};

export default Lead;
