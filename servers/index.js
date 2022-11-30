// CRUD action AND http methods

// Create -> POST
// Read/Retrieve -> GET
// Update -> PATCH/PUT
// Destroy -> DELETE

// FETCH
console.log("a") // SYNC
// it creates an http async request
// it returns a Promise object
// 3 statuses: pending, fulfilled, rejected
// 3 methods: #then, #catch, #finally
fetch("http://localhost:3000/pokemons")
.then(response => {
    console.log("b") // ASYNC
    return response.json()
}) // JSON
.then(data => {
    console.log("c") // ASYNC

    // data.forEach(createPokemonCard)
})
// .then()
.catch((error) => alert(error))

console.log("d") // SYNC
