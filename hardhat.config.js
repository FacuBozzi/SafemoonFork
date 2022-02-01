require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

  const private_key = ["175ccc91b14c2fc4a557f34c445eb9e67aa92ed4fd20816ef4d502295e30bf82"]

 module.exports = {
   defaultNetwork: "rinkeby",
   networks: {
     hardhat: {
     },
     rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/vQ6Kgeup9_eWBZgcrETzsWDoEEjzwVKs",
      accounts: [`0x${private_key}`]
    },
   },
   solidity: {
     version: "0.8.4",
     settings: {
       optimizer: {
         enabled: true,
         runs: 200
       }
     }
   },
   paths: {
     sources: "./contracts",
     tests: "./test",
     cache: "./cache",
     artifacts: "./artifacts"
   },
   mocha: {
     timeout: 70000
   }
 }