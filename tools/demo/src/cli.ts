#!/usr/bin/env node
import * as yargs from "yargs";
import { cmd } from "./demo";

const { _: patterns, ...rest } = yargs
  .help("h")
  .alias("h", "help")
  .example("$0", "set up the environment for a demo")
  .count("verbose")
  .alias("verbose", "v")
  .describe("verbose", "show steps")
  .usage("Usage: $0").argv;

cmd(rest).then(
  () => {
    process.exit(0);
  },
  (error) => {
    console.error(`ERROR! ${error}`);
    process.exit(1);
  }
);
