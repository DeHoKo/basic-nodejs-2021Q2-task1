const path = require("path");
const fs = require("fs");
const { pipeline } = require("stream");
const decoder = require("./modules/decoder");
const options = require("./modules/options");
const createTransformStream = require("./modules/transformStream");

const constants = require("./modules/constants");

const ALPHABET_SIZE =
  constants.LAST_ALPHABET_CHAR_CODE_LOWERCASE -
  constants.FIRST_ALPHABET_CHAR_CODE_LOWERCASE +
  1;

const ACTION = options.action;
const SHIFT =
  (parseInt(options.shift, 10) >= 0
    ? parseInt(options.shift, 10)
    : ALPHABET_SIZE + parseInt(options.shift, 10)) % ALPHABET_SIZE;

const INPUT_FILE = options.input;
const OUTPUT_FILE = options.output;

let inputStream;
let outputStream;

if (INPUT_FILE) {
  inputStream = fs.createReadStream(INPUT_FILE);
} else {
  console.log("Press ctrl + C to exit this application");
  inputStream = process.stdin;
}

if (OUTPUT_FILE) {
  outputStream = fs.createWriteStream(OUTPUT_FILE, {
    flags: "a",
  });
} else {
  outputStream = process.stdout;
}

const decodeCaesarCipher = (text, shift) => {
  return text
    .split("")
    .map((char) => decoder(char, shift))
    .join("");
};

let transformStream;

switch (ACTION) {
  case constants.ACTION_TYPES.ENCODE:
    transformStream = createTransformStream(decodeCaesarCipher, SHIFT);
    break;
  case constants.ACTION_TYPES.DECODE:
    transformStream = createTransformStream(
      decodeCaesarCipher,
      ALPHABET_SIZE - SHIFT
    );
    break;
  default:
    throw Error("Enter valid action");
}

pipeline(inputStream, transformStream, outputStream, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Succeeded.");
  }
});
