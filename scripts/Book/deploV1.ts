// import { ethers, } from "hardhat";
const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("BookV1");
  console.log("Deploying BookV1...");
  const box = await upgrades.deployProxy(Box, [3], { initializer: "store" });

  await box.deployed();
  console.log("Box deployed to:", box.address);

  //   console.log(
  //     `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${box.address}`
  //   );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
