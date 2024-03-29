const { ethers } = require("hardhat");

async function main() {
  const MyNFT = await ethers.getContractFactory("Sarit_NFT");
  const myNFT = await MyNFT.attach(
    "0xdf27e3a2219C7d24ddb379130C21E2E06e71Ec93"
  );

  // Generate an array of recipient addresses
  const recipient = "0xB029C7CAB1f6eDb937051b1DA87bFD5EF90f7378";

  // Generate an array of token URIs corresponding to the recipients
  const tokenURIs = [
    "ipfs://QmaxFWr7wMJh41QKDNBv9QZbjYG3nRbFZEkLCEaLshZvrt",
    "ipfs://QmR9HuBVnM99Ee9wTM15QeQ2K43GjhahaHbscavzrGE7WV",
    "ipfs://QmXQmiCyhGzfxgzRK3xruonfQ4xkf4vtP5a593XgCzYQ1y",
    "ipfs://QmcxcVgMQWSA1EHZ6ULgJifXyyP9EgJifu72zzmnJ8eaFZ",
    "ipfs://QmYytf2pBvdVtKezsGkzy9dCJkXLWDSHodqRyhMzQ7jxQc",
    // Add more token URIs as needed
  ];

  // Batch mint NFTs
  const batchMint = await myNFT.batchMint(recipient, tokenURIs);

  // Wait for the transaction to be mined
  await batchMint.wait();

  console.log("You have successfully minted NFTS");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
