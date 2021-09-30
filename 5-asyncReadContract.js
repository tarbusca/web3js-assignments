const Web3 = require('web3');
var Tx = require('ethereumjs-tx');
const web3 = new Web3('https://ropsten.infura.io/v3/16c1a9ae02fc4856b28f116d862acc69');

const contractAddress = "0x56eaCe68E5a9890Fe30Ae53557567f90Fd533713";
//string compare contract on ropsten (verified)

const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "a",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "b",
				"type": "string"
			}
		],
		"name": "comPare",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "a",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "b",
				"type": "string"
			}
		],
		"name": "conCat",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]

const contractMethodAsync = async() => {
    try{
        const contract = new web3.eth.Contract(abi, contractAddress);
        let concat = await contract.methods.conCat("Tariq", "Saeed").call();
        console.log("Result of Concat : ", concat);
    }
    catch(error){
        console.log(error);
    }
}
contractMethodAsync()