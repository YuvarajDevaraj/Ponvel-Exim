import "./Footer.css";
import logo from "../Ponvel Logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";

import { BearBlitz, LicknChew, Facebook, WhatsApp, Insatagram } from "../url";

import WhatsApp_Chat from "../assets/whatsapp.png";

const Footers = () => {
  return (
    <footer className="footers">
      <a href={WhatsApp} target="_blank">
        <img src={WhatsApp_Chat} className="whatsApp_Chat" />
      </a>
      <div className="footer-overlay">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="Ponvel Exim" />
          </div>
          <div className="footer-links">
            <div>
              <p>
                <a href={BearBlitz} target="_blank">
                  Bearbitz
                </a>
              </p>
              <p>
                <a href={LicknChew} target="_blank">
                  Lick n Chew
                </a>
              </p>
              <p>
                <a href="" target="_blank">
                  Viska Coirs
                </a>
              </p>
              <p>
                <a href="" target="_blank">
                  Hummy
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href={BearBlitz} target="_blank">
                  Biscuits
                </a>
              </p>
              <p>
                <a href={LicknChew} target="_blank">
                  Lollipops
                </a>
              </p>
              <p>
                <a href={BearBlitz} target="_blank">
                  Waffers
                </a>
              </p>
              <p>
                {" "}
                <a href={LicknChew} target="_blank">
                  Candies
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href={LicknChew} target="_blank">
                  Chocolates
                </a>
              </p>
              <p>
                <a href="" target="_blank">
                  Breakfast Cereals
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="" target="_blank">
                  Home care Products
                </a>
              </p>
              <p>
                <a href="" target="_blank">
                  Personal care Products
                </a>
              </p>
              <p>
                <a href="" target="_blank">
                  Coirs
                </a>
              </p>
              <p>
                <a href="" target="_blank">
                  Home Textiles
                </a>
              </p>
            </div>
            <div>
              <div className="whatsapp">
                <FaPhone /> +91 80563 90034
              </div>
              <div className="whatsapp">
                <FaWhatsapp /> +91 82485 88257
              </div>
              <div className="whatsapp">
                <FaWhatsapp /> +91 82955 34323
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="contact">
            <FaEnvelope /> support@ponvelexim.com
          </div>
          <div className="social">
            <span>Follow Us On</span>
            <span>
              <a href={Facebook} target="_blank">
                <FaFacebookF />
              </a>
              <a href={WhatsApp} target="_blank">
                <FaYoutube />
              </a>
              <a href={Insatagram} target="_blank">
                <FaInstagram />
              </a>
            </span>
          </div>
          <div className="copyright">© 2023 Ponvel Exim</div>

          <div className="address">
            <FaLocationDot /> 1/2, Ramasamy Gounder Layout, 60 Feet Road, <br />
            Perichipalayam South, Tirupur - 641 604.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
