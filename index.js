const $MENU = document.querySelector("#barra-menu");
const $CRUZ = document.querySelector("#barra-cerrar")
$MENU.addEventListener("click", () => {
    $MENU.style.display = "none";
    $CRUZ.style.display = "flex";
    let $menuDesplegable = document.querySelector("#nav-right");
    $menuDesplegable.style.display = "flex";
})
$CRUZ.addEventListener("click", () => {
    $CRUZ.style.display = "none";
    $MENU.style.display = "flex";
    let $menuDesplegable = document.querySelector("#nav-right");
    $menuDesplegable.style.display = "none";
})

const $PRODUCTS = document.querySelector("#products");
let contadorProducts = 0;
$PRODUCTS.addEventListener("click", () => {
    let listaDesplegable = document.querySelector("#container-products");
    if (contadorProducts === 1) {
        listaDesplegable.style.display = "grid";
        contadorProducts--;
    } else {
        listaDesplegable.style.display = "none";
        contadorProducts++;
    }
})
const $COMPANY = document.querySelector("#company");
let contadorCompany = 0;
$COMPANY.addEventListener("click", () => {
    let listaDesplegable = document.querySelector("#container-company");
    if (contadorCompany === 1) {
        listaDesplegable.style.display = "grid";
        contadorCompany--;
    } else {
        listaDesplegable.style.display = "none";
        contadorCompany++;
    }
})
const $CONNECT = document.querySelector("#connect");
let contadorConnect = 0;
$CONNECT.addEventListener("click", () => {
    let listaDesplegable = document.querySelector("#container-connect");
    if (contadorConnect === 1) {
        listaDesplegable.style.display = "grid";
        contadorConnect--;
    } else {
        listaDesplegable.style.display = "none";
        contadorConnect++;
    }
})