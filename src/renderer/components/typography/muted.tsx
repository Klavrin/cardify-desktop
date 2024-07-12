import { ReactNode } from 'react';

interface MutedProps {
  children: ReactNode;
}

const Muted: React.FC<MutedProps> = ({ children }) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};

export default Muted;
