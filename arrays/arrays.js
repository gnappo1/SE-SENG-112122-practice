// ARRAYS

// What's an array?
// How do we find the number of elements in an array?
let array = [-3, 1, true, undefined, {name: "Matteo"}]
array.length

// CRUD actions on arrays
// What's the difference between destructive and non-destructive actions?

    // Create
        const array3 = Array(1, 2, 3)
    // Retrieve
        // Knowing the position
            array[2]
        // last element
            array[array.length - 1]
        // The index knowing the element
            array.indexOf(true)
    // Update
        // Remove first element
            array.shift()
        // Remove last element
            array.pop()
        // Remove an element in any position
            array.splice(0, 1, 5, 6, 7)
        // Replace an element in any position
        // Add an element to the end of the arrayimage
            array.push("yes")
        // Add an element to the beginning of the array
            array.unshift(-22, "almost there!")
        // Add an element in any position
            array.splice(0, 1, 5, 6, 7)

    // Destroy
        // Clear the array
        array = []
        