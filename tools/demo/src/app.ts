import { log, execSync } from "./shared";
import { helper } from "./../../../core/api/__tests__/utils/specHelper";

export default async function (vargs) {
  console.log("here");
  process.chdir(`${__dirname}/../../../core/api`);
  console.log(await execSync(vargs, 1, "ls"));

  log(vargs, 0, "Creating App Env");
  const env = await helper.prepareForAPITest();
  console.log(env);
}
