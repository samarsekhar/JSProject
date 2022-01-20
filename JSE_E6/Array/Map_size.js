let size = [11, 12, 13, 14, 15, 16]

let new_size = size.map((s) => {
    console.log(s);
    s = s + 1
    return s
})
console.log(new_size);