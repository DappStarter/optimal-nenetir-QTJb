require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth ridge punch grace person frame gauge'; 
let testAccounts = [
"0x26459dff07b763f9d17156137a105a12abffad8155ccef9684645c7047f8741b",
"0x37bf71b72b71ffed2c2bc6b1fdc94f38b7736d6505249be04ea50e1e81ddf93f",
"0x6fb5d9fd2438bd3e311255a3e971436238c32be73263e98068eabf8154554f2f",
"0xee04361689a75d835e4a5bbda4471ab6b1b1fa142031576f49d644c85f269556",
"0x0e318f249788cfb7a035c8eb69c322eee56d64037451d675b6d60f709f4e244b",
"0x3d47320fa6d329c44bad5d2cefd1531c98c03318f09d6ce97a422ed773f727f2",
"0x9669892b4f8f5487b773710136a43a6343ecebb7314970b0dca49ed631ca34d8",
"0xa8655dcfd7c0e194aba34338751de62617e852cf7b7e90b049e7b96b091cf2ee",
"0xa1fec3905ffe2af860cd620ee09db26bc5712ab3807a32921aa2d9ae8c076410",
"0xbdc4f3baca78a25f9fd39d19d1467ce39051b0ed29bcd2bd857e54103fba56ba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

