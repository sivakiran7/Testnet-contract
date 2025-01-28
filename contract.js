
const ethers = require("ethers");
const fs = require("fs-extra"); 
require("dotenv").config();

//http://127.0.0.1:7545

async function main() {

  const provider = new ethers.JsonRpcProvider(process.env.RPCL_URL); // * making an connection in local enivornment using an Rpc link using ganache
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider)  //? it is used for connection to a wallet in an block chainprovider
  ;
  const abi =fs.readFileSync("./ether_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync("./ether_sol_SimpleStorage.bin","utf8");

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);  // ! creating an contract with an wallet using an ganache
  console.log("Deploying. please wait");
  const contract = await contractFactory.deploy();
  console.log(contract);

//   // creating an encryped key 
//  // let wallet = new ethers.Wallet.fromEncryptedJsonSync(
//     encrypted_private_key.Json,
//     process.env.PRIVATE_KEY_PASSWORD  // * password to decrypt the wallet
//   );



 
}

main()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    })