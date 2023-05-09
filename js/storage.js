function agregarOnloadEvent(f) {
  if (typeof window.onload != "function") {
    window.onload = f;
  } else {
    let cache = window.onload;
    window.onload = function () {
      if (cache) {
        cache();
      }
      f();
    };
  }
}

function crearStorage() {
  if (localStorage.getItem("myStorage") !== null) {
    console.log("Ya existe un array");
  } else {
    let array = [
      {
        nombre: "Whiskas 10kg",
        precio: 20000,
        foto: "https://cdnx.jumpseller.com/la-mascota/image/23058360/Whiskas-Adulto-Carne.png?1648570837",
      },

      {
        nombre: "Champion Dog Adulto Raza Pequeña 18 Kg",
        precio: 10000,
        foto: "https://cdnx.jumpseller.com/la-mascota/image/20192546/Champion-Dog-Adulto-Raza-Peque_a.png?1635461182",
      },
    ];

    console.log(array);
    const obj = JSON.stringify(array);
    console.log(obj);
    localStorage.setItem("myStorage", obj);
    console.log("Storage creado");
  }
}

function cargarTabla() {
  const tabla = document.getElementById("tablaMantenedor");
  const cuerpoBody = tabla.lastElementChild;
  let storage = JSON.parse(localStorage.getItem("myStorage"));
  for (const i of storage) {
    const nuevoTr = document.createElement("tr");

    const nuevoTh = document.createElement("th");
    nuevoTh.setAttribute("scope", "row");

    const nuevaImg = document.createElement("img");
    nuevaImg.src = i.foto;
    nuevoTh.appendChild(nuevaImg);

    const nombreTd = document.createElement("td");
    nombreTd.innerText = i.nombre;

    const precioTd = document.createElement("td");
    precioTd.innerText = "$" + i.precio;

    const editarTd = document.createElement("td");
    const iconEditar = document.createElement("i");
    iconEditar.classList.add("fa-solid");
    iconEditar.classList.add("fa-user-pen");
    editarTd.appendChild(iconEditar);

    const eliminarTd = document.createElement("td");
    const iconEliminar = document.createElement("i");
    iconEliminar.classList.add("fa-solid");
    iconEliminar.classList.add("fa-delete-left");
    eliminarTd.appendChild(iconEliminar);

    // AGREGAR TODOS LOS ELEMENTOS A TR
    console.log(nuevoTr);

    nuevoTr.appendChild(nuevoTh);
    nuevoTr.appendChild(nombreTd);
    nuevoTr.appendChild(precioTd);
    nuevoTr.appendChild(editarTd);
    nuevoTr.appendChild(eliminarTd);

    // Agregar tr a tdbody

    cuerpoBody.appendChild(nuevoTr);
  }
}

agregarOnloadEvent(crearStorage());
agregarOnloadEvent(cargarTabla());
