import { FaArrowDownLong } from 'react-icons/fa6';

const Title = () => {
  return (
    <>
      {' '}
      <h1 className="mt-16 md:mt-8 lg:mt-10  font-bold lg:w-4/5 text-[#f1f6f9] text-3xl md:text-7xl lg:text-7xl">
        Take your processes to the next dimension
      </h1>
      <div className="flex justify-center items-start md:justify-between mt-8 w-11/12 md:w-11/12 lg:w-3/5">
        <button className="btn mt-3 btn-square w-[2em] h-[2em] lg:w-[3em] lg:h-[3em] bg-transparent border-2 border-white  justify-center items-center hidden md:flex lg:flex  text-[#f1f6f9] text-2xl md:text-3xl lg:text-2xl">
          <FaArrowDownLong className="text-2xl md:text-3xl lg:text-2xl " />
        </button>
        <p className="text-white text-xl md:text-3xl lg:text-4xl ml-4 font-semibold">
          Apolix optimises your processes through data, focusing on simplicity
          and value creation.
        </p>
      </div>
    </>
  );
};

export default Title;
