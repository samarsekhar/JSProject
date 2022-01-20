let size_array = [23, 24, 25, 26, 27, 28]

let new_size = size_array.forEach((size) => {
    console.log(size);
    size = size + 1
    return size
})
console.log(new_size);
console.log(size_array);