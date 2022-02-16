const Router = artifacts.require("UniswapV2Router02.sol")
const WETH = artifacts.require("WETH.sol")
const { config } = require('./migration-config');

module.exports = async function (deployer, network) {
  let weth;
  const FACTORY_ADDRESS = config[network].factoryAddress;

  if (network !== 'development' && network !== 'bsctestnet') {
    weth = await WETH.at(config[network].WETHAddress);
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
}
