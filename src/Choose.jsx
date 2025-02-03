import React from 'react';
import { TruckIcon, WrenchScrewdriverIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center mx-auto">
      <h3 className="text-white text-xl font-semibold mb-2 flex items-center gap-2">
        <Icon className="w-5 h-5 text-white" />
        {title}
      </h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
}

const Choose = () => {
  return (
    <section className="bg-gray-900 py-20 px-4 max-w-3xl  xl:container">
      <div className="">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why choose us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={TruckIcon}
            title="Free shipping"
            description="Get your furniture delivered to your home for free! No extra charges, just pure excitement as your new pieces come right to your doorstep."
          />

          <FeatureCard
            icon={WrenchScrewdriverIcon}
            title="Free Installation"
            description="We'll set up your furniture for you at no cost! Our experts make sure everything fits perfectly in your space, making your life easier."
          />

          <FeatureCard
            icon={ShieldCheckIcon}
            title="10 Years Warranty"
            description="Your furniture is covered for a long time – 10 years! If anything goes wrong, we've got you covered, ensuring your furniture stays awesome."
          />
        </div>
      </div>
    </section>
  );
};

export default Choose; 