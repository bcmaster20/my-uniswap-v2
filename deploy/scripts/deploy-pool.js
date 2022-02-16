const Factory = artifacts.require('UniswapV2Factory');
const Router = artifacts.require('UniswapV2Router02');
const Pair = artifacts.require('UniswapV2Pair');
const Token1 = artifacts.require('Token1');
const Token2 = artifacts.require('Token2');
module.exports = async function (deployer, network) {
    const factoryAddress = '0x0fd48d06acc75646CB9122E20Ef7BC6791FF301C';
    const token1Address = '0x4B6d670782d143353196e8Cb5d8A2C0FAB45EFd6';
    const token2Address = '0xc4D6a1875174F1b752a20e1088448A7685BEe45E';
    const routerAddress = '0xFb67744C8D9885B296D8DAD629f5f2c485f2A2c8';
    try {
        const [admin, _] = await web3.eth.getAccounts();
        const factory = await Factory.at(factoryAddress);
        console.log("%c 👻: factory ", factory.address);
        const router = await Router.at(routerAddress);
        console.log("%c 👓: router ", router.address);
        const token1 = await Token1.at(token1Address);
        const token2 = await Token2.at(token2Address);

        console.log("%c 📵: token1.address ", token1.address)
        console.log("%c ⛹️‍♂️: token2.address ", token2.address)

        const pairAddress = await factory.getPair.call(token1.address, token2.address);
        console.log("%c 🌤️: pairAddress ", pairAddress);

        // const token1Amount = web3.utils.toHex(1*10**18);
        // const token2Amount  = web3.utils.toHex(15*10**18);
        const token1Amount = await web3.utils.toWei('10', 'ether');
        const token2Amount = await web3.utils.toWei('20', 'ether');
        await token1.approve(router.address, token1Amount);
        await token2.approve(router.address, token2Amount);
        await router.addLiquidity(
            token1.address,
            token2.address,
            token1Amount,
            token2Amount,
            token1Amount,
            token2Amount,
            admin,
            Math.floor(Date.now() / 1000) + 60 * 10
        );
        const pair = await Pair.at(pairAddress);
        const balance = await pair.balanceOf(admin);
        console.log(`balance LP: ${balance.toString()}`);
    } catch (e) {
        console.log(e);
    }
};
