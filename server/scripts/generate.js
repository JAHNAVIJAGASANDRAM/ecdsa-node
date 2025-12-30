
const crypto = require("crypto");
const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = crypto.randomBytes(32);
console.log("Private Key:", toHex(privateKey));
const publicKey = secp.secp256k1.getPublicKey(privateKey,false);
console.log("Public Key:", toHex(publicKey));

