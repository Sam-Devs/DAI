const { default: Web3 } = require( "web3" );

const web3 = new Web3("http://localhost:7545");
const accounts = web3.eth.getAccounts();
const dai = new web3.eth.Contract(abi, address);
