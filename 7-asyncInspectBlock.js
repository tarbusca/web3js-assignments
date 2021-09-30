const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/16c1a9ae02fc4856b28f116d862acc69');


const contractMethodAsync = async() =>  {

try {
// get latest block number
const latest = await web3.eth.getBlockNumber(); //.
console.log(latest);
//get the latest block 
//const block = await web3.eth.getBlock("latest");
//console.log(block);

    for (let i = 0; i < 10; i++) {
        const block = await web3.eth.getBlock(latest -i);
        console.log(block);
    }
} 
catch(error){
    console.log(error);
}
}
contractMethodAsync()