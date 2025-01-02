let resolveBtn = document.querySelector('#resolve_btn')
let rejectBtn = document.querySelector('#reject_btn')

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener('click', () => {
    resolve('Promise resolved.')
  })
  rejectBtn.addEventListener('click', () => {
    reject('Promise rejected.')
  })
})


p.then((data) => {
  console.log(data)
  return "hemant"
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})