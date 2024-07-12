import { ReactNode } from 'react';

interface H4Props {
  children: ReactNode;
}

const H4: React.FC<H4Props> = ({ children }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};

export default H4;
