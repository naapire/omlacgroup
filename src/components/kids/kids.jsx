import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import ImportNotice from '../../components/ImportNotice';

import Kids1 from './../../assets/kids/kids1.jpg';
import Kids2 from './../../assets/kids/kids2.jpg';
import Kids3 from './../../assets/kids/kids3.jpg';
import Kids4 from './../../assets/kids/kids4.jpg';
import Kids5 from './../../assets/kids/kids5.jpg';
import Kids6 from './../../assets/kids/kids6.jpg';
import Kids7 from './../../assets/kids/kids7.jpg';
import Kids8 from './../../assets/kids/kids8.jpg';
import Kids9 from './../../assets/kids/kids9.jpg';
import Kids10 from './../../assets/kids/kids10.jpg';
import Kids11 from './../../assets/kids/kids11.jpg';
import Kids12 from './../../assets/kids/kids12.jpg';
import Kids13 from './../../assets/kids/kids13.jpg';
import Kids14 from './../../assets/kids/kids14.jpg';
import Kids15 from './../../assets/kids/kids15.jpg';
import Kids16 from './../../assets/kids/kids16.jpg';
import Kids17 from './../../assets/kids/kids17.jpg';

const kidsData = [
  { img: Kids1, title: "Kids shirt and Black pants" },
  { img: Kids2, title: "Kids shorts" },
  { img: Kids3, title: "Kids Games" },
  { img: Kids4, title: "Four in one Bags" },
  { img: Kids5, title: "School bags" },
  { img: Kids6, title: "Kids school bags" },
  { img: Kids7, title: "Kids tablets" },
  { img: Kids8, title: "Kids tablets" },
  { img: Kids9, title: "Glass Cup with Straw" },
  { img: Kids10, title: "Wet Wipes" },
  { img: Kids11, title: "10 wipes plus Box" },
  { img: Kids12, title: "Glass Cup" },
  { img: Kids13, title: "Water bottle" },
  { img: Kids14, title: "Glass Water bottles" },
  { img: Kids15, title: "Kids wear" },
  { img: Kids16, title: "Pencils" },
  { img: Kids17, title: "Diapers" },
];

export default function Kids({ handleOrderPopup, searchQuery }) {
  const [showForm, setShowForm] = useState(false);

  const filteredKids = kidsData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  );

  return (
    <div className="min-h-screen py-10 bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Toys & Kids Items</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Browse toys, clothes, and essentials for kids
          </p>
        </div>

        {/* Product Grid or Empty Message */}
        {filteredKids.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0">
            {filteredKids.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={`Kids item ${index + 1}`}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Color: Mixed</p>
                  <div className="flex items-center gap-1 mt-1">
                    <FaStar className="text-yellow-400" />
                    <span>4.{Math.floor(Math.random() * 10)}</span>
                  </div>

                  <button
                    className="mt-4 bg-primary text-white py-1 px-4 rounded-full hover:scale-105 duration-300"
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
            No kids items found for "<strong>{searchQuery}</strong>"
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
