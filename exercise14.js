let adress1 = new Adresse("a", "b", "c");
let adress2 = new Adresse("a", "b", "c");

 function Adresse(street, city, zipCode){
        this.street = street
        this.city = city
        this.zipCode = zipCode
    }

function areEqual(adress1, adress2){
return adress1.street === adress2.street
&& adress1.city === adress2.city
&& adress1.zipCode === adress2.zipCode
}

function areSame(adress1, adress2){
    return adress1 === adress2
}
console.log(areEqual(adress1, adress2))
console.log(areSame(adress1, adress2))