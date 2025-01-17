const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ADDRESS = '0x5770146155afB39E7751c69eB0018AD6FC0e1B22';
//const ADDRESS = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

module.exports = buildModule("ASCoinModule", (m) => {
  const storage = m.contract("ASCoin", [ADDRESS]);

  return { storage };
});