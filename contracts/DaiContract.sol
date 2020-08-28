pragma solidity ^0.5.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DaiContract {
    IERC20 dai;
    constructor(address daiAddress) public {
        dai = IERC20(daiAddress);
    }

    function foo(address _recipient, uint _amount) public {
        dai.transfer(_recipient, _amount);
    }
}