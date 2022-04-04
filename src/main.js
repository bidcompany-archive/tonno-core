const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('be23ca42cd10c4167c866316c7870407279f64d714b3c9ad1db0e61d2f37f3dc');
const myWalletAddress = myKey.getPublic('hex');
let tonnoCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
tonnoCoin.addTransaction(tx1);

console.log('Starting miner...');
tonnoCoin.minePendingTransactions(myWalletAddress);
console.log();

console.log('Balances: ');
console.log(myWalletAddress.substring(0, 10) + '...: ' + tonnoCoin.getBalanceOfAddress(myWalletAddress));
console.log();

console.log('Is chain valid? ' + tonnoCoin.isChainValid());