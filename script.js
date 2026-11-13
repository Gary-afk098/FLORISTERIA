
// =====================================
// ROSEPARADISE - CATÁLOGO DE FLORES
// =====================================

const flores = [
    // ROSAS
    { id: 1, nombre: "Rosa roja", categoria: "Rosas", precio: 3.50, emoji: "🌹", descripcion: "Símbolo de amor y pasión." },
    { id: 2, nombre: "Rosa blanca", categoria: "Rosas", precio: 3.75, emoji: "🤍", descripcion: "Elegancia y pureza." },
    { id: 3, nombre: "Rosa rosada", categoria: "Rosas", precio: 3.80, emoji: "🌸", descripcion: "Dulzura y admiración." },
    { id: 4, nombre: "Rosa amarilla", categoria: "Rosas", precio: 3.60, emoji: "🌼", descripcion: "Alegría y amistad." },
    { id: 5, nombre: "Rosa naranja", categoria: "Rosas", precio: 3.90, emoji: "🌺", descripcion: "Energía y entusiasmo." },
    { id: 6, nombre: "Rosa lavanda", categoria: "Rosas", precio: 4.20, emoji: "🪻", descripcion: "Encanto y originalidad." },
    { id: 7, nombre: "Rosa azul", categoria: "Rosas", precio: 4.50, emoji: "💠", descripcion: "Misterio y creatividad." },
    { id: 8, nombre: "Rosa champán", categoria: "Rosas", precio: 4.00, emoji: "🥀", descripcion: "Distinción y elegancia." },

    // TULIPANES
    { id: 9, nombre: "Tulipán rojo", categoria: "Tulipanes", precio: 3.20, emoji: "🌷", descripcion: "Amor verdadero." },
    { id: 10, nombre: "Tulipán amarillo", categoria: "Tulipanes", precio: 3.30, emoji: "🌷", descripcion: "Luz y felicidad." },
    { id: 11, nombre: "Tulipán blanco", categoria: "Tulipanes", precio: 3.40, emoji: "🌷", descripcion: "Paz y tranquilidad." },
    { id: 12, nombre: "Tulipán rosado", categoria: "Tulipanes", precio: 3.50, emoji: "🌷", descripcion: "Cariño y ternura." },
    { id: 13, nombre: "Tulipán morado", categoria: "Tulipanes", precio: 3.70, emoji: "🌷", descripcion: "Realeza y admiración." },
    { id: 14, nombre: "Tulipán naranja", categoria: "Tulipanes", precio: 3.60, emoji: "🌷", descripcion: "Entusiasmo y energía." },

    // TROPICALES
    { id: 15, nombre: "Orquídea", categoria: "Tropicales", precio: 12.00, emoji: "🪷", descripcion: "Belleza y sofisticación." },
    { id: 16, nombre: "Ave del paraíso", categoria: "Tropicales", precio: 8.50, emoji: "🌺", descripcion: "Exotismo y libertad." },
    { id: 17, nombre: "Anturio rojo", categoria: "Tropicales", precio: 7.00, emoji: "🌺", descripcion: "Color y elegancia." },
    { id: 18, nombre: "Hibisco", categoria: "Tropicales", precio: 5.50, emoji: "🌺", descripcion: "Belleza tropical." },
    { id: 19, nombre: "Heliconia", categoria: "Tropicales", precio: 9.00, emoji: "🌿", descripcion: "Diseño natural exótico." },
    { id: 20, nombre: "Plumeria", categoria: "Tropicales", precio: 6.50, emoji: "🌸", descripcion: "Aroma y delicadeza." },

    // FLORES VARIADAS
    { id: 21, nombre: "Girasol", categoria: "Variadas", precio: 4.50, emoji: "🌻", descripcion: "Alegría y energía positiva." },
    { id: 22, nombre: "Lirio blanco", categoria: "Variadas", precio: 5.00, emoji: "💮", descripcion: "Pureza y serenidad." },
    { id: 23, nombre: "Margarita", categoria: "Variadas", precio: 2.50, emoji: "🌼", descripcion: "Sencillez y alegría." },
    { id: 24, nombre: "Peonía", categoria: "Variadas", precio: 8.00, emoji: "🌸", descripcion: "Romance y prosperidad." },
    { id: 25, nombre: "Clavel rojo", categoria: "Variadas", precio: 3.00, emoji: "🌺", descripcion: "Afecto y admiración." },
    { id: 26, nombre: "Lavanda", categoria: "Variadas", precio: 4.00, emoji: "🪻", descripcion: "Calma y tranquilidad." },
    { id: 27, nombre: "Dalia", categoria: "Variadas", precio: 5.50, emoji: "🌺", descripcion: "Creatividad y elegancia." },
    { id: 28, nombre: "Gerbera", categoria: "Variadas", precio: 3.80, emoji: "🌼", descripcion: "Optimismo y felicidad." },
    { id: 29, nombre: "Jazmín", categoria: "Variadas", precio: 4.20, emoji: "🌸", descripcion: "Delicadeza y aroma." },
    { id: 30, nombre: "Gardenia", categoria: "Variadas", precio: 6.00, emoji: "🤍", descripcion: "Belleza y elegancia." }
];

