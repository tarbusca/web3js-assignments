const Web3 = require('web3');
const rpcURL = 'https://ropsten.infura.io/v3/16c1a9ae02fc4856b28f116d862acc69';
const web3 = new Web3(rpcURL);
const address = '0x956927273De0C7908dbD850aAaa35f7D36264A91';

const contractMethodAsync = async() => {
  try {
    
    let balance = await web3.eth.getBalance(address);
      console.log("The balance of account in wei: "+ balance);
      balance = web3.utils.fromWei(balance, 'ether');
      console.log("The balance of account in Ethers: ",balance);
    
  }
  catch(error){
    console.log(error);
  } 
}
contractMethodAsync()