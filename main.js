
//------------- clases

class Cañas {
    constructor(marca, nombre, medida, tramos, precio, stock, id){
        this.marca = marca;
        this.nombre = nombre;
        this.medida = medida;
        this.tramos = tramos;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
    }
}

//-----------  variables 
const addButton = document.getElementById("addBtn");
const divCañas = document.getElementById("cañas");
const listButton = document.getElementById("listBtn");
const albatrosButton = document.getElementById("albatrosBtn")
const container = document.querySelector("#data");
// const deleteElm = document.getElementById('removeBtn');
const addCañasElm = document.getElementById("btnAddCañasElm");

// Lista con boton para eliminar productos

const caña1 = new Cañas("ALBATROS","BRONCO","270", 2,13000, 2, 1);
const caña2 = new Cañas("ALBATROS","DORADILLO","210", 1, 7500, 4, 2);
const caña3 = new Cañas("ALBATROS","COAST","420", 4, 15000, 4, 3);
const caña4 = new Cañas("ALBATROS","CHAMPION","180", 2, 9000, 10, 4);
const caña5 = new Cañas("ALBATROS","BRONCO","240", 2, 13000, 15, 5);

// Array de los productos 


const listCañasElm = JSON.parse(localStorage.getItem("cañas")) || [caña1, caña2, caña3, caña4, caña5]

const containerElmCañas = document.getElementById("cañasDeleteBtn");

const listElmAndStorage = JSON.parse(localStorage.getItem("cañas"));

const pintarCañasElm = ()=> {
listCañasElm.forEach((cañaElm) => { 
    const divContainer = document.createElement('div');
    divContainer.innerHTML =`
        <div class="divElmCañas">
            <h2> Marca: ${cañaElm.marca}</h2>
            <h2> Nombre : ${cañaElm.nombre}</h2>
            <h3> Medida: ${cañaElm.medida}</h3>
            <h3> Tramos: ${cañaElm.tramos}</h3>
            <h3 id="precioCaña"> Precio: $${cañaElm.precio}</h3>
            <h3> Stock: ${cañaElm.stock}</h3>
            <h3> ID:${cañaElm.id}</h3>

                <div class="div-remove-card">
                    <button id="boton${cañaElm.id}" class="removeElmCañas" onclick= "removeCañasElm(${cañaElm.id})">Eliminar</button>
                </div>
        </div>
        `
        containerElmCañas.appendChild(divContainer)
    });
}




//BOTON PARA BORRAR CAÑAS-ELM



const removeCañasElm = (id) => {
    const elm = listCañasElm.find((elm) => elm.id === id);
    listCañasElm.splice(listCañasElm.indexOf(elm), 1);
    console.log(listCañasElm);
    actualizarCañasElm();
    
};


// FUNCION PARA ACTUALIZAR LISTA DESPUES DE BORRAR CAÑAS-ELM


function actualizarCañasElm() {
    let aux = '';
    listCañasElm.forEach((cañaElm) => {
        aux += `
        <div class="divElmCañas">
        <h2> Marca: ${cañaElm.marca}</h2>
        <h2> Nombre : ${cañaElm.nombre}</h2>
        <h3> Medida: ${cañaElm.medida}</h3>
        <h3> Tramos: ${cañaElm.tramos}</h3>
        <h3> Precio: $${cañaElm.precio}</h3>
        <h3> Stock: ${cañaElm.stock}</h3>
        <h3> ID:${cañaElm.id}</h3>
        <div class="div-remove-card">
        <button id="boton${cañaElm.id}" class="removeElmCañas" onclick= "removeCañasElm(${cañaElm.id})">Eliminar</button>
        </div>
        </div>
        `
    })
    containerElmCañas.innerHTML = aux;
    
}




// LISTA DEL LocalStorage


const listaCañas =  [    
    { marca:"ALBATROS", nombre:"DORADILLO", medida:"180", tramos: 1, precio: 7500, stock: 4, id:6},
    { marca:"ALBATROS", nombre: "HULK", medida:"210", tramos: 2, precio: 9300, stock: 3, id:7},
    { marca:"ALBATROS",nombre: "HULK", medida: "180", tramos:2, precio: 10000, stock: 2, id:8},
    { marca:"ALBATROS", nombre:"COAST", medida:"360", tramos: 4, precio: 15000, stock: 4, id:9},
    { marca:"ALBATROS", nombre: "CHAMPION", medida:"210", tramos: 2, precio: 9000, stock: 10, id:10},
];


//Funcion para agregar caña

const crearCaña = () => {
    const marca = document.getElementById("marca").value;
    const nombre = document.getElementById("nombre").value;
    const medida = document.getElementById("medida").value;
    const tramos = document.getElementById("tramos").value;
    const precio = document.getElementById("precio").value;
    const stock = document.getElementById("stock").value;
    
    const cañaNueva = new Cañas(marca, nombre, medida, tramos, precio, stock);
    listCañasElm.push (cañaNueva);
    localStorage.setItem("cañas", JSON.stringify(listCañasElm));
    actualizarCañasElm();
}



// Funcion para imprimir lista en pantalla


const pintarCañas = ()=> {
    listaCañas.forEach(caña => {
        divCañas.innerHTML += `
        <div class="div-lista">
        <h2> Marca: ${caña.marca}</h2>
        <h2> Nombre : ${caña.nombre}</h2>
        <h3> Medida: ${caña.medida}</h3>
        <h3> Tramos: ${caña.tramos}</h3>
        <h3> Precio: $${caña.precio}</h3>
        <h3> Stock: ${caña.stock}</h3>
        <h3> ID:${caña.id}</h3>
                

        </div>
        `
    })    
}


// ----- Cargar lista de base de datos



const getData = () => {
    fetch("./lexus.json")
    .then(response => response.json())
    .then(result => {
        result.forEach(caña => {
            container.innerHTML += `
            <div>
            <h2>Marca: ${caña.marca}</h2>
            <h2>Modelo: ${caña.nombre}</h2>
            <h3>Medida: ${caña.medida}</h3>
            <h3>Tramos: ${caña.tramos}</h3>
            <h3>Precio: $${caña.precio}</h3>
            <h3>Stock: ${caña.stock}</h3>
            </div>
            `
        })
    })
}



//--------------- Eventos 


// Agregar caña



addButton.addEventListener("click", (e)=> {
    e.preventDefault();
    crearCaña();
})


// Imprimir la lista en pantalla

albatrosButton.addEventListener("click", (e) => {
    pintarCañas();
}, { once: true});


listButton.addEventListener("click", (e) => {
    getData();
}, { once: true});



addCañasElm.addEventListener('click', (e) => {
    pintarCañasElm();
}, {once: true});

///

const listaAlbatros = listaCañas.filter(caña => caña.nombre === 'HULK')

console.log(listaAlbatros);


/// Libraries

$("#swAlert").click(function(){
    Swal.fire({
        title: 'Estas entrando a WALD',
        html: '<a href="http://www.wald.com.ar/</a>">PÁGINA DE WALD</a>'
})
});	


const askRemove = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
        )
    }
})
}