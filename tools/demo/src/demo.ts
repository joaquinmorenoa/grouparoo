import sample_data from "./sample_data";
export const cmd = async function (vargs) {
  console.log("Running with verbose:", vargs.verbose);
  await sample_data(vargs);
};
