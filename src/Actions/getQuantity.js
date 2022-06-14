
export function getQuantityP(produit) { //renvoie la quantitée globale d'un produit
    let total;
    return fetch('http://184-vmapp01:1880/getQuantityProduct?nom=' + produit)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            response.json()
        }
            )
        .then(data => {
            data.forEach(element => {
                total += parseInt(element.quantite);
            });
            return total; 
        }).catch(function(error) {
            console.log(error);
        });
}

export function getQuantitySensorProduct(produit) { //renvoie la quantitée de chaque capteur d'un produit

    return fetch('http://184-vmapp01:1880/getQuantityProduct?nom=' + produit)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            response.json()
        })
        .then(data => {
            return data; 
        }).catch(function(error) {
            console.log(error);
        });
}

export function getQuantityC() {  //renvoie la quantitée de chaque capteurs actifs
    return fetch('http://184-vmapp01:1880/getQuantitySensors')
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            response.json();
        })
        .then(data => {
            return data
        }).catch(function(error) {
            console.log(error);
        });
}



export function getAllQuantity() { //return [{nom: x, quantite:x},{nom: y,quantite: y}]
    return fetch('http://184-vmapp01:1880/getHistory')
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        })
        .then(data => {
            return data;
        }).catch(function(error) {
            console.log(error);
        });
}