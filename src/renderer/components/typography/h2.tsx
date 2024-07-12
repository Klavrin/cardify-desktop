import { ReactNode } from 'react';

interface H2Props {
  children: ReactNode;
}

const H2: React.FC<H2Props> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export default H2;
