var DataX = artifacts.require("./DataX");


module.exports = function(deployer) {
  // Use deployer to state migration tasks.
    deployer.deploy(DataX);
};
