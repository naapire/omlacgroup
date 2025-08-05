import React, { useState } from 'react';

const ImportNotice = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    item: '',
    quantity: '',
    address: '',
    whatsapp: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name, email, item, quantity, address, whatsapp
    } = formData;

    const message = `New Import Request:

Full Name: ${name}
Email: ${email}
Item: ${item}
Quantity: ${quantity}
Delivery Address: ${address}
WhatsApp Number: ${whatsapp}`;

    const encodedMessage = encodeURIComponent(message);

    // Ghana number without leading 0 (replace 0 with 233)
    const whatsappNumber = '+233556393391';

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

    setFormData({
      name: '',
      email: '',
      item: '',
      quantity: '',
      address: '',
      whatsapp: '',
      image: null,
    });
  };

  return (
    <div className="mt-16 bg-primary/10 p-6 rounded-md text-center max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold mb-2 text-primary dark:text-white">
        Have Your Own Items?
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        You are welcome to bring your own list of items, and we'll help you import them directly from China. Fill the form below to get started!
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 text-left" encType="multipart/form-data">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="p-2 rounded border border-gray-300 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="p-2 rounded border border-gray-300 focus:outline-none"
        />
        <input
          type="text"
          name="item"
          value={formData.item}
          onChange={handleChange}
          placeholder="Item Name"
          required
          className="p-2 rounded border border-gray-300 focus:outline-none"
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
          className="p-2 rounded border border-gray-300 focus:outline-none"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Delivery Address"
          required
          className="p-2 rounded border border-gray-300 focus:outline-none"
        />
        <input
          type="tel"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="WhatsApp Number"
          required
          className="p-2 rounded border border-gray-300 focus:outline-none"
        />

        {/* Image upload (optional) */}
        <div>
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            Upload item image (optional)
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="p-2 rounded border border-gray-300 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white py-2 rounded hover:bg-opacity-90 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ImportNotice;
