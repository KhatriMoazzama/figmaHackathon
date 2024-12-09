import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Logo and Vision */}
        <div className="footer-logo-vision">
          <h1 className="footer-logo">MORENT</h1>
          <p className="footer-vision">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        <div className="links">

        {/* About Section */}
        <div className="footer-about">
          <h2 className="footer-heading">About</h2>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Featured
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Partnership
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Business Relation
              </a>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="footer-community">
          <h2 className="footer-heading">Community</h2>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Podcast
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Invite a friend
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="footer-socials">
          <h2 className="footer-heading">Socials</h2>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © 2022 MORENT. All rights reserved
        </p>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">
            Privacy & Policy
          </a>
          <a href="#" className="footer-bottom-link">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
