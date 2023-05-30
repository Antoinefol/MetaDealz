import React from "react";
import "./components.css";
import WalletButton from "./WalletButton";
import { logo2 } from "../assets";
import "./components.css";

const Header = (props) => {
  return (
    <div className="header">
      {" "}
      <div className="menu">
        <img src={logo2} className="logo" alt="logo"></img>
        <div className="button-wrap">
          <button
            className="menu-button"
            title="SHOP"
            onClick={props.toggleShowShop}
          >
            SHOP
          </button>
          <button
            className="menu-button"
            title="ACCOUNT"
            onClick={props.toggleShowAccount}
          >
            ACCOUNT
          </button>
        </div>
      </div>
      <WalletButton />
    </div>
  );
};

export default Header;
