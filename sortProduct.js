

// function sortProduct (arr) {
//     let answer = []
//     let product = []
//     let num = 1
//     for(i = 0; i <arr.length; i++) {
//         answer.push(arr[i] * num)
//         product = answer.map((item, index) => ({...item, id: index + 1}))
//         num++

//     }
//     console.log(answer)
//     console.log(product)
// }
// sortProduct([23, 2, 3, 4, 5])


//Jareds solution

function sortArr(arr) {
    arr = arr.map((num, index) => {
        return [num, index + 1]
    })
    arr = arr.map((numArr) => {
        return [numArr[0], numArr[0] * numArr[1]]
    })
    arr.sort((a, b) => {
        return a[1] - b[1]
    })
    arr = arr.map((numArr) => {
        return numArr[0]
    })
    console.log(arr)
}

sortArr([23, 2, 3, 4, 5])