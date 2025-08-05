import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    item: "",
    quantity: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendToWhatsApp = () => {
    const { name, email, address, item, quantity, contact } = formData;

    if (!name || !address || !item || !quantity || !contact) {
      alert("Please fill in all required fields.");
      return;
    }

    const whatsappNumber = "233556393391";

    const message = `Hello Omlac Team,%0A%0AI would like to place an order:%0A- Name: ${name}%0A- Email: ${email || "Not provided"}%0A- Address: ${address}%0A- Item: ${item}%0A- Quantity: ${quantity}%0A- My WhatsApp/Contact: ${contact}%0A%0AThank you.`;

    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");

    // Reset form and close popup
    setFormData({
      name: "",
      email: "",
      address: "",
      item: "",
      quantity: "",
      contact: "",
    });
    setOrderPopup(false);
  };

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[320px]">
              {/* header */}
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-bold">Order Now</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>

              {/* form */}
              <div className="grid gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email (optional)"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Delivery Address"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                  required
                />
                <input
                  type="text"
                  name="item"
                  value={formData.item}
                  onChange={handleChange}
                  placeholder="Item Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                  required
                />
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Quantity"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                  required
                />
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Your WhatsApp / Phone Number"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                  required
                />

                <div className="flex justify-center mt-2">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  >
                    Send to WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
