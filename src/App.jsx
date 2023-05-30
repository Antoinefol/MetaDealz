import React, { useState } from "react";
import "./App.css";
import { Header, Account, Shop } from "./components";
import { useEthers } from "@usedapp/core";

function App() {
  const { account } = useEthers();
  const [showShop, setShowShop] = useState(true);

  const toggleShowShop = () => {
    setShowShop(true);
  };

  const toggleShowAccount = () => {
    setShowShop(false);
  };

  return (
    <>
      <Header
        toggleShowShop={toggleShowShop}
        toggleShowAccount={toggleShowAccount}
      />
      {!showShop && account && <Account address={account} />}
      {showShop && <Shop />}
    </>
  );
}

export default App;
