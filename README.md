# Deployment steps:
## Step 1: Core:
- UniswapV2Factory.sol
- Token1.sol
- Token2.sol
## Step 2: Periphery:
- WETH.sol
- UniswapV2Router02.sol

## Step 3: Migrator:
- BonusToken.sol
- LiquidityMigrator.sol

# Core:
Deploy and copy the contract address of UniswapV2Factory.sol. The example below has a contract address of UniswapV2Factory: 0xFbfF39A1364443473F659A5BCC217cd74b3f0A80.

```bash
$ cd core
$ truffle migrate --reset


Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


2_deploy_contracts.js
=====================

   Deploying 'UniswapV2Factory'
   ----------------------------
   > transaction hash:    0xb2c0c711fe7dec3e9dcca55e68b998c7e6508b78b4b0e4473c4e6a1b71105e53
   > Blocks: 0            Seconds: 0
   > contract address:    0xFbfF39A1364443473F659A5BCC217cd74b3f0A80
   > block number:        1
   > block timestamp:     1618893728
   > account:             0x08D196a7C2E209d97E2aE89Dbca45930CFe68793
   > balance:             99.91724596
   > gas used:            4137702 (0x3f22e6)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.08275404 ETH


   Deploying 'Token1'
   ------------------
   > transaction hash:    0xe4b361183fd74dda2957eb969d2def8fe4f056c70c8e70e62ab8644a03a54663
   > Blocks: 0            Seconds: 0
   > contract address:    0x77E4F0d1253aC1291F8ead7Eb23d76cF73FdCaA7
   > block number:        2
   > block timestamp:     1618893729
   > account:             0x08D196a7C2E209d97E2aE89Dbca45930CFe68793
   > balance:             99.89433576
   > gas used:            1145510 (0x117aa6)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0229102 ETH


   Deploying 'Token2'
   ------------------
   > transaction hash:    0x2569fefd385fb38054a48ca2e33af5c4f4bd3818b702d2ee76328101df5e4553
   > Blocks: 0            Seconds: 0
   > contract address:    0x7B9201C709950b15788621f4aDc62e8A0017278e
   > block number:        3
   > block timestamp:     1618893730
   > account:             0x08D196a7C2E209d97E2aE89Dbca45930CFe68793
   > balance:             99.87142556
   > gas used:            1145510 (0x117aa6)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0229102 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.12857444 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.12857444 ETH

```

If you to deploy to BSC Testnet:
```
$ truffle migrate --reset --network bsctestnet
```
# Periphery:

```bash
$ cd periphery
$ truffle migrate --reset

Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


2_deploy_contracts.js
=====================

   Replacing 'WETH'
   ----------------
   > transaction hash:    0x0943625330ddbde4da2ab7ebf8a4bfe4bb6f0e29b3de98d0802e985c6efd1448
   > Blocks: 0            Seconds: 0
   > contract address:    0xa6Ef735460f5D9F09381AbdD5E4b2A7f4A44d090
   > block number:        5
   > block timestamp:     1618893946
   > account:             0x08D196a7C2E209d97E2aE89Dbca45930CFe68793
   > balance:             99.78992646
   > gas used:            826118 (0xc9b06)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01652236 ETH


   Replacing 'UniswapV2Router02'
   -----------------------------
   > transaction hash:    0xaf5cea95231c7c43043a85460cb8e07662c9dbf208a9c227183512a76b66e4a8
   > Blocks: 0            Seconds: 0
   > contract address:    0x5CFF2D0Ff865F682E2B5EC32c1DbAe5D13A2681d
   > block number:        6
   > block timestamp:     1618893947
   > account:             0x08D196a7C2E209d97E2aE89Dbca45930CFe68793
   > balance:             99.6957772
   > gas used:            4707463 (0x47d487)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.09414926 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.11067162 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.11067162 ETH

```