import React, { useState } from "react";
import Img1 from "../../assets/product/women.jpg";
import Img2 from "../../assets/product/women2 (1).jpg";
import Img3 from "../../assets/product/women3 (2).jpg";
import Img4 from "../../assets/product/women2 (2).jpg";
import Img5 from '../../assets/product/item1.jpg';
import Img6 from '../../assets/product/item2.jpg';
import Img7 from '../../assets/product/item3.jpg';
import Img8 from '../../assets/product/item4.jpg';
import Img9 from '../../assets/product/item5.jpg';
import Img10 from '../../assets/product/item6.jpg';
import Img11 from '../../assets/product/item7.jpg';
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Towels",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Refrigerators",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Bola Shirts",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Sandals",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Funitures",
    rating: 4.5,
    color: "All colors",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Kids Shorts",
    rating: 4.2,
    color: "All colors",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img7,
    title: "Ladies Heels",
    rating: 4.8,
    color: "All colors",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: Img8,
    title: "Funitures",
    rating: 4.6,
    color: "All colors",
    aosDelay: "1400",
  },
  {
    id: 9,
    img: Img9,
    title: "Toasters",
    rating: 4.3,
    color: "Black",
    aosDelay: "1600",
  },
  {
    id: 10,
    img: Img10,
    title: "Cultlery set",
    rating: 4.4,
    color: "All colors",
    aosDelay: "1800",
  },
  {
    id: 11,
    img: Img11,
    title: "Foldable Table",
    rating: 4.1,
    color: "All colors",
    aosDelay: "2000",
  },
];

const Products = ({ handleOrderPopup }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Browse our most popular imported wholesale products
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ProductsData.slice(0, visibleCount).map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 w-full bg-white dark:bg-gray-800 rounded-md shadow-md p-4"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[300px] w-full object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold text-lg">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  <button
                    onClick={handleOrderPopup}
                    className="mt-3 bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* view all button */}
          {visibleCount < ProductsData.length && (
            <div className="flex justify-center">
              <button
                onClick={handleViewMore}
                className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
