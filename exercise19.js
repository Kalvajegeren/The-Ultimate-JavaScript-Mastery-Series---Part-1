let numbers1 = [1,2,3,4,5]

console.log(includes(numbers1, -1));

function includes (array, searchelement){
for (let element of array)
if (element === searchelement)
return true
return false
}