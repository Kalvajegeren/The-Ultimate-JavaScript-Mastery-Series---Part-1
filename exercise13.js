    

//Factory function
let adresse = createAdress("Rosenli","15","4015")
function createAdress (street, adress, zipCode){
    return {
        street,
        adress,
        zipCode,
        
        }
    }
    console.log(adresse)

    //Constructor function
    let adresse2 = new Adresse("Rosenli", "15", "4015")
    function Adresse(street, adress, zipCode){
        this.street = street
        this.adress = adress
        this.zipCode = zipCode
        
    }
    
    console.log(adresse2)