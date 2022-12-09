/* eslint-disable no-console */
/*
Knowledge sharing

`const func = () => {} ` vs. `function func() {}`
https://stackoverflow.com/questions/33040703/proper-use-of-const-for-defining-functions
In summary the usual `function foo() {}` gets hoisted while `const func = () => {}` not

Pros and const
https://softwareengineering.stackexchange.com/questions/364086/why-use-const-foo-instead-of-function-foo
*/

asFunction()
function asFunction() {
  console.log('as Function')
}

console.log(asVar) // undefined
// asVar()
var asVar = () => {
  console.log('as Var')
}

console.log(asConst)
const asConst = () => {
  console.log('as Const')
}
