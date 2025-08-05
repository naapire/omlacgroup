import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import ImportNotice from '../../components/ImportNotice';

// Import fashion images
import fashion2 from './../../assets/fashion/fashion2.jpg';
import fashion3 from './../../assets/fashion/fashion3.jpg';
import fashion4 from './../../assets/fashion/fashion4.jpg';
import fashion5 from './../../assets/fashion/fashion5.jpg';
import fashion6 from './../../assets/fashion/fashion6.jpg';
import fashion7 from './../../assets/fashion/fashion7.jpg';
import fashion8 from './../../assets/fashion/fashion8.jpg';
import fashion9 from './../../assets/fashion/fashion9.jpg';
import fashion10 from './../../assets/fashion/fashion10.jpg';
import fashion11 from './../../assets/fashion/fashion11.jpg';
import fashion12 from './../../assets/fashion/fashion12.jpg';
import fashion13 from './../../assets/fashion/fashion13.jpg';
import fashion14 from './../../assets/fashion/fashion14.jpg';
import fashion15 from './../../assets/fashion/fashion15.jpg';
import fashion16 from './../../assets/fashion/fashion16.jpg';
import fashion17 from './../../assets/fashion/fashion17.jpg';
import fashion18 from './../../assets/fashion/fashion18.jpg';
import fashion19 from './../../assets/fashion/fashion19.jpg';
import fashion20 from './../../assets/fashion/fashion20.jpg';
import fashion21 from './../../assets/fashion/fashion21.jpg';
import fashion22 from './../../assets/fashion/fashion22.jpg';

// Fashion item data
const fashionItems = [
  { img: fashion2, title: "Stiletto Heels" },
  { img: fashion3, title: "Hoodie" },
  { img: fashion4, title: "Door mats" },
  { img: fashion5, title: "Duvet Covers" },
  { img: fashion6, title: "Toot Bags" },
  { img: fashion7, title: "Mixed Slippers" },
  { img: fashion8, title: "Black Shoes" },
  { img: fashion9, title: "Plain Hoodies" },
  { img: fashion10, title: "Watches" },
  { img: fashion11, title: "Troller Bag" },
  { img: fashion12, title: "Towels" },
  { img: fashion13, title: "Dressing Mirror" },
  { img: fashion14, title: "Unisex Sneakers" },
  { img: fashion15, title: "Nightwears" },
  { img: fashion16, title: "Mixed Design T-shirts" },
  { img: fashion17, title: "Ladies Bags" },
  { img: fashion18, title: "Wardrobe" },
  { img: fashion19, title: "Bodycon Dresses" },
  { img: fashion20, title: "Sandals" },
  { img: fashion21, title: "Ladies Panties" },
  { img: fashion22, title: "Ladies Bonnets" },
];

export default function Fashion({ handleOrderPopup, searchQuery }) {
  const [showForm, setShowForm] = useState(false);

  const filteredFashion = fashionItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  );

  return (
    <div className="mt-14 mb-12 bg-white dark:bg-gray-900 dark:text-white min-h-screen py-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Stylish Collections</p>
          <h1 className="text-3xl font-bold">Fashion & Wearables</h1>
          <p className="text-xs text-gray-400 dark:text-gray-300">
            Explore the latest trends in wholesale fashion
          </p>
        </div>

        {/* Product Grid */}
        {filteredFashion.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 sm:px-0">
            {filteredFashion.map((item, index) => (
              <div
                key={index}
                className="space-y-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
                data-aos="fade-up"
              >
                <img
                  src={item.img}
                  alt={`fashion-${index}`}
                  className="h-[280px] w-full object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Colorful</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{(4 + Math.random()).toFixed(1)}</span>
                  </div>

                  {/* Order Now Button */}
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-3"
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
            No fashion items found for "<strong>{searchQuery}</strong>"
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
