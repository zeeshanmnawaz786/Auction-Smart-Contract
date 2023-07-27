const { ethers } = require("hardhat");

describe("Auction Smart Contract", function () {
  let auction, owner, a1, a2, a3, a4, a5, a6;

  before(async function () {
    [owner, a1, a2, a3, a4, a5, a6] = await ethers.getSigners();

    const Auction = await ethers.getContractFactory("Auction");
    auction = await Auction.deploy();
    await auction.waitForDeployment();
    console.log("Auction address: ", await auction.getAddress());
  });

  it("Register", async function () {
    await auction.connect(owner).productRegister("Handfree");
    await auction.connect(a1).userRegister("Zeeshan");
    console.log("Register Product:", await auction.connect(a1).products(0));
    console.log("Register User:", await auction.connect(a1).users(0));
  });

  it("Start Auction", async function () {
    await auction.connect(owner).startAuction(0, 200, 1234567);
    console.log("Register Product:", await auction.connect(a1).products(0));
  });

  it("Bid", async function () {
    await auction.connect(a1).bid(0, 0, 200);
    console.log("Register Product:", await auction.connect(a1).products(0));
  });
});
