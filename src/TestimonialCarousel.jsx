import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Get your furniture delivered to your home for free! No extra charges, just pure excitement as your new pieces come right to your doorstep.",
    image: "src/assets/Rectangle 23.png",
  },
  {
    text: "Experience luxury like never before. Elegant, stylish, and delivered with care to your doorstep.",
    image: "src/assets/Rectangle 26.png",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] mx-auto xl:container">
      {/* Left Column */}
      <div className="flex flex-col items-start bg-[#DAD9D7] p-6 md:p-10 space-y-4 md:space-y-6 text-left justify-center">
        <h2 className="text-2xl md:text-3xl font-bold">Clients share precious feedback</h2>
        <p className="text-gray-600 max-w-md text-sm md:text-base">{testimonials[index].text}</p>
        <button className="mt-4 bg-black text-white px-3 md:px-4 py-2 rounded-lg text-sm md:text-base">
          View collection
        </button>
      </div>

      {/* Right Column */}
      <div className="relative flex items-center bg-[#DAD9D7] p-4 md:p-6 justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 bg-white p-1 md:p-2 rounded-full shadow"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        </button>

        <div className="w-[90%] md:w-[500px] h-auto md:h-[300px] bg-white p-4 md:p-6 rounded-xl shadow-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
          <p className="text-gray-800 text-sm flex-1">{testimonials[index].text}</p>
          <img
            src={testimonials[index].image}
            alt="Testimonial"
            className="w-full md:w-[250px] h-[200px] md:h-[300px] rounded-lg object-cover"
          />
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 bg-white p-1 md:p-2 rounded-full shadow"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}