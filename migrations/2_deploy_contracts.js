const Buffalos = artifacts.require('Buffalos.sol');
require('dotenv').config();
const { baseURI, artist, token } = process.env;

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Buffalos, "Buffalos", "Buff", baseURI, 100, 1637290616, artist, token, 1);
  const BuffaloContract = await Buffalos.deployed();
  console.log("Contract Address === ", BuffaloContract.address);

};
