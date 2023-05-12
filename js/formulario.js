document.getElementById("valId").style.display = "none";
document.getElementById("valNombre").style.display = "none";
document.getElementById("valPrecio").style.display = "none";
document.getElementById("valFoto").style.display = "none";

console.log();

let idProducto = document.getElementById("idProducto");
let nombreProducto = document.getElementById("nombreProducto");
let precioProducto = document.getElementById("precioProducto");
let fotoProducto = document.getElementById("fotoProducto");

function limpiarForm() {
  let formulario = document.getElementById("agregarProductoForm");
  formulario.reset();
  if (nombreProducto.classList.contains("is-valid")) {
    nombreProducto.classList.remove("is-valid");
  } else {
    nombreProducto.classList.remove("is-invalid");
  }

  if (precioProducto.classList.contains("is-valid")) {
    precioProducto.classList.remove("is-valid");
  } else {
    precioProducto.classList.remove("is-invalid");
  }

  if (fotoProducto.classList.contains("is-valid")) {
    fotoProducto.classList.remove("is-valid");
  } else {
    fotoProducto.classList.remove("is-invalid");
  }
}

function validarForm() {
  let txtId = idProducto.value;
  let txtNombre = nombreProducto.value;
  let txtPrecio = precioProducto.value;
  let fileFoto = fotoProducto.value;

  if (txtId.length == 0) {
    document.getElementById("valId").style.display = "inline";
    document.getElementById("idProducto").classList.add("is-invalid");
  } else {
    document.getElementById("idProducto").classList.remove("is-invalid");
    document.getElementById("idProducto").classList.add("is-valid");
    document.getElementById("valId").style.display = "none";
  }

  if (txtNombre.length == 0) {
    document.getElementById("valNombre").style.display = "inline";
    document.getElementById("nombreProducto").classList.add("is-invalid");
  } else {
    document.getElementById("nombreProducto").classList.remove("is-invalid");
    document.getElementById("nombreProducto").classList.add("is-valid");
    document.getElementById("valNombre").style.display = "none";
  }

  if (txtPrecio.length == 0) {
    document.getElementById("valPrecio").style.display = "inline";
    document.getElementById("precioProducto").classList.add("is-invalid");
  } else {
    document.getElementById("precioProducto").classList.remove("is-invalid");
    document.getElementById("precioProducto").classList.add("is-valid");
    document.getElementById("valPrecio").style.display = "none";
  }

  if (fileFoto.length == 0) {
    document.getElementById("valFoto").style.display = "inline";
    document.getElementById("fotoProducto").classList.add("is-invalid");
  } else {
    document.getElementById("fotoProducto").classList.remove("is-invalid");
    document.getElementById("fotoProducto").classList.add("is-valid");
    document.getElementById("valFoto").style.display = "none";
  }
}
