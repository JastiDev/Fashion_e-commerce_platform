/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-offwhitel">
      <div className="container mx-auto flex flex-col md:flex-row items-center h-full px-4 md:px-8">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-20 order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
            Browse through our diverse range of meticulously crafted garments,
            designed ot bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-[200px] rounded-full font-medium px-6 py-3 text-black border-black border-4 bg-transparent hover:bg-black hover:text-white mt-4 md:mt-0 ">
            Shop Now
          </button>
          <div className="flex flex-col mb-8 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <div className="text-center">
              <span className="text-2xl md:text-4xl font-bold">200+</span>
              <p className="text-sm">International Brands</p>
            </div>
            <span className="hidden sm:block w-px h-8 bg-gray-300 mx-2"></span>
            <div className="text-center">
              <span className="text-2xl md:text-4xl font-bold">2,000+</span>
              <p className="text-sm">High-Quality Products</p>
            </div>
            <span className="hidden sm:block w-px h-8 bg-gray-300 mx-2"></span>
            <div className="text-center">
              <span className="text-2xl md:text-4xl font-bold">30,000+</span>
              <p className="text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0 relative oreder-1 md:order-2">
          <Image
            src={"/heroimage.svg"}
            alt="hero Image"
            width={600}
            height={400}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
      {/*Band*/}
      <div className="bg-black w-full py-4 flex justify-between items-center px-6 md:px-16">
        {[
          "/versace.svg",
          "/zara.svg",
          "/gucci.svg",
          "/prada.svg",
          "/Group.svg",
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Brand Logo ${index + 1}"
            className="w-20 sm:w-24 md:w-28 object-contain h-12 md:h-16"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
