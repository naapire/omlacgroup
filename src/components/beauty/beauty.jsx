import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import ImportNotice from '../../components/ImportNotice';

// Import product images
import Beauty1 from './../../assets/beauty/beauty1.jpg';
import Beauty2 from './../../assets/beauty/beauty2.jpg';
import Beauty3 from './../../assets/beauty/beauty3.jpg';
import Beauty4 from './../../assets/beauty/beauty4.jpg';
import Beauty5 from './../../assets/beauty/beauty5.jpg';
import Beauty6 from './../../assets/beauty/beauty6.jpg';
import Beauty7 from './../../assets/beauty/beauty7.jpg';
import Beauty8 from './../../assets/beauty/beauty8.jpg';
import Beauty9 from './../../assets/beauty/beauty9.jpg';
import Beauty10 from './../../assets/beauty/beauty17.jpg';
import Beauty11 from './../../assets/beauty/beauty16.jpg';
import Beauty12 from './../../assets/beauty/BEAUTY10.jpg';
import Beauty13 from './../../assets/beauty/BEAUTY11.jpg';
import Beauty14 from './../../assets/beauty/BEAUTY12.jpg';
import Beauty15 from './../../assets/beauty/BEAUTY13.jpg';
import Beauty16 from './../../assets/beauty/BEAUTY14.jpg';
import Beauty17 from './../../assets/beauty/BEAUTY15.jpg';
import Beauty18 from './../../assets/beauty/beauty18.jpg';
import Beauty19 from './../../assets/beauty/beauty19.jpg';
import Beauty20 from './../../assets/beauty/beauty20.jpg';

// Beauty products data
const beautyData = [
  { img: Beauty1, title: "Neckless" },
  { img: Beauty2, title: "Spectacles" },
  { img: Beauty3, title: "Quality Rings" },
  { img: Beauty4, title: " Phone holders" },
  { img: Beauty5, title: "Butterfly Led Light Stickers" },
  { img: Beauty6, title: "Aroma Diffusers" },
  { img: Beauty7, title: "Quality Jewelry" },
  { img: Beauty8, title: "Spectacles" },
  { img: Beauty9, title: "Body Lotion" },
  { img: Beauty10, title: "Bracelets" },
  { img: Beauty11, title: "Nail set" },
  { img: Beauty12, title: "Brush Holders" },
  { img: Beauty13, title: "Quality Spray" },
  { img: Beauty14, title: "Body Scrub" },
  { img: Beauty15, title: "Face Scrub" },
  { img: Beauty16, title: "Air Freshener" },
  { img: Beauty17, title: "Hair Dryer and accessories" },
  { img: Beauty18, title: "Lips Gloss" },
  { img: Beauty19, title: "Moisturizing Hand Cream" },
  { img: Beauty20, title: "Phone Covers" },
];

export default function Beauty({ handleOrderPopup, searchQuery }) {
  const [showForm, setShowForm] = useState(false);

  // Filter products by searchQuery
  const filteredProducts = beautyData.filter(item =>
    item.title.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  );

  return (
    <div className="min-h-screen py-10 bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Health & Beauty</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Top quality beauty items at wholesale price
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-0">
            {filteredProducts.map((item, index) => (
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
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">Color: Mixed</p>
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
            No products found matching "<strong>{searchQuery}</strong>"
          </div>
        )}

        {/* Show Button to Toggle Form */}
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

        {/* Import Notice Form Section */}
        {showForm && <ImportNotice />}
      </div>
    </div>
  );
}
