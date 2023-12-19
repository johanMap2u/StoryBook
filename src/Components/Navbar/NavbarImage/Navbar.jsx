import React, { useState } from "react";
import PropTypes from "prop-types";
import "../NavbarImage/Navbar.css";
import { Dialog, DialogBody, Menu, MenuItem } from "@blueprintjs/core";
import { Avatar } from "primereact/avatar";

const Navbar = ({
  Dark = true,
  TitleNavbar,
  ListNav = [],
  ImageLogo = { active: false, src: "" },
  Profile = { active: false, name: "", avatar: "" },
}) => {
  const DarkMode = Dark ? "bp5-dark" : "bp5-light";
  const DarkText = Dark ? "bp5-text-white" : "bp5-text-black";
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    const menu = document.getElementById("menu-right");
    // toggle menu
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  };

  // close menu when click outside
  window.onclick = function (event) {
    const button_profile = document.getElementById("button-profile");
    const avatar_profile = document.getElementById("avatar-profile");
    const text_profile = document.getElementById("text-profile");
    const menu = document.getElementById("menu-right");
    if (
      event.target !== button_profile &&
      event.target !== avatar_profile &&
      event.target !== text_profile
    ) {
      menu.style.display = "none";
    }
  };

  return (
    <nav className={["bp5-navbar", DarkMode].join(" ")}>
      <div style={{ margin: "0 auto" }}>
        <div className="bp5-navbar-group bp5-align-left">
          {ImageLogo.active && (
            <img
              src={ImageLogo.src}
              alt="logo"
              style={{ height: "30px", marginRight: "10px" }}
            />
          )}
          <div className="bp5-navbar-heading">{TitleNavbar}</div>
        </div>
        <div className="bp5-navbar-group bp5-align-right desktop">
          {ListNav.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={[
                "bp5-button bp5-minimal",
                `bp5-icon-${item.icon}`,
              ].join(" ")}
            >
              {item.title}
            </a>
          ))}
          {Profile.active && (
            <div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => showMenu()}
                id="button-profile"
              >
                <span
                  style={{
                    marginRight: "10px",
                    fontSize: "14px",
                    color: "#ffffff",
                  }}
                  id="text-profile"
                >
                  ADMIN
                </span>
                <Avatar
                  label="U"
                  style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
                  shape="circle"
                  id="avatar-profile"
                />
              </div>
              <Menu
                className={DarkMode}
                style={{
                  marginTop: "40px",
                  display: "none",
                  position: "absolute",
                  right: "20px",
                  top: "5px",
                  zIndex: "999",
                }}
                id="menu-right"
              >
                <MenuItem
                  icon="user"
                  text="Profile"
                  onClick={() => {
                    // menuRight.current.toggle();
                  }}
                />
                <MenuItem
                  icon="log-out"
                  text="Logout"
                  onClick={() => {
                    // menuRight.current.toggle();
                  }}
                />
              </Menu>
            </div>
          )}
        </div>
        <div className="bp5-navbar-group bp5-align-right mobile">
          <button
            class="bp5-button bp5-minimal bp5-icon-menu"
            onClick={() => setIsOpen(!isOpen)}
          ></button>
        </div>
      </div>
      <Dialog
        isOpen={isOpen}
        className={DarkMode}
        canOutsideClickClose={true}
        onClose={() => setIsOpen(false)}
        style={{
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <DialogBody>
          <div
            className="mobile"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <ul>
              {ListNav.map((item, index) => (
                <li className="list-dialog">
                  <a key={index} href={item.link} className={DarkText}>
                    <span class={`bp5-icon-${item.icon}`}></span>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </DialogBody>
      </Dialog>
    </nav>
  );
};

Navbar.propTypes = {
  Dark: PropTypes.bool,
  TitleNavbar: PropTypes.string,
  ListNav: PropTypes.array,
  ImageLogo: PropTypes.object,
  Profile: PropTypes.object,
};

export default Navbar;
