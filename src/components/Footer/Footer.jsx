import React from "react";
import footerLogo from "../../assets/logo.jpg";
import Banner from "../../assets/website/footer.jpg";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const FooterLinks = [
  { title: "Home Appliances", link: "/home-appliances" },
  { title: "Electronics", link: "/electronics" },
  { title: "Kids & Toys", link: "/kids" },
  { title: "Fashion & Wearables", link: "/fashion" },
  { title: "Health & Beauty", link: "/beauty" },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="relative text-white">
      {/* Transparent black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="container relative z-10">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Footer Logo" className="max-w-[50px]" />
              Omlac
            </h1>
            <p>
              Importing quality goods from China to Ghana. We provide bulk deals on electronics, fashion, home items, and more.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold mb-3">Important Links</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title}
                    className="hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  >
                    <Link to={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
<div className="py-8 px-4">
  <div className="flex items-center gap-3 mt-6">
    <a 
      href="https://www.instagram.com/omlac_supplies/?_pwa=1#" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaInstagram className="text-3xl" />
    </a>
    <a 
      href="http://web.facebook.com/profile.php?id=61579171751313" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaFacebook className="text-3xl" />
    </a>
   
  </div>
  <div className="mt-6">
    <div className="flex items-center gap-3">
      <FaLocationArrow />
      <p>Ghana</p>
    </div>
    <div className="flex items-center gap-3 mt-3">
      <FaMobileAlt />
      <p>+233 556393391</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
