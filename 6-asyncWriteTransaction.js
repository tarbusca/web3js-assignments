var Tx = require('ethereumjs-tx');
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/16c1a9ae02fc4856b28f116d862acc69')

const contractAddress = "0x2fE9122B73D2749516b0694AF710B81B8B03d54b";
//web3learn.sol contract on ropsten
const abi = [
	{
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_owner",
				"type": "string"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const account1 = '0x956927273De0C7908dbD850aAaa35f7D36264A91' 
const privateKey1 = '72ebeb938c70280fe25ac5e1535aebb21c70c047abd9f9d291025c5113afec1c';

const privateKey1Buffer = Buffer.from(privateKey1,"hex");

const contractDeployAsync = async() => {
    try{
        let txCount = await web3.eth.getTransactionCount(account1);
        const contract = new web3.eth.Contract(abi, contractAddress);

        const txObject = {
            to:       contractAddress,
            nonce:    web3.utils.toHex(txCount),
            gasLimit: web3.utils.toHex(5000000), // Raise the gas limit to a much higher amount
            gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
            data: contract.methods.setOwner("Tariq Saeed").encodeABI()
          }
          
        const tx = new Tx.Transaction(txObject, { chain: "ropsten", hardfork : "petersburg" });
        tx.sign(privateKey1Buffer);
        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');
        let signedTransaction= await web3.eth.sendSignedTransaction(raw);
        
        console.log("Signed Transaction:",signedTransaction);
   

    } catch(error) {
        console.log("Errors :" , error);
    }
} 
contractDeployAsync()