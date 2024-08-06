import GradientBackground from '../components/GradientBackground';
import GradientContainer from '../components/GradientContainer';

const HomePage = () => {
  return (
    <GradientBackground>
      <GradientContainer>
        <h1 className="text-2xl font-bold text-gray-800">HOME</h1>
        <p className=" text-gray-600">
         Get started
        </p>
      </GradientContainer>
    </GradientBackground>
  );
};

export default HomePage;