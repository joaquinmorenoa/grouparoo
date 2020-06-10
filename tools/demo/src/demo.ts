import postgres from "./postgres";
export const cmd = async function (vargs) {
  console.log("here", vargs.verbose);
  await postgres(vargs);
};
