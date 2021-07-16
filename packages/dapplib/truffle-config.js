require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note soccer purity hunt credit equal genre'; 
let testAccounts = [
"0x9b13ff8b8352c89d1c7005dd5da143967234c8e57e594efb923a5312ef3dae07",
"0x66a39bc731337e07a5ea1708a18e0e59e779cc76f145e6253d0ef31323dff3a4",
"0xe09d507941ad0316dde60a77261cf2ccaed445273f96a51bb1967dc118dbe335",
"0x6fb7b88b5ebb1adba6a9c71f1e88ce748c9d19ee22db7ecab6431feca5e90bf1",
"0x66fd56648d1c77b9bc5d98ab42d30d555c774472a29f9738cbb396376918b9ce",
"0x1a5efe2000e037e0622cf303eaa9529f4fffacc42cfcd950fedf7f1d6e263049",
"0xa441793a4219a8695bafbbeb308b5c1f7d4a35bdceca53ec5b21e7a2017b8890",
"0x4a22f92f424321953caad3c0710029d011f7b72c94dee5f42312df7ba1fa8523",
"0x4828d56f1c40a3959cb096b1cbd872b29f612100269afd6d1ddf08f61d81c807",
"0x9a14388f1ab8591fc807853e44ae10bff3a15e267e78f7d0aa64fca00b9f6447"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

