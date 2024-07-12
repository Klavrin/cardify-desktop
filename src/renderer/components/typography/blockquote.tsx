import React, { ReactNode } from 'react';

interface BlockquoteProps {
  children: ReactNode;
}

const Blockquote: React.FC<BlockquoteProps> = ({ children }) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
};

export default Blockquote;
