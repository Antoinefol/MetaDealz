import "./App.css";
import { WalletButton, Account } from "./components";
import { useEthers } from "@usedapp/core";

function App() {
  const { account } = useEthers();
  return (
    <>
      <div>hello</div>
      <WalletButton />
      {account && <Account address={account} />}
    </>
  );
}

export default App;
