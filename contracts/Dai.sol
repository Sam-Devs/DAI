pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract Dai is ERC20, ERC20Detailed {
    constructor() public ERC20Detailed("Dai Stablecoin", "DAI", 18) { 
    }

    function faucet (address _recipient, uint _amount) external {
        _mint(_recipient, _amount);
    }
}