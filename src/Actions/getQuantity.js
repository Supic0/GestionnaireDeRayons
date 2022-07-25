
export async function getQuantityP(produit) { //renvoie la quantitée globale d'un produit
    let total = 0;
    return fetch('http://184-vmapp01:1880/getQuantityProduct?nom=' + produit)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(element => {
                total += element.quantite;
            });
            return total.toString();
        }).catch(function (error) {
            console.log(error);
        });
}

export async function getQuantitySensorProduct(produit) { //renvoie la quantitée de chaque capteur d'un produit

    return fetch('http://184-vmapp01:1880/getQuantityProduct?nom=' + produit)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        })
        .then(data => {
            return data;
        }).catch(function (error) {
            console.log(error);
        });
}

export async function getQuantityC() {  //renvoie la quantitée de chaque capteurs actifs
    return fetch('http://184-vmapp01:1880/getQuantitySensors')
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            data.sort(function(a, b){return a.idCapteur - b.idCapteur});
            return data
        }).catch(function (error) {
            console.log(error);
        });
}



export async function getAllQuantity() { //return [{nom: x, quantite:x},{nom: y,quantite: y}]
    return fetch('http://184-vmapp01:1880/getHistory')
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        })
        .then(data => {
            return data;
        }).catch(function (error) {
            console.log(error);
        });
}

export async function getQuantityProducts() { //return [{nom: x, quantite:x},{nom: y,quantite: y}]
    return fetch('http://184-vmapp01:1880/getQuantityProducts')
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        })
        .then(data => {
            return data;
        }).catch(function (error) {
            console.log(error);
        });
}