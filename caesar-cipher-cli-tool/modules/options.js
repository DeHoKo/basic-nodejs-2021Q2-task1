const { program } = require("commander");

program
  .description("Caesar cipher CLI tool")
  .requiredOption("-s, --shift <number>", "a shift")
  .option("-i, --input <path>", "an input file")
  .option("-o, --output <path>", "an output file")
  .requiredOption("-a, --action <type>", "an action encode/decode");

program.parse();

module.exports = program.opts();
