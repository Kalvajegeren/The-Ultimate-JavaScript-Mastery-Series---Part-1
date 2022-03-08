// Speedlimit = 70
// 5-> 1 point
// 12 points licence suspended

checkspeed(130)

function checkspeed(speed){
    const speedLimit = 70;
    const KmPerPoint = 5;

    if(speed <= speedLimit + KmPerPoint )
    console.log("Ok")

    else{
        const points = Math.floor((speed - speedLimit) / KmPerPoint);
        if (points >= 12)
        console.log("licence suspended")
        else console.log(points)
    }

}

