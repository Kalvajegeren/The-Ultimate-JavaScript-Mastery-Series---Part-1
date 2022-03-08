showStars (10);

function showStars(rows){
    for (let i = 0; i<=rows; i++){
    let pattern ='';
    for (let r =0; r<i; r++)
    pattern += "*";
    console.log(pattern);
    }
}