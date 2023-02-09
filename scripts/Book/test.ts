import { ethers } from "hardhat";

async function main() {
  const address = "0x95C924D09E6aa2FCc5bD1f5C8cc0E810234DEf9E";
  const Boxv2 = await ethers.getContractFactory("BookV2");
  const boxv2 = await Boxv2.attach(address);
  //   console.log("x");

  boxv2.redus(5);
  //   await boxv2.increment();
  console.log((await boxv2.retrieve()).toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
