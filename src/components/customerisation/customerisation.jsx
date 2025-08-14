import React from "react";
import Sample1 from './../../assets/website/customer1.jpg';
import Sample2 from './../../assets/website/customer2.jpg';
import Sample3 from './../../assets/website/customer3.jpg';
import Sample from './../../assets/website/banner2.jpg';

export default function Customerization({ handleOrderPopup }) {
  const whatsappNumber = "233556393391"; // Change to your WhatsApp number
  const emailAddress = "comfortnaapire@email.com"; // Change to your email

  const handleWhatsApp = () => {
    const message = "Hello! I would like to request a custom design.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0b0c10]">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-80 flex items-center justify-center"
        style={{ backgroundImage: `url(${Sample})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl md:text-5xl text-white font-bold">Brand Your Goods with Us</h1>
          <p className="text-lg text-gray-200 mt-2">
            Custom printing & packaging to make your products stand out
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl text-yellow-400 font-bold mb-4 dark:text-yellow-300">
          Make Your Brand Unforgettable
        </h2>
        <p className="text-gray-700 text-lg dark:text-gray-300">
          We offer premium customization services for your goods. Whether it's adding your business logo,
          your name, or creating a unique product design, our branding solutions help your items leave a lasting impression.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-8">
        {[
          { title: "Logo Printing", desc: "We print your business or personal logo with high-quality, long-lasting ink.", img: Sample1 },
          { title: "Custom Packaging", desc: "Unique packaging designs to enhance your brand's image.", img: Sample2 },
          { title: "Personalized Designs", desc: "Names, messages, and creative art to make your goods one-of-a-kind.", img: Sample3 },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
          >
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold dark:text-white">{item.title}</h3>
              <p className="text-gray-600 mt-2 dark:text-gray-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Directly */}
      <section className="text-center py-12 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl text-yellow-400 font-bold mb-4 dark:text-yellow-300">
          Ready to Customize Your Goods?
        </h2>
        <p className="text-gray-600 mb-6 dark:text-gray-300">
          Contact us today via WhatsApp or Email to send your designs and start creating your unique branded products.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={handleWhatsApp}
            className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg text-lg"
          >
            📱 Chat with Us on WhatsApp
          </button>

          <button
            onClick={handleOrderPopup}
            className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg text-lg"
          >
            🛒 Order Now
          </button>
        </div>
      </section>
    </div>
  );
}
