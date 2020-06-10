import dotenv from "dotenv";
import path from "path";
import fs from "fs-extra";
import sharedExecSync from "../../shared/exec";

export function log(vargs: { verbose: 0 }, level: number, ...toLog) {
  const wanted = vargs.verbose || 0;
  if (wanted >= level) {
    console.log(...toLog);
  }
}

export function readEnv() {
  const envPath = path.resolve(path.join(__dirname, "..", ".env"));
  return dotenv.parse(fs.readFileSync(envPath));
}

export async function execSync(vargs: { verbose: 0 }, level: number, command) {
  log(vargs, level, "    Running:", command);
  await sharedExecSync(command);
}

export async function sleep(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
