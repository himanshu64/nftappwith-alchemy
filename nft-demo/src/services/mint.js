import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { ethers } from 'ethers'
import { pinJSONToIPFS } from "./pinata.js";


const alchemyKey = process.env.REACT_APP_ALCHEMY_RINKEBY_ENDPOINT;
const contractABI  = require("../contract-abi.json");
const contractAddress = "0x4203E39Dc6e12d9224681A0275B8bC61F00f7014";

const web3 = createAlchemyWeb3(alchemyKey);


async function loadContract() {
    return new web3.eth.Contract(contractABI.abi, contractAddress);
  }
  
  export const mintNFT = async (url, name, description) => {
    if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
      return {
        success: false,
        status: "❗Please make sure all fields are completed before minting.",
      };
    }
  
    //make metadata
    const metadata = new Object();
    metadata.name = name;
    metadata.image = url;
    metadata.description = description;
  
    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
      return {
        success: false,
        status: "😢 Something went wrong while uploading your tokenURI.",
      };
    }
    const tokenURI = pinataResponse.pinataUrl;
  
    window.contract = await new web3.eth.Contract(contractABI.abi, contractAddress);
  
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .mintNFT(window.ethereum.selectedAddress, tokenURI)
        .encodeABI(),
    };
  
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      
      return {
        success: true,
        status:
          "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
          txHash,
      };
    } catch (error) {
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }
  };