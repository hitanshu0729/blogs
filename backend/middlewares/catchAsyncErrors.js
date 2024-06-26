/**
 * The `catchAsyncErrors` function is a higher-order function that wraps another function and catches
 * any asynchronous errors that occur within it.
 * @param theFunction - The `theFunction` parameter in the `catchAsyncErrors` function is a function
 * that takes three parameters: `req` (request), `res` (response), and `next` (next middleware
 * function). This function is expected to return a Promise.
 * @returns A higher-order function is being returned. This function takes three parameters: `req`,
 * `res`, and `next`, and it handles asynchronous errors by wrapping the provided `theFunction` in a
 * Promise and catching any errors that occur.
 */
export const catchAsyncErrors = (theFunction) => {
  return (req, res, next) => {
    Promise.resolve(theFunction(req, res, next)).catch(next);
  };
};
