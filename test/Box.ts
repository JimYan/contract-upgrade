import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
// import upgrades from "@openzeppelin/hardhat-upgrades";
import { expect } from "chai";
// import { ethers, upgrades } from "hardhat";
const { ethers, upgrades } = require("hardhat");

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Box = await ethers.getContractFactory("Box");
    // const box = await Box.deploy();
    const box = await upgrades.deployProxy(Box, [42], { initializer: "store" });

    return { box, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { box } = await loadFixture(deployOneYearLockFixture);
      //   await box.store(1);
      expect(await box.retrieve()).to.equal(42);
    });

    // it("Should set the right owner", async function () {
    //   const { lock, owner } = await loadFixture(deployOneYearLockFixture);

    //   expect(await lock.owner()).to.equal(owner.address);
    // });
  });
});
