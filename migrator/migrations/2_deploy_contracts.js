const BonusToken = artifacts.require('BonusToken.sol')
const LiquidityMigrator = artifacts.require('LiquidityMigrator.sol')

module.exports = async function (deployer) {
  await deployer.deploy(BonusToken)
  const bonusToken = await BonusToken.deployed();

  const routerAddress = '0x2Bfb7c8AE02C3e6D062AfF6772F2EC88B93fCa84'
  const pairAddress = ''
  const routerForkAdress = ''
  const pairForkAddress = ''

  await deployer.deploy(
    LiquidityMigrator,
    routerAddress,
    pairAddress,
    routerForkAdress,
    pairForkAddress,
    bonusToken.address
  )

  const liquidityMigrator = await LiquidityMigrator.deployed();
  await bonusToken.setLiquidator(liquidityMigrator.address);
}
