import React from 'react';
import bannerImg from "../../assets/bannerBook.png"

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-300 max-w-11/12 mx-auto my-20 p-20 rounded-2xl">
  <div className="hero-content flex-col  lg:flex-row-reverse gap-16">
    <img
      src= {bannerImg}
      className="w-64 sm:w-80 md:w-96 lg:max-w-sm"
    />
    <div className='space-y-8'>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Books to freshen up <br /> your bookshelf</h1>
    
      <button className="btn bg-[#23BE0A] text-white  px-6 sm:px-8 py-3 sm:py-7 text-sm sm:text-base">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;