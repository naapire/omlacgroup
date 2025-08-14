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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, address, item, quantity, contact } = formData;

    if (!name || !address || !item || !quantity || !contact) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "9eade46e-1397-4e56-a8ea-c718cd5b60f6",
          name: name,
          email: email || "customer@omlac.com",
          address: address,
          item: item,
          quantity: quantity,
          contact: contact,
          subject: `New Order Request - ${item}`,
          message: `New order request from ${name} for ${quantity} units of ${item}. Contact: ${contact}. Address: ${address}`,
          replyto: email || "customer@omlac.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        console.log("✅ Email sent successfully via Web3Forms");

        const orderDetails = {
          id: Date.now(),
          timestamp: new Date().toISOString(),
          customer: { name, email: email || "Not provided", address, contact },
          order: { item, quantity: parseInt(quantity) },
          status: "Email Sent",
        };
        console.log("🎯 ORDER DETAILS:", orderDetails);

        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            address: "",
            item: "",
            quantity: "",
            contact: "",
          });
          setOrderPopup(false);
          setSubmitStatus("");
        }, 4000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending order:", error);
      setSubmitStatus("error");
      console.log("📧 ORDER DETAILS (manual processing):", {
        name,
        email: email || "Not provided",
        address,
        item,
        quantity,
        contact,
        timestamp: new Date().toISOString(),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setOrderPopup(false);
    setFormData({
      name: "",
      email: "",
      address: "",
      item: "",
      quantity: "",
      contact: "",
    });
    setSubmitStatus("");
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
                  onClick={handleClose}
                />
              </div>

              {/* Status messages */}
              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
                  <div className="font-bold">✅ Order Submitted Successfully!</div>
                  <div className="text-sm mt-1">
                    We've received your order and will contact you soon.
                    <br />
                    <span className="text-xs text-gray-600">
                      {formData.item
                        ? `Order: ${formData.item} x${formData.quantity}`
                        : ""}
                      <br />
                      📧 Email sent to info@omlacgroup.com
                    </span>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  ❌ Error sending order. Please try again or contact us directly.
                </div>
              )}

              {/* form */}
              <form onSubmit={handleSubmit} className="grid gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email (optional)"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Delivery Address"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="item"
                  value={formData.item}
                  onChange={handleChange}
                  placeholder="Item Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Quantity"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Your WhatsApp / Phone Number"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1"
                  required
                  disabled={isSubmitting}
                />

                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit Order"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
