import React, { useEffect, useState } from "react";

const Account = ({ address }) => {
  const [nfts, setNfts] = useState([]);

  /* Code For Mainnet
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
    <div>
      {nfts.map((nft) => (
        <div key={nft.id}>
          <img src={nft.image_thumbnail_url} alt={nft.name} />
          <p>{nft.name}</p>
        </div>
      ))}
    </div>
  );*/
};

export default Account;
