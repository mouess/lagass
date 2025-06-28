import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the specific icons you need
import { faInstagram, faSquareFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ data }) => {
  return (
    <>
      <footer>
        <h3 style={{fontSize:"larger"}}>Discover our social media platforms</h3>
        <div className="socialmedia">
          <a href="https://www.instagram.com/lagass.ma/#" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="icons" />
          </a>
          <a href="https://www.facebook.com/people/Lagass-Lagass/pfbid025nyogiyP3h2oWKzhkUW3G3AqmfiwkvnWBvHwt4A4pVH4AQ9gCSXV3eSV3X2psDt7l/" target="_blank">
            <FontAwesomeIcon icon={faSquareFacebook} className="icons" />
          </a>
          <a href="https://www.tiktok.com/@lagass.agency" target="_blank">
            <FontAwesomeIcon icon={faTiktok} className="icons" />
          </a>
        </div><br/>
        <p>&copy; 2025 LAGASS. Tous droits réservés - lagass.ma</p>
      </footer>
    </>
  );
};
export default Footer;