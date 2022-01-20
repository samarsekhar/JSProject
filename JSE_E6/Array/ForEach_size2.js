let size_array = [12, 13, 14, 15, 16, 17, 18]

let new_size = size_array.forEach((s) => {
    s = s + 1
    return s
})
console.log(new_size);
console.log(size_array);