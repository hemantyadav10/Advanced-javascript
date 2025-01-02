// If an async function returns a simple value , js automatically wraps it in a resolved promise.
async function sayHello() {
  return 'Hello, world!';
}
const result = sayHello()
// result.then((data) => console.log(data))



// If an async function explicitly returns a Promise, it simply returns that Promise as-is.
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched')
    }, 2000)
  })
}
// fetchData().then(data => console.log(data))



// If an error is thrown inside an async function, the returned Promise is automatically rejected with that error.
async function throwError() {
  throw new Error('Something went wrong!')
}
// throwError()
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message))



async function makeAsyncRequest() {
  const url = "https://dummyjson.com/products"
  const response = await fetch(url)
  const data = await response.json()
  return data
  // throw new Error('Something went wrong')
}
makeAsyncRequest()
  .then(data => console.log(data))
  .catch(err => console.log(err.message))