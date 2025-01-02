fetch('https://dummyjson.com/products/add', {
  method: "POST",
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({
    title: "BMW Pencil",
  })
})
  .then(res => res.json())
  .then(console.log)
  .catch(err => console.log(err))