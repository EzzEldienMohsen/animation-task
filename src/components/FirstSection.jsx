import { HiBars2 } from 'react-icons/hi2';

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
      <div className="relative z-10">
        {/* Content to be overlaid on the video */}
        <div className="w-full h-inherit">
          {/* MOBILE NAV BAR */}
          <div className="w-full flex justify-between items-center lg:hidden">
            <h1 className="font-sans tracking-widest leading-relaxed shadow-md text-white text-3xl">
              aploix
            </h1>
            <div className="dropdown dropdown-end fixed top-2 right-2">
              <div
                tabIndex={0}
                role="button"
                className="btn m-0 bg-[#0b2545] rounded-badge text-white"
              >
                <HiBars2 />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          {/* LAP NAV BAR */}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
