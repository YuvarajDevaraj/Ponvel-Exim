import "../../styles/Hero.css";
import Slider1 from "../../assets/Slider1.png";
import Slider2 from "../../assets/Slider2.png";
import Slider3 from "../../assets/Slider3.png";
import Slider4 from "../../assets/Slider4.png";
import { ContactUs } from "../../url";

import { Carousel } from "antd";
const Hero = () => (
  <Carousel>
    <div>
      <img src={Slider1} alt="Slider 1" className="contentStyle" />
      <div className="heroContent">
        <h1>
          TRUST<br></br>PARTNERSHIP<br></br> AND GROWTH
        </h1>
        <a href={ContactUs}>Make Order</a>
      </div>
    </div>
    <div>
      <img src={Slider2} alt="Slider 2" className="contentStyle" />
    </div>
    <div>
      <img src={Slider3} alt="Slider 3" className="contentStyle" />
    </div>
    <div>
      <img src={Slider4} alt="Slider 4" className="contentStyle" />
    </div>
  </Carousel>
);
export default Hero;
