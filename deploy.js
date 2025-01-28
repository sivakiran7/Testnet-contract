// * setting an deploying application using javascript
/*
? now we are going to use an Asynchronous programming function 
it is used to allow programs to run multiple tasks simultaneously 
instead of waiting dor one tsak to finish
*/
// ?synchronous [solidity] // !asynchronous [javascript]
// ! java script by default is an asynchronous


const { ContractFactory } = require("ethers");
const ethers = require("ethers");
const fs = require("fs-extra");

//http://127.0.0.1:7545

async function main() {

  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545"); // * making an connection in local enivornment using an Rpc link using ganache
  const wallet = new ethers.Wallet("0x1338109aeda84ff92440187457dbf605c61c10f342b2b18d98dfc54940c55509",  //? it is used for connection to a wallet in an block chain
    provider
  );
  const abi =fs.readFileSync("./Simplestorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin","utf8");

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying. please wait");
  const contract = await contractFactory.deploy();
  console.log(contract);
}


//-----------------------------------------------------------


  




























