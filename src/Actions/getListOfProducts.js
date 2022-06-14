export async function getListOfProducts() {

  let data = await fetch('http://184-vmapp01:1880/productList')
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
  return data;
}

export async function newProduct (nom, epaisseur) {
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

