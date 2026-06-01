
// ===== EJERCICIO 1 =====

const meriendas = [
    "Tostadas",
    "Yogur",
    "Fruta",
    "Galletitas",
    "Jugo"
];

function mostrarMeriendas() {
    const lista = document.getElementById("listaMeriendas");

    if (lista) {
        meriendas.forEach(merienda => {
            const div = document.createElement("div");
            div.className = "caja";
            div.textContent = merienda;
            lista.appendChild(div);
        });
    }
}

function contarMeriendas() {
    document.getElementById("resultado").textContent =
        "Cantidad de meriendas: " + meriendas.length;
}

// ===== EJERCICIO 2 =====

function iniciarTarjetas() {

    const tarjetas = document.querySelectorAll(".tarjeta");
    const contador = document.getElementById("contador");

    if (!contador) return;

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {

            tarjeta.classList.toggle("seleccionada");

            const seleccionadas =
                document.querySelectorAll(".seleccionada").length;

            contador.textContent =
                "Tarjetas seleccionadas: " + seleccionadas;
        });
    });
}

// ===== EJERCICIO 3 =====

const productos = [
    { nombre: "Manzana", categoria: "fruta" },
    { nombre: "Banana", categoria: "fruta" },
    { nombre: "Pera", categoria: "fruta" },
    { nombre: "Pizza", categoria: "comida" },
    { nombre: "Hamburguesa", categoria: "comida" },
    { nombre: "Empanadas", categoria: "comida" }
];

function mostrarProductos(lista) {

    const contenedor = document.getElementById("productos");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        const div = document.createElement("div");

        div.className = "caja";
        div.textContent = producto.nombre;

        contenedor.appendChild(div);
    });
}

function mostrarTodos() {
    mostrarProductos(productos);
}

function mostrarFrutas() {
    const frutas =
        productos.filter(producto => producto.categoria === "fruta");

    mostrarProductos(frutas);
}

document.addEventListener("DOMContentLoaded", () => {

    mostrarMeriendas();
    iniciarTarjetas();

    if (document.getElementById("productos")) {
        mostrarProductos(productos);
    }
});