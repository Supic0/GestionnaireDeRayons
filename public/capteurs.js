const urlParams = new URLSearchParams(window.location.search);
const idCapteur = urlParams.get('idCapteur');
if (isNaN(idCapteur) || idCapteur==null || idCapteur=="") {
    document.querySelector("body").innerHTML="ERROR";
}


async function getProductList() {

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
async function isLinked() {
    let data = await fetch('http://184-vmapp01:1880/linkList')
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        })
        .then(data => {
            let ok = false;
            data.forEach(el=>{
                if (el.idCapteur==idCapteur) {
                    ok = true;
                } 
            })
        return ok;
        }).catch(function (error) {
            console.log(error);
        });
        console.log(data);
    return data;
}

(async function build() {
    if (!await isLinked()) {
        document.querySelector("#body2").style.display="none";
        let data = await getProductList();
        let options = document.createElement("ul");
        options.className = "options";
        options.innerHTML = data.map(el => {
            return '<li class="option"><span class="option-text">' + el.nom + '</span></li>'
        }).join('');
        document.querySelector("#root").append(options);
        activeClick();
    } else {
        document.querySelector("#body").style.display="none";
        document.querySelector("#body2").style.display="flex";
    }
})();
function activeClick() {
    const optionMenu = document.querySelector(".select-menu"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        sBtn_text = optionMenu.querySelector(".sBtn-text");

    selectBtn.addEventListener("click", () =>
        optionMenu.classList.toggle("active")
    );

    options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;

            optionMenu.classList.remove("active");

            document.querySelector("#valider").style.display = "block";
        });
    });
}

let valider = document.querySelector("#valider");
valider.addEventListener("click", () => {
    let produit = document.querySelector(".sBtn-text").innerText;

    fetch('http://184-vmapp01:1880/link?idCapteur=' + idCapteur + '&nom=' + produit)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        })
        .catch(function (error) {
            console.log(error);
        });
    location.reload();
})

let oublier = document.querySelector("#oublier");
oublier.addEventListener("click", () => {

    fetch('http://184-vmapp01:1880/unLink?idCapteur=' + idCapteur)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        })
        .catch(function (error) {
            console.log(error);
        });
    location.reload();
})
