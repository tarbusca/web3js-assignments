# Web3.js Scripts for interacting with Ethereum
### by Tariq Saeed

The document is based on Dapp University Article https://www.dappuniversity.com/articles/web3-js-intro
with some changes in packages. 
The scripts implement async / await functionality instead of callback functions. This makes code more readable.

The following are details of scripts.

1. Check Balance of any wallet address.  The script returns the balance in wei and ether.
2. Call Transactions (Read) on smart contract.  This scripts uses a contract address on testnet and its ABI to make read call transaction. This doesn't consume any gas.
3. Value Transaction.  This scripts creates a transaction object, signs with private key of sender and submit it to Ethereum. It transfers eth from one account to antoher account.
4. Deploy Contract.  We have many ways to deploy a contract, like Remix, Hardhat, Truffle, Brownie etc. This mehtod used web3.js to deploy a contract.
5. Read Contract.  This script calls smart contract functions that are View or Pure and do not consume gas.
6. Event Handling.  This script gets the transaction log, it reads upto certain or from genesis block since the contract has recorded an event. It could read all contracts or specific ones.
7. Inspect Block. This script reads different block objects, and extract information that you need. You can read block number, block objects and items included in a block.
8. Utilities. This script uses some common web3.js utilities like encryption , conversion from wei to eth or reverse.
