let array = [1, -22, 0, 9]

// forEach - only iterate

array.forEach(item => console.log(item))

// map - iterates over collection, creates a new array, populates the new array with new values, and returns the newly created array to you
array.map((num) => num * num)

// find - iterates over collection, and returns the first item that return a truthy value for our condition
array.find((num) => num < 0)

// filter - iterates over the collection, and returns ALL items that returns a truthy value for the predicate in the callback. If no matches, [] is returned
array.filter((num) => num < 0)
