// street
// adress
// zip code
// function shwAdress (adress)



let adress = {
    street: "rosenli",
    adress: 15,
    zipCode: 4015
}


function showAdress (adress){
    for (let key in adress)
    console.log(key, adress[key]);
}

showAdress(adress);