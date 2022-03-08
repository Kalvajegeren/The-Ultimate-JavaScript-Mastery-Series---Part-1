// Check to see if landscape
let size = isLandScape(160,150)
console.log (size)

function isLandScape(width, height){    
    if(width> height) return (true)
    else return (false)
}


// Litt mer pro måte
console.log(isLandScape(160,150));
function isLandScape(width,height){
    return (width>height);
}