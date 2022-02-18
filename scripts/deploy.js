const main = async () => {
<<<<<<< HEAD
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Asuka", "Shinji", "Rei"],       // Names
      ["https://i.imgur.com/oRJ5Xh1.jpg", // Images
      "https://i.imgur.com/0QDIdNO.jpg", 
      "https://i.imgur.com/L6ZKkuJ.jpg"],
      [150, 300, 200],                    // HP values
      [100, 50, 75],                       // Attack damage values
      "Ramiel", // Boss name
      "https://i.imgur.com/vAZnb5z.jpg", // Boss image
      10000, // Boss hp
      20 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

=======
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    // Call the function.
    let txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #1")
  
    txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #2")
>>>>>>> refs/remotes/origin/main
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();