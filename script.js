let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

//Funcion la cual carga el item seleccionado
function cargar(item){
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    mostrador.style.opacity = "1";
    item.style.border = "2px solid red";


    imgSeleccionada.scr = item.getElementById("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo";

    precioSeleccionado.innerHTML = item.getElementByTagName("span")[0].innerHTML;

}

function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i < items.length; i++){
        items[i].style.border = "none";
    }
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    mostrador.style.opacity = "0";
    quitarBordes();
}