// =====================================
// ELEMENTOS DEL HTML
// =====================================

const productosGrid = document.getElementById("productosGrid");
const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtroCategoria");
const mensajeVacio = document.getElementById("mensajeVacio");

const listaCarrito = document.getElementById("listaCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");

const vaciarCarrito = document.getElementById("vaciarCarrito");
const finalizarCompra = document.getElementById("finalizarCompra");

const menuToggle = document.getElementById("menuToggle");
const navegacion = document.getElementById("navegacion");

// Carrito inicialmente vacío
let carrito = [];

// =====================================
// FORMATO DE PRECIOS
// =====================================

function formatoDinero(valor) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valor);
}

// =====================================
// MOSTRAR LAS FLORES
// =====================================

function mostrarProductos(lista) {
    productosGrid.innerHTML = "";

    mensajeVacio.hidden = lista.length > 0;

    lista.forEach(function(flor) {
        const tarjeta = document.createElement("article");
        tarjeta.className = "producto";

        const imagen = document.createElement("div");
        imagen.className = "producto-imagen";
        imagen.textContent = flor.emoji;

        const informacion = document.createElement("div");
        informacion.className = "producto-info";

        const categoria = document.createElement("p");
        categoria.className = "producto-categoria";
        categoria.textContent = flor.categoria;

        const nombre = document.createElement("h3");
        nombre.textContent = flor.nombre;

        const descripcion = document.createElement("p");
        descripcion.className = "producto-descripcion";
        descripcion.textContent = flor.descripcion;

        const precio = document.createElement("p");
        precio.className = "producto-precio";
        precio.textContent = formatoDinero(flor.precio);

        const boton = document.createElement("button");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", function() {
            agregarAlCarrito(flor.id);
        });

        informacion.appendChild(categoria);
        informacion.appendChild(nombre);
        informacion.appendChild(descripcion);
        informacion.appendChild(precio);
        informacion.appendChild(boton);

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(informacion);

        productosGrid.appendChild(tarjeta);
    });
}

// =====================================
// BUSCADOR Y FILTROS
// =====================================

function filtrarProductos() {
    const texto = buscador.value.toLowerCase().trim();
    const categoriaSeleccionada = filtroCategoria.value;

    const resultado = flores.filter(function(flor) {
        const coincideNombre = flor.nombre.toLowerCase().includes(texto);

        const coincideCategoria =
            categoriaSeleccionada === "Todas" ||
            flor.categoria === categoriaSeleccionada;

        return coincideNombre && coincideCategoria;
    });

    mostrarProductos(resultado);
}

buscador.addEventListener("input", filtrarProductos);

filtroCategoria.addEventListener("change", filtrarProductos);

// =====================================
// AGREGAR PRODUCTOS AL CARRITO
// =====================================

function agregarAlCarrito(id) {
    const flor = flores.find(function(producto) {
        return producto.id === id;
    });

    const productoExistente = carrito.find(function(item) {
        return item.id === id;
    });

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            id: flor.id,
            nombre: flor.nombre,
            precio: flor.precio,
            cantidad: 1
        });
    }

    actualizarCarrito();
}

