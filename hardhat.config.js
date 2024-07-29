require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["412e1c2b8ca047229b0ec66deb7bfef900ae2abacc991807221f568e79768996"], //Your private key starting with "0x"
    },
  },
};
