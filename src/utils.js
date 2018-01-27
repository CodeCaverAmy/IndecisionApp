console.log('utils.js is running');

// const square = (x) => x * x;
// const add = (a, b) => a + b;

// default exports and named exports

//  named exports
export const square = (x) => x * x;
export const add = (a, b) => a + b;

// default export
// const subtract = (a,b) => a - b;
// export default subtract;
export default (a,b) => a - b;

// references to things that we want to export
// export {
//     square,
//     add,
//     subtract as default
// };