const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log(
    "Account balance:",
    (await deployer.getBalance()).toString()
  );

  const FCTToken = await hre.ethers.getContractFactory("FCTToken");
  const fctToken = await FCTToken.deploy("FCTToken", "FCT");

  await fctToken.deployed();

  console.log("Token deployed to:", fctToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });