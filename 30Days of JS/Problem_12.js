/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const resolvePromise1 = await promise1;
    const resolverPromise2 = await promise2;
    return resolvePromise1 + resolverPromise2; 
};


  addTwoPromises(Promise.resolve(6), Promise.resolve(7)).then(console.log);
 