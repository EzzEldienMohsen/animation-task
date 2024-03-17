import { NavBar, Title } from '../SubComponents';
import SecondaryCarousel from '../SubComponents/SecondaryCarousel';

const FirstSection = () => {
  return (
    <div className="relative w-full h-[120vh] md:h-[180vh] lg:h-[100vh] box-border">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source
            src="https://apolix.global/wp-content/uploads/2023/02/Apolix-background.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 px-5 w-full pt-4">
        {/* Content to be overlaid on the video */}
        <NavBar />
        <Title />
        <div className="flex mt-8  flex-col w-full justify-start items-start lg:flex-row-reverse lg:justify-between lg:items-start">
          <a href="#about">
            <button className="btn bg-[#0b2545] text-[#f1f6f9] pb-2 pt-1 h-[110%] text-2xl md:text-3xl lg:text-4xl font-bold">
              Get on board
            </button>
          </a>
          <div className="w-full ml-0 lg:ml-20 lg:w-3/5 flex flex-col mt-4 lg:mt-0 justify-start items-start">
            <p className="uppercase text-white text-xl ">
              THESE ORGANISATIONS WENT TO THE MOON WITH US
            </p>
            <SecondaryCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
