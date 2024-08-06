import { ReactNode } from 'react';

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  return (
    <div className="bg-linkWater h-full w-full flex items-center justify-center">

      {children}
    </div>
  );
};

export default GradientBackground;
