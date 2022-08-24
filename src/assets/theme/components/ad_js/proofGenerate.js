const snarkjs = require('snarkjs');
const wc = require("./witness_calculator.js");


// const makeProof = async (_proofInput: any, _wasm: string, _zkey: string) => {
// 	const { proof, publicSignals } = await snarkjs.groth16.fullProve(_proofInput, _wasm, _zkey);
// 	return { proof, publicSignals };
// };

export default async function generateProof(wasm_buff, zkey_buff, w, x) {

  // let input = {
  //   "fashion" : ["0","0",w[0],"0","0","0","0","0"],
  //   "food" : ["0","0",w[1],"0","0","0","0","0"],
  //   "travel" : ["0","0",w[2],"0","0","0","0","0"],
  //   "medical" : ["0","0",w[3],"0","0","0","0","0"],
  //   "education" : ["0","0",w[4],"0","0","0","0","0"],
  //   "exercise" : ["0","0",w[5],"0","0","0","0","0"],
  //   "slotIndex" : 2,
  //   "operator" : 3,
  //   "valueFashion": [x[0]],
  //   "valueFood": [x[1]],
  //   "valueTravel": [x[2]],
  //   "valueMedical": [x[3]],
  //   "valueEducation": [x[4]],
  //   "valueExercise": [x[5]]
  // }
  let input = {
    "fashion": ["0", "0", "22", "0", "0", "0", "0", "0"],
    "food": ["0", "0", "22", "0", "0", "0", "0", "0"],
    "travel": ["0", "0", "22", "0", "0", "0", "0", "0"],
    "medical": ["0", "0", "42", "0", "0", "0", "0", "0"],
    "education": ["0", "0", "33", "0", "0", "0", "0", "0"],
    "exercise": ["0", "0", "5", "0", "0", "0", "0", "0"],
    "slotIndex": 2,
    "operator": 3,
    "valueFashion": [4],
    "valueFood": [11],
    "valueTravel": [4],
    "valueMedical": [4],
    "valueEducation": [4],
    "valueExercise": [6]
  }

  console.log(wasm_buff);
  console.log(zkey_buff);
  const { proof, publicSignals } = await snarkjs.groth16.fullProve(input, wasm_buff, zkey_buff);
  console.log("PROOF");
  console.log(proof);
  return { proof, publicSignals };

  const solidityCallData = await snarkjs.groth16.exportSolidityCallData(proof, publicSignals);

  const argv = solidityCallData
    .replace(/["[\]\s]/g, "")
    .split(",")

  const a = [argv[0], argv[1]];
  const b = [
    [argv[2], argv[3]],
    [argv[4], argv[5]],
  ];
  const c = [argv[6], argv[7]];
  const pubInput = [];

  for (let i = 8; i < argv.length; i++) {
    pubInput.push(argv[i]);
  }

  const solidityProof = [a, b, c, pubInput];

  return solidityProof;
}

