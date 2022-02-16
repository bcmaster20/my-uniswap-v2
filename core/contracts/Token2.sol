pragma solidity =0.5.16;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token2 is ERC20Detailed, ERC20 {
    constructor() public ERC20Detailed("Token 2", "TK2", 18) {
        uint256 cap = 1000000;
        uint256 totalSupply = cap.mul(10**18);
        _mint(msg.sender, totalSupply);
    }
}
