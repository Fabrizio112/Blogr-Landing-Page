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