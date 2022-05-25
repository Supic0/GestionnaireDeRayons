export function getQuantityP(produit) {
    let total;
    fetch('http://184-vmapp01:1880/getQuantityProduct?nom=' + produit)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            response.json()
        }
            )
        .then(data => {
            console.log(data);
            data.forEach(element => {
                total += parseInt(element.quantite);
                return total;
            })
        }).catch(function(error) {
            console.log(error);
        });

}

export function getQuantityC(produit) { //get actual quantity of all sensors of a product
    let verif = [];
    fetch('http://184-vmapp01:1880/getQuantitySensor?nom=' + produit)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            response.json();
        })
        .then(data => {
            console.log(data);
            data = data.filter(el => {

                if (!verif.includes(el.idCapteur)) {
                    verif.push(el.idCapteur);
                    return true;
                } else {

                return false
                }
            })
            return data
        }).catch(function(error) {
            console.log(error);
        });
}



export function getAllQuantity() { //return [{nom: x, quantite:x},{nom: y,quantitet y}]
    let verif = [];
    fetch('http://184-vmapp01:1880/getHistory')
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        })
        .then(data => {
            console.log(data);

            data = data.filter(el => {
                if (!verif.includes(el.idCapteur)) {
                    verif.push(el.idCapteur);
                    return true;
                } else {
                return false;
            }
            })

            let dataOfProduct=[]
            data.forEach(el => {
                console.log(el);
                if (!dataOfProduct.map(thing => thing.nom).includes("boo")){
                    
                    dataOfProduct.push(el);
                } else {
                    console.log("yes");
                    let index = dataOfProduct.indexOf(el);
                    dataOfProduct[index].quantite += parseInt(el.quantite);
                }
            })
            console.log(dataOfProduct)
            let finalData = dataOfProduct.map(el => {
                return {nom : el.nom, quantite : el.quantite};
            })
            console.log(finalData);
            return finalData;
        }).catch(function(error) {
            console.log(error);
        });
}