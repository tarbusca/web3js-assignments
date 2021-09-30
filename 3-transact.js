const Web3 = require('web3');
require("dotenv").config();
const Tx = require('ethereumjs-tx').Transaction;
const rpcURL = 'https://ropsten.infura.io/v3/16c1a9ae02fc4856b28f116d862acc69'; //rinkeby// Your RPC URL goes here
const web3 = new Web3(rpcURL);
const account1 = "0x956927273De0C7908dbD850aAaa35f7D36264A91";  // Deployment account on rospten
const account2 = "0xC0cd84a7060fA76dfcb7BeB7d0432F1b3606F0b2";



const account1PK = Buffer.from(process.env.PRIVATE_KEY, 'hex');

const contractMethodAsync = async() => {
    try {
        const txCount = await web3.eth.getTransactionCount (account1)
        const txObject = {
                nonce:     web3.utils.toHex(txCount),
                to:         account2, 
                value:      web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
                gasLimit:   web3.utils.toHex(21000),
                gasPrice:   web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
            } 
        
        const tx = new Tx(txObject, { chain: 'ropsten'}); 
        
        //new Tx(txObject, {'chain':'ropsten', hardfork : 'petersburg' });
        tx.sign(account1PK);
        
        const serialize = tx.serialize();
        const txHex = '0x' + serialize.toString('hex')
       
        const txHash = await web3.eth.sendSignedTransaction(txHex);
        console.log('Transaction was successful : ', txHash);

    }
    catch(error){
        console.log(error);
    }
}
contractMethodAsync()