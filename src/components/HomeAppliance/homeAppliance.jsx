import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import ImportNotice from '../../components/ImportNotice';

import home1 from './../../assets/home/home1.jpg';
import home2 from './../../assets/home/home2.jpg';
import home3 from './../../assets/home/home3.jpg';
import home4 from './../../assets/home/home4.jpg';
import home5 from './../../assets/home/home5.jpg';
import home6 from './../../assets/home/home6.jpg';
import home7 from './../../assets/home/home7.jpg';
import home8 from './../../assets/home/home8.jpg';
import home9 from './../../assets/home/home9.jpg';
import home10 from './../../assets/home/home10.jpg';
import home11 from './../../assets/home/home11.jpg';

const appliances = [
  { id: 1, img: home1, title: "Ceramic cups", rating: 4.5 },
  { id: 2, img: home2, title: "Affordable drying stand", rating: 4.2 },
  { id: 3, img: home3, title: "Plastic trolley", rating: 4.7 },
  { id: 4, img: home4, title: "30 pegs plus basket", rating: 4.3 },
  { id: 5, img: home5, title: "Vegetable Cutter", rating: 4.0 },
  { id: 6, img: home6, title: "Quality tissue rolls", rating: 4.6 },
  { id: 7, img: home7, title: "Kitchen Napkins", rating: 4.8 },
  { id: 8, img: home8, title: "Clothes storage bags", rating: 4.4 },
  { id: 9, img: home9, title: "Foldable Tables", rating: 4.1 },
  { id: 10, img: home10, title: "Ladles", rating: 4.9 },
  { id: 11, img: home11, title: "Stainless steel bowls", rating: 4.3 },
];

export default function HomeAppliance({ handleOrderPopup, searchQuery }) {
  const [showForm, setShowForm] = useState(false);

  const filteredAppliances = appliances.filter((item) =>
    item.title.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  );

  return (
    <div className="min-h-screen py-10 bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Affordable Home Appliances</h2>

        {filteredAppliances.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0">
            {filteredAppliances.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[280px] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <div className="flex items-center gap-1 text-yellow-400 mb-3">
                    <FaStar />
                    <span className="text-gray-600 dark:text-gray-300">{item.rating}</span>
                  </div>
                  <button
                    className="bg-primary text-white py-1 px-4 rounded-full hover:scale-105 duration-300"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
            No appliances found for "<strong>{searchQuery}</strong>"
          </div>
        )}

        {/* Import Button */}
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

        {/* Import Form */}
        {showForm && <ImportNotice />}
      </div>
    </div>
  );
}
