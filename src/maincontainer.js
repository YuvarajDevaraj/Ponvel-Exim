import logo from "./assets/Ponvel Logo.png";
import "./custom.css";
import MasterMenu from "./Menu/menu";
import { Layout, Row, Col } from "antd";
import { Outlet } from "react-router-dom";
import Footers from "../src/Footer/Footer";

const { Header, Content, Footer } = Layout;

function Maincontainer() {
  return (
    <Layout>
      <Header className="header">
        <Row className="row">
          <Col span={10}>
            <a href="/">
              <img src={logo} alt="logo" className="logo " />
            </a>
          </Col>
          <Col flex="auto" span={14}>
            <MasterMenu />
          </Col>
        </Row>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer className="footer">
        <Footers />
      </Footer>
    </Layout>
  );
}

export default Maincontainer;
