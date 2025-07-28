import "../../styles/Certifications.css";
import FSSAI from "../../assets/FSSAI PONVEL EXIM.png";
import FIEO from "../../assets/PONVEL EXIM FIEO.png";
import { Col, Row } from "antd";
const Certifications = () => (
  <section className="certifications">
    <h2>Certifications & Memberships</h2>
    <Row gutter={[12, 12]}>
      <Col xs={24} sm={12} md={12}>
        <img src={FSSAI} alt="PONVEL EXIM FSSAI" />
      </Col>
      <Col xs={24} sm={12} md={12}>
        <img src={FIEO} alt="PONVEL EXIM FIEO" className="certificate" />
      </Col>
    </Row>
  </section>
);
export default Certifications;
