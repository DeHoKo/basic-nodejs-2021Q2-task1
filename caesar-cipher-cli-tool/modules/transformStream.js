const { Transform } = require("stream");

module.exports = (decoder, shift) =>
  new Transform({
    transform(chunk, encoding, callback) {
      const transformedValue = decoder(chunk.toString(), shift);

      callback(null, transformedValue);
    },
  });
