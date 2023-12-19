import {
  Button,
  Navbar,
  NavbarGroup,
  Alignment,
  Classes,
} from "@blueprintjs/core";
import React from "react";
import "./NavbarBlueprint.css";
import beer from "../../assets/beer.png";
const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f5f5f5",
};

export const NavbarBlueprint = ({ Dark = true }) => {
  const DarkMode = Dark ? "bp5-dark" : "bp5-light";
  return (
    <nav
      className={["bp5-navbar", DarkMode].join(" ")}
      //   className={["bp5-navbar","bp5-dark"].join(" ")}
      style={{
        // display: "block",
        borderRadius: "5px",
        // alignSelf:'center'
        // margin: "0 auto"
        // alignItems: "right",
        // backgroundColor: "red",
        // padding: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          src={beer}
          alt="logo"
          style={{
            height: "30px",
            marginRight: "5px",
          }}
        />
        <div class="bp5-navbar-group bp5-align-left">
          <div class="bp5-navbar-heading">{"TitleNavbar"}</div>
          {/* <input  class="bp5-input" placeholder="Search files..." type="text" /> */}
        </div>
        <div //desktop id
          className="hide-on-mobile"
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignContent: "center",
              justifyContent: "end", //change position
              alignItems: "center",
              marginLeft: "5px",
              //   backgroundColor:'red'
            }}
            
          >
            <Button style={{ marginRight: "2px" }} icon="home" text="Home" />
            <Button style={{ marginRight: "2px" }} icon="home" text="Home" />

            <span class="bp5-navbar-divider"></span>
            <Button
              style={{ marginRight: "2px" }}
              className={"bp5-button bp5-minimal bp5-icon-user"}
            />
            <Button
              style={{ marginRight: "2px" }}
              className={"bp5-button bp5-minimal bp5-icon-cog"}
            />
            <Button
              style={{ marginLeft: "10px" }}
              className={Classes.MINIMAL}
              icon="document"
              text="Logout"
            />
          </div>
        </div>
        <div className="bp5-navbar-group bp5-align-right burger-icon">
          <Button className={"bp5-button bp5-minimal bp5-icon-menu"} />
        </div>
      </div>
    </nav>
  );
};
