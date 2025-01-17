# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

# Commands

## 

npx hardhat

## Compile contract

npx hardhat compile

## Run tests

npx hardhat test

## Deploy smart contract

npx hardhat ignition deploy ./ignition/modules/Lock.js

### Choose network 

--network

#### Network options

localhost
optimismSepolia

## Verify smart contract

npx hardhat ignition deploy ignition/modules/Lock.js --network sepolia --verify

## See local environment
npx hardhat node
# hardhat-tutorial