# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

部署一个可升级的智能合约方法，参考资料：
https://www.quicknode.com/guides/smart-contract-development/how-to-create-and-deploy-an-upgradeable-smart-contract-using-openzeppelin-and-hardhat

## 部署 V1 版本

```bash
$npx hardhat run --network Mumbai scripts/Book/deploV1.ts
```

## 验证 V1 版本

```bash
$npx hardhat verify --contract "contracts/BookV1:BookV1" 0x95C924D09E6aa2FCc5bD1f5C8cc0E810234DEf9E --network Mumbai
```

## 升级 V2 版本

```bash
$npx hardhat run --network Mumbai scripts/Book/upgradeV2.ts
```

## 验证 V2 版本

```bash
$npx hardhat verify --contract "contracts/BookV2.sol:BookV2" 0x95C924D09E6aa2FCc5bD1f5C8cc0E810234DEf9E --network Mumbai
```

## 测试脚本

```bash
$npx hardhat run --network Mumbai scripts/Book/test.ts
```
