const numbers3 = [1,2,3,4,5]

const output3 = move(numbers,1,3)

console.log(output3)

function move(array, index, offset){
    const position = index + offset;
    if (position >= array.length || position <0){
        console.error("invalid offset")
        return;
    }
const output3 = [...array]
const element  = output3.splice(index, 1)[0];
output3.splice(position, 0, element)
return output3
}