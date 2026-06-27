function volverPaginaPrincipal(){
    window.location.href = "index.html"
}
document.addEventListener("DOMContentLoaded",()=>{ // Espera a cargar el contenido
    const navPrincipal = document.getElementById("navPrincipal")
    const botonNav = document.createElement("button")
    botonNav.textContent = "Volver a la Página Principal"
    botonNav.classList.add("botonNav")
    botonNav.addEventListener("click", ()=>{
        volverPaginaPrincipal()
    });

    navPrincipal.appendChild(botonNav)
})



const listadoPaginas = [
    {
        nombre: "Flexbox",
        descripcion: "Maquetación con Flexbox y JavaScript común",
        link: "flexbox.html"
    },
    {
        nombre: "Personas",
        descripcion: "Formulario y tabla de personas con HTML y JavaScript común",
        link: "personas.html"
    },
    {
        nombre: "React",
        descripcion: "Formulario y tabla de personas con React",
        link: "react.html"
    }
]

const contenedorTarjetas = document.getElementById("contenedorTarjetas")

if(contenedorTarjetas){
    listadoPaginas.forEach(pagina => {
        const tarjeta = document.createElement("button")
        tarjeta.classList.add("tarjeta")
        tarjeta.innerHTML = `
        <h1>${pagina.nombre}</h1>
        <p class="descripcion">${pagina.descripcion}</p>`
        contenedorTarjetas.appendChild(tarjeta)
        tarjeta.addEventListener("click",()=>{
            window.location.href = `${pagina.link}`
        }
        )
    }
    );
}


const tarjetas = document.querySelectorAll(".tarjeta")

tarjetas.forEach(tarjeta =>{
        tarjeta.addEventListener("mouseenter",() =>
            {
            tarjeta.classList.add("tarjetaHover")
            }
        )
    }
)

tarjetas.forEach(tarjeta =>{
        tarjeta.addEventListener("mouseleave",() =>
            {
            tarjeta.classList.remove("tarjetaHover")
            }
        )
    }
)

const motocicletas = [
    {
        marca: "Suzuki",
        modelo: "GSX-R",
        cilindrada: 1000,
        motor: "Tetracilíndrico en línea",
        potencia: 202,
        estilo: "Superbike",
        paisOrigen: "Japón",
        imagen: "suzuki.jpg"
    },
    {
        marca: "Triumph",
        modelo: "765 Street Triple",
        cilindrada: 765,
        motor: "Tricilíndrico en línea",
        potencia: 120,
        estilo: "Naked",
        paisOrigen: "Reino Unido",
        imagen: "triumph.jpg"
    },
    {
        marca: "Ducati",
        modelo: "Diavel",
        cilindrada: 1200,
        motor: "Bicilindrico en L",
        potencia: 162,
        estilo: "Muscle Cruiser",
        paisOrigen: "Italia",
        imagen: "ducati.jpg"
    },
    {
        marca: "BMW Motorrad",
        modelo: "R 1250 GS",
        cilindrada: 1250,
        motor: "Bicilíndrico tipo Boxer",
        potencia: 136,
        estilo: "Adventure",
        paisOrigen: "Alemania",
        imagen: "bmw.jpg"
    },
    {
        marca: "Kawasaki",
        modelo: "ZX-10R",
        cilindrada: 1000,
        motor: "Tetracilíndrico en línea",
        potencia: 203,
        estilo: "Superbike",
        paisOrigen: "Japón",
        imagen: "kawasaki.jpg"
    },
    {
        marca: "Honda",
        modelo: "CRF450RX",
        cilindrada: 450,
        motor: "Monocilíndrico Unicam",
        potencia: 202,
        estilo: "Enduro",
        paisOrigen: "Japón",
        imagen: "honda.jpg"
    }
];




                


const contenedorMotos = document.getElementById("contenedorMotos")

        motocicletas.forEach(moto =>{
            const tarjetaMoto = document.createElement("div")
            tarjetaMoto.classList.add("tarjetaMoto")

            tarjetaMoto.addEventListener("mouseenter", ()=>{
                    tarjetaMoto.classList.add("tarjetaHover")
                    console.log(mostrarMoto)
                })
                

                tarjetaMoto.addEventListener("mouseleave", ()=>{
                    tarjetaMoto.classList.remove("tarjetaHover")
                    console.log(mostrarMoto)
                })

                document.addEventListener("DOMContentLoaded", ()=>{

                tarjetaMoto.innerHTML = 
                    `
                    <h1 class="nombreMoto">${moto.marca} ${moto.modelo}</h1>
                    <p>Motor: <span class="datoMoto">${moto.motor}</span></p>
                    <p>Cilindrada: <span class="datoMoto">${moto.cilindrada}cc</span></p>
                    <p>Potencia: <span class="datoMoto">${moto.potencia}CV</span></p>
                    <p>Estilo: <span class="datoMoto">${moto.estilo}</span></p>
                    <p>País de orígen: <span class="datoMoto">${moto.paisOrigen}</span></p>
                    <img class=".motoMostrar" src="${moto.imagen}" alt="${moto.modelo}" width="60%" height="40%">
                    `
                    contenedorMotos.appendChild(tarjetaMoto)

                    }
                )
                    
            }

            
                
                
        
        )


const Personas = [];
 
const formularioJS = document.getElementById("formularioJS")

const inputNombre = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
const inputEdad = document.getElementById("inputEdad")
const inputAltura = document.getElementById("inputAltura")
const inputPeso = document.getElementById("inputPeso")

const bodyTabla = document.getElementById("bodyTabla")

function renderTabla(){
    

    Personas.forEach(persona =>{
        const fila = document.createElement("tr")

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = persona.nombre;

        const celdaApellido = document.createElement("td");
        celdaApellido.textContent = persona.apellido;

        const celdaEdad = document.createElement("td");
        celdaEdad.textContent = persona.edad;

        const celdaAltura = document.createElement("td");
        celdaAltura.textContent = persona.altura;

        const celdaPeso = document.createElement("td");
        celdaPeso.textContent = persona.peso;

        fila.appendChild(celdaNombre)
        fila.appendChild(celdaApellido)
        fila.appendChild(celdaEdad)
        fila.appendChild(celdaAltura)
        fila.appendChild(celdaPeso)
 
        bodyTabla.appendChild(fila)

        bodyTabla.innerHTML = "";
    }) // fin foreach
} // fin render

formularioJS.addEventListener("submit", event =>{
    event.preventDefault();

    const valorNombre = inputNombre.value.trim();
    const valorApellido = inputApellido.value.trim();
    const valorEdad = inputEdad.value;
    const valorAltura = inputAltura.value;
    const valorPeso = inputPeso.value;

//     if (valorNombre === ""|| 
//         valorApellido === "" || 
//         valorEdad === "" || 
//         valorEdad <= 0|| 
//         valorAltura === "" || 
//         valorAltura <= 0 || 
//         valorPeso === "" || 
//         valorPeso <= 0) {
//     return;
//   }

  Personas.push({
    nombre: valorApellido,
    apellido: valorApellido,
    edad: Number(valorEdad),
    altura: Number(valorAltura),
    peso: Number(valorPeso)
  });

  renderTabla();
  formularioJS.reset();
})