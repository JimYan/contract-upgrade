const { ethers, upgrades } = require("hardhat");

const UPGRADEABLE_PROXY = "0x95C924D09E6aa2FCc5bD1f5C8cc0E810234DEf9E";

async function main() {
  const gas = await ethers.provider.getGasPrice();
  const V2Contract = await ethers.getContractFactory("BookV2");
  console.log("Upgrading V1Contract...");
  let upgrade = await upgrades.upgradeProxy(UPGRADEABLE_PROXY, V2Contract, {
    gasPrice: gas,
  });
  console.log("V1 Upgraded to V2");
  console.log("V2 Contract Deployed To:", upgrade.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
