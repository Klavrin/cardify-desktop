import { ReactNode } from 'react';

interface H3Props {
  children: ReactNode;
}

const H3: React.FC<H3Props> = ({ children }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export default H3;
