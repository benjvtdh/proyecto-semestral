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
        id: 1,
        nombre: "Whiskas 10kg",
        precio: 20000,
        foto: "https://cdnx.jumpseller.com/la-mascota/image/23058360/Whiskas-Adulto-Carne.png?1648570837",
      },

      {
        id: 2,
        nombre: "Champion Dog Adulto Raza Pequeña 18 Kg",
        precio: 10000,
        foto: "https://cdnx.jumpseller.com/la-mascota/image/20192546/Champion-Dog-Adulto-Raza-Peque_a.png?1635461182",
      },
    ];

    const obj = JSON.stringify(array);
    localStorage.setItem("myStorage", obj);
    console.log(array);
    console.log("Storage creado");
  }
}

function eliminarStorage() {
  localStorage.removeItem("myStorage");
}

function crearHtml(
  idProducto,
  nombreProducto,
  precioProducto,
  fotoProductoUrl
) {
  const tabla = document.getElementById("tablaMantenedor");
  const cuerpoBody = tabla.lastElementChild;
  const nuevoTr = document.createElement("tr");

  const nuevoTh = document.createElement("th");
  nuevoTh.setAttribute("scope", "row");

  const nuevaImg = document.createElement("img");
  nuevaImg.src = fotoProductoUrl;
  nuevoTh.appendChild(nuevaImg);

  const idTd = document.createElement("td");
  idTd.innerText = idProducto;

  const nombreTd = document.createElement("td");
  nombreTd.innerText = nombreProducto;

  const precioTd = document.createElement("td");
  precioTd.innerText = "$" + precioProducto;

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

  nuevoTr.appendChild(nuevoTh);
  nuevoTr.appendChild(idTd);
  nuevoTr.appendChild(nombreTd);
  nuevoTr.appendChild(precioTd);
  nuevoTr.appendChild(editarTd);
  nuevoTr.appendChild(eliminarTd);

  // Agregar tr a tdbody

  cuerpoBody.appendChild(nuevoTr);
}

function cargarTabla() {
  // const tabla = document.getElementById("tablaMantenedor");
  // const cuerpoBody = tabla.lastElementChild;
  let storage = JSON.parse(localStorage.getItem("myStorage"));
  for (const i of storage) {
    crearHtml(i.id, i.nombre, i.precio, i.foto);
  }
}

function agregarProducto() {
  const idProducto = document.getElementById("idProducto").value;
  const nombreProducto = document.getElementById("nombreProducto").value;
  const precioProducto = document.getElementById("precioProducto").value;
  const fotoProductoUrl = document.getElementById("fotoProducto").value;

  let array = {
    id: Number(idProducto),
    nombre: nombreProducto,
    precio: precioProducto,
    foto: fotoProductoUrl,
  };
  let storage = JSON.parse(localStorage.getItem("myStorage"));
  storage.push(array);
  localStorage.setItem("myStorage", storage);

  crearHtml(idProducto, nombreProducto, precioProducto, fotoProductoUrl);
}

function eliminarProducto(idProducto, event) {
  event.target.parentNode.parentNode.remove();
  let storage = JSON.parse(localStorage.getItem("myStorage"));
  let filtro = storage.filter((e) => e.id != idProducto);
  console.log(filtro);
  localStorage.setItem("myStorage", JSON.stringify(filtro));
}

agregarOnloadEvent(eliminarStorage());
agregarOnloadEvent(crearStorage());
agregarOnloadEvent(cargarTabla());

const tablaColumnas = document.getElementsByTagName("tr");
for (let curr = 1; curr < tablaColumnas.length; curr++) {
  const iconoEliminar = tablaColumnas[curr].lastElementChild.firstElementChild;
  const idProducto =
    tablaColumnas[curr].firstElementChild.nextElementSibling.innerText;
  iconoEliminar.addEventListener("click", (event) => {
    eliminarProducto(idProducto, event);
  });
}
