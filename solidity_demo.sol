Sample code from solidity demo on the first day of the hackathon


pragma solidity ^0.4.21; //this should be the first line in every thing

//Contract is like a class
contract Hodor{
    string public greeting;
    
    
    event greetingChanged (string oldValue, string newValue);
    
    //construction only called once, when it is deployed to the blockchain
    function Hodor(string _greeting){
        greeting = _greeting;
        
    }
    
    function setGreeting(string _greeting)
    {
        greetingChanged(greeting, _greeting);
        greeting = _greeting;
    }
    
    
    
    
    
}