// =====================================
// MODIFICAR CANTIDADES
// =====================================

function cambiarCantidad(id, cambio) {
    const producto = carrito.find(function(item) {
        return item.id === id;
    });

    if (!producto) {
        return;
    }

    producto.cantidad += cambio;

    if (producto.cantidad <= 0) {
        carrito = carrito.filter(function(item) {
            return item.id !== id;
        });
    }

    actualizarCarrito();
}

// =====================================
// ACTUALIZAR CARRITO
// =====================================

function actualizarCarrito() {
    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.className = "carrito-vacio";
        mensaje.textContent = "Todavía no has agregado flores.";
        listaCarrito.appendChild(mensaje);
    }

    carrito.forEach(function(item) {
        const fila = document.createElement("div");
        fila.className = "item-carrito";

        const informacion = document.createElement("div");

        const nombre = document.createElement("h4");
        nombre.textContent = item.nombre;

        const precio = document.createElement("p");
        precio.textContent = formatoDinero(item.precio * item.cantidad);

        informacion.appendChild(nombre);
        informacion.appendChild(precio);

        const controles = document.createElement("div");
        controles.className = "cantidad-controles";

        const botonMenos = document.createElement("button");
        botonMenos.textContent = "-";
        botonMenos.setAttribute("aria-label", "Disminuir cantidad");

        botonMenos.addEventListener("click", function() {
            cambiarCantidad(item.id, -1);
        });

        const cantidad = document.createElement("span");
        cantidad.textContent = item.cantidad;

        const botonMas = document.createElement("button");
        botonMas.textContent = "+";
        botonMas.setAttribute("aria-label", "Aumentar cantidad");

        botonMas.addEventListener("click", function() {
            cambiarCantidad(item.id, 1);
        });

        controles.appendChild(botonMenos);
        controles.appendChild(cantidad);
        controles.appendChild(botonMas);

        fila.appendChild(informacion);
        fila.appendChild(controles);

        listaCarrito.appendChild(fila);
    });

    // Calcular cantidad de unidades
    const cantidadTotal = carrito.reduce(function(acumulado, item) {
        return acumulado + item.cantidad;
    }, 0);

    // Calcular precio total
    const valorTotal = carrito.reduce(function(acumulado, item) {
        return acumulado + item.precio * item.cantidad;
    }, 0);

    contadorCarrito.textContent = cantidadTotal;
    subtotal.textContent = formatoDinero(valorTotal);
    total.textContent = formatoDinero(valorTotal);
}

// =====================================
// VACIAR CARRITO
// =====================================

vaciarCarrito.addEventListener("click", function() {
    carrito = [];
    actualizarCarrito();
});

// =====================================
// PREPARAR PEDIDO POR WHATSAPP
// =====================================

finalizarCompra.addEventListener("click", function() {
    if (carrito.length === 0) {
        alert("Primero debes agregar flores al carrito.");
        return;
    }

    let mensaje = "Hola, RoseParadise. Quiero realizar este pedido:\n\n";

    carrito.forEach(function(item) {
        mensaje += "- " + item.nombre +
            " x " + item.cantidad +
            ": " + formatoDinero(item.precio * item.cantidad) + "\n";
    });

    const valorTotal = carrito.reduce(function(acumulado, item) {
        return acumulado + item.precio * item.cantidad;
    }, 0);

    mensaje += "\nTotal: " + formatoDinero(valorTotal);

    // Número ficticio de ejemplo, reemplazar por el real.
    const telefono = "12025550147";

    const enlace = "https://wa.me/" + telefono +
        "?text=" + encodeURIComponent(mensaje);

    window.open(enlace, "_blank");
});

// =====================================
// MENÚ PARA CELULARES
// =====================================

menuToggle.addEventListener("click", function() {
    navegacion.classList.toggle("activo");
});

navegacion.querySelectorAll("a").forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        navegacion.classList.remove("activo");
    });
});

// =====================================
// INICIAR LA PÁGINA
// =====================================

mostrarProductos(flores);
actualizarCarrito();
