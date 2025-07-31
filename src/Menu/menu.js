import { useState } from "react";
import { Menu, Drawer, Button, Input } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "../custom.css";
import { BearBlitz, LicknChew, Soon } from "../../src/url";

const Main_menu = () => {
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const showDrawer = () => setVisible(true);
  const onClose = () => {
    setVisible(false);
    setSearchTerm(""); // optional: clear search on drawer close
  };

  const data = [
    "Our Team",
    "Our Company",
    "Bearbitz",
    "Lick & Chew",
    "Coirs",
    "Homecare & Personal Care",
    "Pictures",
    "Videos",
    "Certificates",
    "Contact",
  ];

  const items = [
    {
      key: "1",
      label: "About",
      children: [
        {
          key: "11",
          type: "group",
          children: [
            { key: "111", label: <NavLink to={Soon}>Our Team</NavLink> },
            { key: "112", label: <NavLink to={Soon}>Our Company</NavLink> },
          ],
        },
      ],
    },
    {
      key: "2",
      label: "Products",
      children: [
        {
          key: "21",
          type: "group",
          children: [
            {
              key: "211",
              label: "Confectioneries",
              children: [
                {
                  key: "2111",
                  label: <NavLink to={BearBlitz}>Bearbitz</NavLink>,
                },
              ],
            },
            {
              key: "212",
              label: "Candies & Lollipops",
              children: [
                {
                  key: "2121",
                  label: <NavLink to={LicknChew}>Lick & Chew</NavLink>,
                },
              ],
            },
            {
              key: "213",
              label: <NavLink to={Soon}>Coirs</NavLink>,
            },
            {
              key: "214",
              label: <NavLink to={Soon}>Homecare & Personal Care</NavLink>,
            },
          ],
        },
      ],
    },
    {
      key: "3",
      label: "Gallery",
      children: [
        {
          key: "31",
          type: "group",
          children: [
            { key: "311", label: <NavLink to={Soon}>Pictures</NavLink> },
            { key: "312", label: <NavLink to={Soon}>Videos</NavLink> },
            { key: "313", label: <NavLink to={Soon}>Certificates</NavLink> },
          ],
        },
      ],
    },
    {
      key: "4",
      label: <NavLink to="/contact">Contact</NavLink>,
    },
  ];

  return (
    <div className="main-menu">
      <div className="desktop-menu">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            ...items,
            {
              key: "5",
              label: (
                <Input
                  placeholder="Search"
                  prefix={<FontAwesomeIcon icon={faSearch} />}
                  className="search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              ),
            },
          ]}
          className="Nav-menu"
        />
        {searchTerm && (
          <div className="search-results">
            {data
              .filter((item) =>
                item.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((filteredItem, index) => (
                <div key={index} className="search-item">
                  {filteredItem}
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="mobile-toggle">
        <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        open={visible}
        width={280}>
        <div style={{ padding: "0 8px 1rem" }}>
          <Input
            placeholder="Search"
            prefix={<FontAwesomeIcon icon={faSearch} />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search"
          />
          {searchTerm && (
            <div className="search-results">
              {data
                .filter((item) =>
                  item.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((filteredItem, index) => (
                  <div key={index} className="search-item">
                    {filteredItem}
                  </div>
                ))}
            </div>
          )}
        </div>

        <Menu mode="inline" items={items} onClick={onClose} />
      </Drawer>
    </div>
  );
};

export default Main_menu;
