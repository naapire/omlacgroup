import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import ImportNotice from '../../components/ImportNotice';

// Import images
import elec1 from './../../assets/elect/elec1.jpg';
import elec2 from './../../assets/elect/elec2.jpg';
import elec3 from './../../assets/elect/elec3.jpg';
import elec4 from './../../assets/elect/elec4.jpg';
import elec5 from './../../assets/elect/elec5.jpg';
import elec6 from './../../assets/elect/elec6.jpg';
import elec7 from './../../assets/elect/elec7.jpg';
import elec8 from './../../assets/elect/elec8.jpg';
import elec9 from './../../assets/elect/elec9.jpg';

// Electronics product data
const electronicData = [
  { img: elec1, title: "Refrigerator" },
  { img: elec2, title: "Iphones" },
  { img: elec3, title: "Smart Phones" },
  { img: elec4, title: "Toasters" },
  { img: elec5, title: "Rice Cooker" },
  { img: elec6, title: "Laptops" },
  { img: elec7, title: "Blenders" },
  { img: elec8, title: "Desktop Fans" },
  { img: elec9, title: "Watches" },
];

export default function Electronic({ handleOrderPopup, searchQuery }) {
  const [showForm, setShowForm] = useState(false);

  const filteredElectronics = electronicData.filter(item =>
    item.title.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  );

  return (
    <div className="min-h-screen py-10 bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Quality Electronics</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Quality electronics at wholesale prices
          </p>
        </div>

        {/* Product Grid */}
        {filteredElectronics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-0">
            {filteredElectronics.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">Color: Assorted</p>
                  <div className="flex items-center gap-1 mt-1">
                    <FaStar className="text-yellow-400" />
                    <span>4.{Math.floor(Math.random() * 10)}</span>
                  </div>
                  <button
                    onClick={handleOrderPopup}
                    className="mt-4 bg-primary text-white py-1 px-4 rounded-full hover:scale-105 duration-300"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
            No electronics found matching "<strong>{searchQuery}</strong>"
          </div>
        )}

        {/* Show Form Button */}
        {!showForm && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-primary text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition"
            >
              Want to Import Your Own Items?
            </button>
          </div>
        )}

        {/* Show Form When Button is Clicked */}
        {showForm && <ImportNotice />}
      </div>
    </div>
  );
}
