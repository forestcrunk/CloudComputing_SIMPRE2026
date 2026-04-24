const arr = [1,2,3,4,5];

const forEach = arr.forEach((e, i) => {
    // console.log(e, i)
    return e*2
})

const map = arr.map((e, i) => {
    // console.log(e,i)
    return e*2
})

//for (index in arr) - in = index

//for (elem of arr) - of = elements

console.log(forEach, map)