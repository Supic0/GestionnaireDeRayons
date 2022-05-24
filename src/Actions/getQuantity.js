function getQuantityP (produit) {
    let total;
    fetch('184-vmapp01:1880/getQuantityProduct?nom='+produit)
    .then(response => response.json())
    .then(data => console.log(data));
    data.forEach(element => {
        total += element.quantite;
    });
    return total;
}

function getQuantityC (produit) {

    fetch('184-vmapp01:1880/getQuantitySensor?nom='+produit)
    .then(response => response.json())
    .then(data => console.log(data));
    return data // dernier 
}



function getAllHistory () {
    fetch('184-vmapp01:1880/getHistory')
    .then(response => response.json())
    .then(data => console.log(data));
    return data;
}