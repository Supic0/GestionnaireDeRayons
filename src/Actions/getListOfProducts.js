function getListOfProducts () {
    fetch('184-vmapp01:1880/productList')
    .then(response => response.json())
    .then(data => console.log(data));
    return data;
}

async function newProduct (nom, epaisseur) {
    await fetch('184-vmapp01:1880/createProduct?nom="'+nom+'"&epaisseur='+epaisseur)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
}