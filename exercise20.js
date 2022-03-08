const numbers2 = [1,2,3,4,1,1,2]

const output2 = exept(numbers2, [4,2])

console.log(output2)

function exept(array, exluded){
    const output2 = [];
    for (let element of array)
    if(!exluded.includes(element))
    output2.push(element)
    return output2
}