require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork:"localhost",
  networks:{
    localhost:{
      url:"http://127.0.0.1:8545/"
    },
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/Hf4lYAuPOw2agbHN7PqZPLCjPX6FHTvx`,
      accounts:[process.env.PRIVATE_KEY]
    }
   
  }
};