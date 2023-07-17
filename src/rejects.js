/**
 * @template {any[]} A
 * @param {Promise<any> | ((...a: A) => Promise<any>)} promiseOrPromiseFn
 * @param  {A} args
 * @returns {Promise<void>}
 */
module.exports = async function rejects(promiseOrPromiseFn, ...args) {
  const promise =
    typeof promiseOrPromiseFn === "function"
      ? promiseOrPromiseFn(...args)
      : promiseOrPromiseFn;
  try {
    await promise;
  } catch (error) {
    return;
  }
  throw new AssertionError();
}
