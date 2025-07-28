import "../../styles/TrustedBrands.css";
import BearBlitzLogo from "../../assets/bearbitz.png";
import LicknChewLogo from "../../assets/lick n chew.png";
import greenIndustriesLogo from "../../assets/Green Industries.png";
import { BearBlitz, LicknChew } from "../../url";
import { Col, Row } from "antd";
const TrustedBrands = () => {
  return (
    <section className="trusted-brands">
      <h1>Trusted Brands</h1>
      <div className="company-boxes">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <div className="box">
              <a href={BearBlitz}>
                <img src={BearBlitzLogo} alt="Bear Blitz Logo" />
              </a>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="box">
              <a href={LicknChew}>
                <img src={LicknChewLogo} alt="Lick n Chew Logo" />
              </a>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="box logo-box">
              <a href="#">
                <img src={greenIndustriesLogo} alt="Green Industries Logo" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TrustedBrands;
