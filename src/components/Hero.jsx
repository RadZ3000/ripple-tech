import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div
      className='bg-[url("https://i.ibb.co/XWwVxZk/pexels-semih-demirbas-16559199.jpg")] text-white relative overflow-hidden bg-cover bg-no-repeat p-12 text-center'
      id="Hero"
    >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#FF6363] font-bold p-2">
          Houston's #1 Medical Marketing Agency
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          GROW YOUR <span className="text-indigo-400">MEDICAL PRACTICE</span>{" "}
          with
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"></p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-red-400"
            strings={[
              "Web Design ^800",
              "Website Maintenance ^800",
              "SEO Optimization ^800",
              "HTML Email ^800",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </div>
        <p className="md:text-xl text-xl font-medium italic text-white-400 py-2">
          Equipping Medical Practices for Success
        </p>
        <a href="#Contact">
          <button className="bg-[#FF6363] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black buttonHover">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
