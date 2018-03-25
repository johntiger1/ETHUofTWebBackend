var DataX = artifacts.require('./DataX.sol')

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(DataX);
};
