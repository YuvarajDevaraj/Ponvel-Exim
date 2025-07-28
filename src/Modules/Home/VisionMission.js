import "../../styles/VisionMission.css";
import vision1 from "../../assets/vision1.png";
import vision2 from "../../assets/vision2.png";
import vision3 from "../../assets/vision3.png";
import { Col, Row } from "antd";
const VisionMissionGoals = () => (
  <div className="vmg-container">
    <Row gutter={[16, 16]}>
      <Col xs={24} md={14}>
        <div className="vmg-row">
          <div className="vmg-block vision">
            <h2>VISION</h2>
            <div className="vmg-box">
              <span className="vmg-icon">
                <img src={vision1} alt="Vision" />
              </span>
              <p>
                "To be a trusted global trade partner, delivering India’s finest
                products with quality, sustainability, and excellence."
              </p>
            </div>
          </div>
        </div>
        <div className="vmg-row">
          <div className="vmg-block mission">
            <h2>MISSION</h2>
            <div className="vmg-box">
              <span className="vmg-icon">
                <img src={vision3} alt="Mission" />
              </span>
              <p>
                "To empower Indian SMEs and MSMEs to expand globally by
                providing comprehensive export-import solutions that ensure
                seamless trade and sustainable business growth."
              </p>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={24} md={10}>
        <div className="vmg-row right">
          <div className="vmg-block goals">
            <h2>GOALS</h2>
            <div className="vmg-box right-ul">
              <span className="vmg-icon diamond">
                <img src={vision2} alt="Goals" />
              </span>
              <ul>
                <li>Integrity Leads</li>
                <li>Collaboration Wins</li>
                <li>Knowledge Empowers</li>
                <li>Clear Communication</li>
                <li>Excellence Inspires</li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default VisionMissionGoals;
