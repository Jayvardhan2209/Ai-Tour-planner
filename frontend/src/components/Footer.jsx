import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="foot bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              AI Travel Planner
            </h2>
            <p className="text-gray-400 mt-3">
              Plan smarter. Travel better. Let AI create your
              perfect travel experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="l">
              <li>
                <a href="/" className="ql">
                  Home
                </a>
              </li>

              <li>
                <a href="/planner" className="ql">
                  Travel Planner
                </a>
              </li>

              <li>
                <a href="/about" className="ql">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contact
            </h3>

            <p className="text-gray-400">
              Email: support@aitravelplanner.com
            </p>

            <p className="text-gray-400 mt-2">
              Made with ❤️ using React & AI
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} AI Travel Planner. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
    // <div className="mt-20 bg-blue-500 p-10">
    //     TEST
    // </div>
  );
};

export default Footer;