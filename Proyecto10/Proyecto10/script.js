const navegacion = document.querySelector(".menuPrincipal");
const abrir = document.querySelector(".abrirMenu");
const cerrar = document.querySelector(".cerrarMenu");
/*Id # - clase: 0 */

abrir.addEventListener("click", ()=>{ /*Evento escucha: Cuando se haga click en este caso abrir*/
    navegacion.classList.add("visible");/*Tiene que add esta clase, la intercambia y despliega el menu*/
})

cerrar.addEventListener("click", ()=>{
    navegacion.classList.remove("visible");
})