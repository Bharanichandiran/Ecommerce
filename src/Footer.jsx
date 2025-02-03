import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 md:py-10 px-4 md:px-6 mx-auto xl:container">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-3">
        {/* Gallery */}
        <div className="text-center sm:text-left">
          <h3 className="text-base md:text-lg font-bold mb-2">COMPANY NAME. GALLERY</h3>
          <p className="text-gray-400 text-sm md:text-base">121 Anna Nagar, <br /> Chennai, TN 600081, IN</p>
          <p className="text-gray-400 text-sm md:text-base mt-2">+91 9698969855 <br /> bharani@designer.com</p>
        </div>

        {/* Opening Hours - Gallery */}
        <div className="text-center sm:text-left">
          <h3 className="text-base md:text-lg font-bold mb-2">OPENING HOURS</h3>
          <p className="text-gray-400 text-sm md:text-base">Mon - Sat: 10am - 7pm</p>
          <p className="text-gray-400 text-sm md:text-base">Sunday: Closed</p>
        </div>

        {/* Divider - Only visible on larger screens */}
        <div className="hidden lg:block">
          <div className="w-0.5 h-[100px] bg-gray-100 mx-auto"></div>
        </div>

        {/* Showroom */}
        <div className="text-center sm:text-left">
          <h3 className="text-base md:text-lg font-bold mb-2">COMPANY NAME. SHOWROOM</h3>
          <p className="text-gray-400 text-sm md:text-base">121 Anna Nagar, <br /> Chennai, TN 600081, IN</p>
          <p className="text-gray-400 text-sm md:text-base mt-2">+91 9698969855 <br /> bharani@designer.com</p>
        </div>

        {/* Opening Hours - Showroom */}
        <div className="text-center sm:text-left">
          <h3 className="text-base md:text-lg font-bold mb-2">OPENING HOURS</h3>
          <p className="text-gray-400 text-sm md:text-base">Mon - Sat: 10am - 7pm</p>
          <p className="text-gray-400 text-sm md:text-base">Sunday: 10am - 4pm</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 md:mt-10 pt-4 md:pt-6 text-center text-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4">
            <a href="#" className="hover:text-white text-sm md:text-base">Terms and Conditions</a>
            <a href="#" className="hover:text-white text-sm md:text-base">Privacy Policy</a>
            <a href="#" className="hover:text-white text-sm md:text-base">Cookies Policy</a>
          </div>
          <p className="text-sm md:text-base order-first md:order-last">@COMPANYNAME. 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer