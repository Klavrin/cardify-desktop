import { ReactNode } from 'react';

interface H1Props {
  children: ReactNode;
}

const H1: React.FC<H1Props> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

export default H1;
