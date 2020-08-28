const Dai = artifacts.require("Dai");
const DaiContract = artifacts.require("DaiContract");

module.exports = async function(deployer, _network, accounts) {
  await deployer.deploy(Dai);
  const dai = await Dai.deployed();
  await deployer.deploy(DaiContract, dai.address);
  const daiContract = await DaiContract.deployed();
  await dai.faucet(DaiContract.address, 100);
  await daiContract.foo(accounts[1], 100);

  const balanceOne = await dai.balanceOf(daiContract.address)
  const balanceTwo = await dai.balanceOf(accounts[1])

  console.log(balanceOne.toString());
  console.log(balanceTwo.toString());
};
