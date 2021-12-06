# buffalo-nft-contract
deploy the contracts and copy json abi file to buffalo frontend
That would be all...

Create .env next to .env.example and insert necessary variables.

# compile contract

npx hardhat compile

# deploy 

npx hardhat run scripts/deploy.js --network {network name}

```or

truffle migrate --reset --network {network name}