import React, { useEffect, useState } from "react";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { isMobile } from "react-device-detect";

export default function Nav() {
  const [red_btn, set_red_btn] = useState(1);
  const itemsUseCase = [
    {
      key: "1",
      label: (
        <Link
          onClick={() => {
            set_red_btn(5);
            toggleMenu();
          }}
          rel="noopener noreferrer"
          to="/Ev_users"
        >
          Ev Users
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          onClick={() => {
            set_red_btn(5);
            toggleMenu();
          }}
          rel="noopener noreferrer"
          to="/ev_manufacturer"
        >
          EV Manufacturers
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          onClick={() => {
            set_red_btn(5);
            toggleMenu();
          }}
          rel="noopener noreferrer"
          to="/fleets"
        >
          Fleets
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link rel="noopener noreferrer" to="/charge">
          Charge Point Operators
        </Link>
      ),
    },
  ];

  const itemsTech = [
    {
      key: "1",
      label: (
        <Link
          onClick={() => {
            set_red_btn(3);
            toggleMenu();
          }}
          rel="noopener noreferrer"
          to="/Technology"
        >
          Our Tech
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          onClick={() => {
            set_red_btn(3);
            toggleMenu();
          }}
          rel="noopener noreferrer"
          to="/market"
        >
          Market
        </Link>
      ),
    },
  ];

  const itemsAbout = [
    {
      key: "1",
      label: (
        <Link
          onClick={() => {
            set_red_btn(2);
            toggleMenu();
          }}
          rel="noopener noreferrer"
          to="/about"
        >
          About Us
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          onClick={() => {
            set_red_btn(2);
            toggleMenu();
          }}
          rel="noopener noreferrer"
          to="/team"
        >
          Team
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          onClick={() => {
            set_red_btn(2);
            toggleMenu();
          }}
          rel="noopener noreferrer"
          to="/journey"
        >
          Journey So Far
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          onClick={() => {
            set_red_btn(2);
            toggleMenu();
          }}
          rel="noopener noreferrer"
          to="/board_members"
        >
          Board Members
        </Link>
      ),
    },
  ];

  const itemsNews = [
    {
      key: "1",
      label: (
        <Link
          onClick={() => {
            set_red_btn(7);
            toggleMenu();
          }}
          rel="noopener noreferrer"
          to="/News_room"
        >
          News
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          onClick={() => {
            set_red_btn(7);
            toggleMenu();
          }}
          rel="noopener noreferrer"
          to="/Blogs"
        >
          Blog
        </Link>
      ),
    },
  ];

  let [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  /** this hook gets the scroll y-axis **/
  const { scrollY } = useScroll();
  /** this hook manages state **/
  const [hidden, setHidden] = React.useState(false);

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 500 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }
  /** update the onChange callback to call for `update()` **/
  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });
  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 10 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 1, y: 10 },
  };
  // Calculate the background color based on scrollY?.current value
  const backgroundColor = "white";
  // Use the calculated backgroundColor in the variants
  variants.visible = { ...variants.visible, background: backgroundColor };

  variants.hidden = { ...variants.hidden, background: "white" };

  return (
    <motion.div
      id="nav"
      variants={variants}
      animate={`${red_btn === 1 ? "visible" : "hidden"}`}
    >
      <Link to="/" className="logo">
        <img src="../assets/logo.png" alt="" />
      </Link>
      {mobile && (
        <div
          className={`hamburger-menu ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
      <ul className={`${mobile && "mobile"} ${isActive ? "show" : "hide"}`}>
        <Link
          to="/"
          className={`a1 ${red_btn === 1 ? "red" : ""}`}
          onClick={() => {
            set_red_btn(1);
            toggleMenu();
          }}
        >
          <li className="a1 nav_elements">Home</li>
        </Link>
        <Dropdown
          menu={{
            items: itemsAbout,
            forceSubMenuRender: true,
          }}
          placement="top"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Link className={`a2 ${red_btn === 2 ? "red" : ""}`}>
                <li className="nav_elements">About</li>
              </Link>
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items: itemsTech,
            forceSubMenuRender: true,
          }}
          placement="top"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Link className={`a3 ${red_btn === 3 ? "red" : ""}`}>
                <li className="nav_elements">Technology</li>
              </Link>
              {/* <DownOutlined /> */}
            </Space>
          </a>
        </Dropdown>
        <Link
          to="/Products"
          className={`a4 ${red_btn === 4 ? "red" : ""}`}
          onClick={() => {
            set_red_btn(4);
            toggleMenu();
          }}
        >
          <li className="nav_elements">Our Products</li>
        </Link>
        <Dropdown
          menu={{
            items: itemsUseCase,
            forceSubMenuRender: true,
          }}
          placement="top"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Link
                to="/Use_case"
                className={`a5 ${red_btn === 5 ? "red" : ""}`}
                onClick={() => {
                  set_red_btn(5);
                  // toggleMenu();
                }}
              >
                <li className="nav_elements">Use cases</li>
              </Link>
              {/* <DownOutlined /> */}
            </Space>
          </a>
        </Dropdown>
        <Link
          to="/Contacts"
          className={`a6 ${red_btn === 6 ? "red" : ""}`}
          onClick={() => {
            set_red_btn(6);
            toggleMenu();
          }}
        >
          <li className="nav_elements">Contact</li>
        </Link>
        <Dropdown
          menu={{
            items: itemsNews,
            forceSubMenuRender: true,
          }}
          placement="top"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Link className={`a7 ${red_btn === 7 ? "red" : ""}`}>
                <li className="nav_elements">News Gallery</li>
              </Link>

              {/* <DownOutlined /> */}
            </Space>
          </a>
        </Dropdown>
        <Link
          to="/Careers"
          className={`a8 ${red_btn === 8 ? "red" : ""}`}
          onClick={() => {
            set_red_btn(8);
            toggleMenu();
          }}
        >
          <li className="nav_elements">Career</li>
        </Link>
      </ul>
    </motion.div>
  );
}
