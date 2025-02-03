import React from "react";

export default function InteriorSection() {
  return (
    <div className="bg-[#E5E5E5] min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 md:p-10 mx-auto xl:container">
      {/* Left Section (Images) */}
      <div className="relative flex flex-col space-y-6 w-full lg:w-1/2">
        {/* Main Large Image */}
        <div className="relative">
          <div className="absolute w-[80%] md:w-[300px] h-[200px] inset-0 rounded-2xl bg-gray-400 shadow-lg -translate-x-4 md:-translate-x-6 -translate-y-4 md:-translate-y-6 opacity-50"></div>
          <div className="absolute w-[90%] md:w-[550px] inset-0 bg-gray-400 rounded-2xl shadow-lg translate-x-1 translate-y-4 opacity-50"></div>
          <img
            src="src/assets/Rectangle 19.png"
            alt="Luxury Interior"
            className="w-full md:w-[500px] h-[300px] relative rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Floating Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="p-4 md:p-6 rounded-2xl w-full md:w-[300px]">
            <h3 className="text-xl md:text-2xl font-semibold">Leather Luxury Lounge</h3>
            <p className="text-gray-600 mt-3 text-sm md:text-base">
              Experience luxury and comfort with our Leather Lounge Collection. Impeccably
              crafted sofas that bring timeless elegance to your living space.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative md:top-[-50px] md:left-[100px]">
            <div className="absolute inset-0 bg-gray-400 rounded-2xl shadow-lg translate-x-2 md:translate-x-4 translate-y-2 md:translate-y-4 opacity-50"></div>
            <img
              src="src/assets/Rectangle 20.png"
              alt="Luxury Interior"
              className="relative rounded-2xl shadow-lg w-full md:w-[500px] h-[200px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Section (Text & Button) */}
      <div className="flex flex-col space-y-6 items-start w-full lg:w-1/2 mt-6 lg:mt-0 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold">Inspire your interiors</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Elevate your living spaces with our curated furniture. Timeless designs, superior
          craftsmanship, and ultimate comfort await.
        </p>
        <button className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-gray-800">
          Go Shopping
        </button>
        <div className="relative w-full md:left-[200px]">
          <div className="absolute w-[80%] md:w-[300px] h-[200px] inset-0 rounded-2xl bg-gray-400 shadow-lg -translate-x-4 md:-translate-x-6 -translate-y-4 md:-translate-y-6 opacity-50"></div>
          <img
            src="src/assets/Rectangle 24.png"
            alt="Small Interior 2"
            className="relative rounded-2xl shadow-lg w-full md:w-[300px] h-[200px] top-[-50px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}