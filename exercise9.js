// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-99: A

const marks = [70,70,70];

console.log (calculateGrade(marks))

function calculateGrade(marks){
let sum = 0
for (let mark of marks)
sum += mark
let avarage  = sum/marks.length

if (avarage < 60 ) return "F"
if (avarage <70) return "D"
if (avarage <80) return "C"
if (avarage <90) return "B"
return "A" 
}