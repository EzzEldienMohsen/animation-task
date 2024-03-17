import { HiBars2 } from 'react-icons/hi2';
import { navLinks } from '../assets';
const NavBar = () => {
  return (
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
      <div className="hidden lg:flex w-full justify-between items-center">
        <h1 className="font-sans tracking-widest leading-relaxed shadow-md text-white text-5xl">
          aploix
        </h1>
        <ul className="flex justify-between gap-10 list-none items-center text-white text-2xl">
          {navLinks.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul>
        <button className="btn w-1/5 mr-3 bg-[rgba(199,219,230,.062745098)] backdrop-blur-[15px] backdrop-brightness-[105%] text-[#f1f6f9] text-2xl hover:bg-[#f1f6f9] hover:text-[#333]">
          Schedule a demo
        </button>
      </div>
    </div>
  );
};

export default NavBar;
