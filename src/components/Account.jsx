import React, { useEffect, useState } from "react";
import "./components.css";

const Account = ({ address }) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const response = await fetch(
        `https://api.opensea.io/api/v1/assets?owner=${address}`
      );
      const data = await response.json();
      setNfts(data.assets);
    };
    fetchNFTs();
  }, [address]);

  return (
    <>
      <div className="nft-wrap">
        {nfts.map((nft) => (
          <div className="nft-card" key={nft.id}>
            <p className="nft-name">{nft.name}</p>
            <img
              className="nft-image"
              src={nft.image_thumbnail_url}
              alt={nft.name}
            />
            <button className="nft-button">SELL</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Account;
