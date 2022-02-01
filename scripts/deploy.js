// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const EVET = await hre.ethers.getContractFactory("EVET");
  // const evet = await EVET.deploy("0x8D96037b23f011F95b4dD288240B6bEb6316f2C3");

  // await evet.deployed();

  //evetV2
  // const EVET = await hre.ethers.getContractFactory("EveToken");
  // const evet = await EVET.deploy();

  // await evet.deployed();

  // console.log("EveToken deployed to:", evet.address);

  //safetoken
  const EVET = await hre.ethers.getContractFactory("EveTokenized");
  const evet = await EVET.deploy();

  await evet.deployed();

  console.log("Safetoken deployed to:", evet.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
