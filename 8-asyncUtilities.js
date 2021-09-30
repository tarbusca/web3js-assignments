const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/16c1a9ae02fc4856b28f116d862acc69');

var _ = require('underscore-node');

const contractMethodAsync = async() =>  {
    try {
        const gasPrice = await web3.eth.getGasPrice();
        console.log("Gas Price in Ethers : ", web3.utils.fromWei(gasPrice, "ether"));
        console.log("Gas Price in Wei :", gasPrice);

        console.log("Encrypt using Sha3 :", web3.utils.sha3('Tariq Saeed'));
        console.log("Encrypt using Keccak :", web3.utils.keccak256('Tariq Saeed'));
        //32 byte random number
        console.log("Generate Random Number : ", web3.utils.randomHex(32));

        //using javascript underscore library
        //const _ = web3.utils._;
        _.each({key1: 'value1', key2 : 'value2', key3: 'value3'}, (value, key) =>{
            console.log(key,": ", value);
        })
    }
    catch(error) {
        console.log(error);
    }

}
contractMethodAsync()