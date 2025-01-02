function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'

  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener('load', () => {
      resolve(xhr.response)
    })
    xhr.addEventListener('error', () => {
      reject('Request failed.')
    })
  })

  xhr.open(method, url)
  xhr.send()

  return promise
}

// makeHttpRequest('GET', 'https://dummyjson.com/users', (userData) => {
//   makeHttpRequest('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`, (user) => {
//     makeHttpRequest('GET', `https://dummyjson.com/comments/post/${user.posts[0].id}`, (commentsData) => {
//       makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//         console.log(userData)
//       })
//     })
//   })
// })

const promise = makeHttpRequest('GET', 'https://dummyjson.com/users')

promise
  .then((userData) => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`))
  .then(postData => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postData.posts[0].id}`))
  .then(commentsData => makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
  .then(userData => console.log(userData))
  .catch(err => console.log(err))