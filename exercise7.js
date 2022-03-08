const movie = {
title: "Bone Sickness",
release: "1996",
producer: "Brian Paulin",
rating: 6
};

showproperties (movie);

function showproperties(obj){
    for(let key in obj){
    if(typeof obj [key]=== "string")
console.log(key,obj[key])
    }
}

