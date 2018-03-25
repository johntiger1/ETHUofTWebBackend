pragma solidity ^0.4.19;

// Proof of Existence contract, version 3
contract DataX {
  
  address owner;
  uint public dataValue = 20;
  mapping (bytes32 => bool) private proofs;
  mapping(address => uint) private balances;

  function () payable {

  }

  function DataX () {
    owner = msg.sender;
  }

  // store a proof of existence in the contract state
  function storeProof(bytes32 proof) {
    proofs[proof] = true;
  }

  // calculate and store the proof for a document
  function notarizeValue(string document, address sender) {
    var proof = proofFor(document);
    storeProof(proof);
    sender.transfer(dataValue);
  }

  function notarizeValue(string document) {
    var proof = proofFor(document);
    storeProof(proof);
  }
  
  // helper function to get a document's sha256
  function proofFor(string document) constant returns (bytes32) {
    return sha256(document);
  }
  
  // check if a document has been notarized
  function checkDocument(string document) constant returns (bool) {
    var proof = proofFor(document);
    return hasProof(proof);
  }
  
  // returns true if proof is stored
  function hasProof(bytes32 proof) constant returns(bool) {
    return proofs[proof];
  }

}