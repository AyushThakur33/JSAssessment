/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT_Token = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, shirtType, eyecolor, bling) {
  const NFT = {
   "name": name,
   "shirtType":shirtType,
   "eyecolor": eyecolor,
   "bling": bling
  }
  NFT_Token.push(NFT);
  console.log("Minted: "+ name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i=0; i<NFT_Token.length; i++){
   console.log("\nName: " + NFT_Token[i].name);
   console.log("shirtType: " + NFT_Token[i].shirtType);
   console.log ("eyecolor: " +NFT_Token[i].eyecolor);
   console.log("bling: " + NFT_Token[i].bling);
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\n" + NFT_Token.length);
}

// call your functions below this line
mintNFT("Charlie", "T-shirt", "Brown", "Gold Chain" );
mintNFT("John", "Shirt", "Black", "Silver Chain" );
mintNFT("Travis", "Hoodie", "Blue", "Gold Chain" );
mintNFT("Krin", "T-shirt", "Green", "Diamond Chain" );
listNFTs();
getTotalSupply();
