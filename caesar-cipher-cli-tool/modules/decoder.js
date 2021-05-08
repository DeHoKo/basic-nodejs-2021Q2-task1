const constants = require("./constants");

const isEnglishChar = (charCode) => {
  if (
    charCode >= constants.FIRST_ALPHABET_CHAR_CODE_LOWERCASE &&
    charCode <= constants.LAST_ALPHABET_CHAR_CODE_LOWERCASE
  ) {
    return true;
  }
  if (
    charCode >= constants.FIRST_ALPHABET_CHAR_CODE_UPPERCASE &&
    charCode <= constants.LAST_ALPHABET_CHAR_CODE_UPPERCASE
  ) {
    return true;
  }
  return false;
};

const normalizeEncodedCharCode = (
  encodedCharCode,
  firstCharCode,
  lastCharCode
) => {
  let normalizedEncodedCharCode = encodedCharCode;

  if (encodedCharCode > lastCharCode) {
    normalizedEncodedCharCode =
      firstCharCode - 1 + (encodedCharCode % lastCharCode);
  }

  return normalizedEncodedCharCode;
};

module.exports = (char, shift) => {
  let charCode = char.charCodeAt();

  if (!isEnglishChar(charCode)) {
    return char;
  }

  let isLowerCase = true;

  if (charCode < constants.FIRST_ALPHABET_CHAR_CODE_LOWERCASE) {
    isLowerCase = false;
  }

  let encodedCharCode = charCode + shift;

  if (isLowerCase) {
    encodedCharCode = normalizeEncodedCharCode(
      encodedCharCode,
      constants.FIRST_ALPHABET_CHAR_CODE_LOWERCASE,
      constants.LAST_ALPHABET_CHAR_CODE_LOWERCASE
    );
  } else {
    encodedCharCode = normalizeEncodedCharCode(
      encodedCharCode,
      constants.FIRST_ALPHABET_CHAR_CODE_UPPERCASE,
      constants.LAST_ALPHABET_CHAR_CODE_UPPERCASE
    );
  }

  return String.fromCharCode(encodedCharCode);
};
