import "../../styles/WhyChooseUs.css";
import Manufacturer from "../../assets/why1.png";
import Products from "../../assets/why2.png";
import Quality from "../../assets/why3.png";
import Branding from "../../assets/why4.png";
import Shipping from "../../assets/why5.png";

const features = [
  { text: "Direct from Manufacturer" },
  { text: "Wide Range of Products" },
  { text: "Strict Quality Standards" },
  { text: "Custom Branding Available" },
  { text: "Reliable Global Shipping" },
];

const WhyChooseUs = () => {
  return (
    <div className="shipping">
      <h2>WHY YOU CHOOSE US ?</h2>
      <div className="shipping-section">
        <div className="overlay-features left">
          <div className="feature">
            <img
              src={Manufacturer}
              alt="Manufacturer"
              className="ship-image-icon"
            />
            <h4>{features[0].text}</h4>
          </div>
          <div className="feature">
            <img src={Products} alt="Products" className="ship-image-icon" />
            <h4>{features[1].text}</h4>
          </div>
        </div>

        <div className="overlay-features center">
          <div className="feature">
            <img src={Quality} alt="Quality" className="ship-image-icon" />
            <h4>{features[2].text}</h4>
          </div>
        </div>

        <div className="overlay-features right">
          <div className="feature">
            <img src={Branding} alt="Branding" className="ship-image-icon" />
            <h4>{features[3].text}</h4>
          </div>
          <div className="feature">
            <img src={Shipping} alt="Shipping" className="ship-image-icon" />
            <h4>{features[4].text}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
