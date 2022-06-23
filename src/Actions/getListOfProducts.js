export async function getListOfProducts() {

  return fetch('http://184-vmapp01:1880/productList')
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
export async function getIdProduct(produit) {
  return fetch('http://184-vmapp01:1880/productList')
      .then(response => {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          return response.json()
      })
      .then(data => {
          let obj = data.filter(el => {
            return el.nom === produit;
          })
          return obj[0].idProduit;
      }).catch(function (error) {
          console.log(error);
      });
  
}
export async function newProduct (nom, epaisseur) {
    return fetch('http://184-vmapp01:1880/createProduct?nom='+nom+'&epaisseur='+epaisseur)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
}

export async function delProduct (nom) {
  return fetch('http://184-vmapp01:1880/deleteProduct?nom='+nom)
  .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

