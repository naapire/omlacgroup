import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

// Pages
import Kids from "./components/kids/kids";
import Beauty from "./components/beauty/beauty";
import HomeAppliance from "./components/HomeAppliance/homeAppliance";
import Fashion from "./components/fashion/fashion";
import Electronics from "./components/electronics/electronic";
import Customerization from "./components/customerisation/customerisation";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        {/* Pass search handler to Navbar */}
        <Navbar handleOrderPopup={handleOrderPopup} onSearch={handleSearch} />

        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products searchQuery={searchQuery} />
                <Banner />
                <Subscribe />
                <Products handleOrderPopup={handleOrderPopup} searchQuery={searchQuery} />
                <Testimonials />
              </>
            }
          />

          {/* Other pages with searchQuery passed down */}
          <Route
            path="/kids"
            element={<Kids handleOrderPopup={handleOrderPopup} searchQuery={searchQuery} />}
          />
          <Route
            path="/beauty"
            element={<Beauty handleOrderPopup={handleOrderPopup} searchQuery={searchQuery} />}
          />
          <Route
            path="/home-appliances"
            element={<HomeAppliance handleOrderPopup={handleOrderPopup} searchQuery={searchQuery} />}
          />
          <Route
            path="/fashion"
            element={<Fashion handleOrderPopup={handleOrderPopup} searchQuery={searchQuery} />}
          />
          <Route
            path="/electronics"
            element={<Electronics handleOrderPopup={handleOrderPopup} searchQuery={searchQuery} />}
          />
          <Route
            path="/customeriZation"
            element={<Customerization handleOrderPopup={handleOrderPopup} searchQuery={searchQuery} />}
          />
        </Routes>

        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </BrowserRouter>
  );
};

export default App;
