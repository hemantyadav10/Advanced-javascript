
const fetchData = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error.message)
  } finally {
    console.log('hello')
  }
  console.log('hello') // Will not execute if the `try` block's `return` is reached
}

// finally block will execute no matter what happens in the try catch block , even if there are interruptions like return, break, or continue

fetchData()

