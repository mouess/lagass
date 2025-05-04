import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the specific icons you need
import { faInstagram, faSquareFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ data }) => {
  return (
    <>
      <footer>
        <h3>Be part of our story on our social platforms</h3>
        <div className="socialmedia">
          <FontAwesomeIcon icon={faInstagram} className="icons" />
          <FontAwesomeIcon icon={faSquareFacebook} className="icons" />
          <FontAwesomeIcon icon={faTiktok} className="icons" />
        </div>
        <p>&copy; 2025 LAGASS. Tous droits réservés - lagass.ma</p>
      </footer>
    </>
  );
};
export default Footer;