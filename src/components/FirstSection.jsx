import { NavBar } from '../SubComponents';

const FirstSection = () => {
  return (
    <div className="relative w-full box-border">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source
            src="https://apolix.global/wp-content/uploads/2023/02/Apolix-background.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 px-5">
        {/* Content to be overlaid on the video */}
        <NavBar />
      </div>
    </div>
  );
};

export default FirstSection;
