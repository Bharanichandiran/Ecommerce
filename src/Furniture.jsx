import React from 'react';

const Furniture = () => {
  return (
    <div className="bg-[#DAD9D7] p-8 flex justify-center items-center max-h-5xl mx-auto xl:container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Coastal Lounge Seating */}
        <div className="bg-[#DAD9D7] p-4 rounded-2xl text-center">
          <img
            src="src/assets/Rectangle 21.png"
            alt="Coastal Lounge Seating"
            className="w-full h-auto rounded-xl mb-4"
          />
          <h2 className="text-xl font-bold">Coastal Lounge Seating</h2>
          <p className="text-gray-600 mt-2">
            Create a coastal vibe at home with comfy lounge seating that effortlessly blends comfort and seaside elegance.
          </p>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
            View collection
          </button>
        </div>

        {/* Classic Comfort Sofas */}
        <div className="bg-[#DAD9D7] p-6 rounded-2xl text-center md:col-span-1 flex flex-col justify-center">
          <img
            src="src/assets/Rectangle 23.png"
            alt="Classic Comfort Sofas"
            className="w-full h-auto rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold">Classic Comfort Sofas</h2>
          <p className="text-gray-600 mt-2">
            Experience relaxation and style with our Classic Comfort Sofas. Meticulously crafted for enduring elegance, these sofas elevate your living space.
          </p>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
            View collection
          </button>
        </div>

        {/* Plush Paradise Chairs */}
        <div className="bg-[#DAD9D7] p-4 rounded-2xl text-center">
          <img
            src="src/assets/Rectangle 22.png"
            alt="Plush Paradise Chairs"
            className="w-full h-auto rounded-xl mb-4"
          />
          <h2 className="text-xl font-bold">Plush Paradise Chairs</h2>
        <h2 className="text-xl font-bold">Plush Paradise Chairs</h2>
        <p className="text-gray-600 mt-2">
          Indulge in luxury. Plush Paradise Chairs redefine comfort, offering sumptuous design for your perfect relaxation spot.
        </p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
          View collection
        </button>
      </div>
    </div>
  </div>
);
}

export default Furniture