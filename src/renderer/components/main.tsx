import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="w-screen h-screen bg-background text-foreground">
      {children}
    </main>
  );
};

export default Main;
