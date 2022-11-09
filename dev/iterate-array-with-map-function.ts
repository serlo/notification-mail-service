/* eslint-disable no-console */

function promiseBasedFunction() {
  return Promise.resolve('run')
}

void runExperiment().then(() => {})

async function runExperiment() {
  const array = [1, 2, 3]

  for (const item of array) {
    console.log(`${await promiseBasedFunction()} ${item} times`)
  }
  // It should have worked! Why it didn't at `emailPayloads.map(async (payload) => {...}`?
  array.map(async (item) => {
    console.log(`${await promiseBasedFunction()} ${item} times`)
  })

  // forEach doesn't work unless you use call a function inside of the callback
  // array.forEach(async (item) => {
  //   console.log(`${await promiseBasedFunction()} ${item} times`)
  // })
  array.forEach((item) => {
    void (async () => {
      console.log(`${await promiseBasedFunction()} ${item} times`)
    })()
  })
}
