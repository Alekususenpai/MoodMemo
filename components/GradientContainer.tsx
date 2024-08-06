import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full h-full m-10 mt-20 rounded-[70px] bg-gradient-to-r from-purple-200/75 via-white/50 to-moonRaker p-4">
      <div className="bg-linkWater h-screen flex items-center justify-center rounded-[60px]">
        {children}
      </div>
    </div>
  );
};

export default Container;
