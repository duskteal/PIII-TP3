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
        paisOrigen: "Japón"
    },
    {
        marca: "Triumph",
        modelo: "765 Street Triple",
        cilindrada: 765,
        motor: "Tricilíndrico en línea",
        potencia: 120,
        estilo: "Naked",
        paisOrigen: "Reino Unido"
    },
    {
        marca: "Ducati",
        modelo: "Diavel",
        cilindrada: 1200,
        motor: "Bicilindrico en L",
        potencia: 162,
        estilo: "Muscle Cruiser",
        paisOrigen: "Italia"
    },
    {
        marca: "BMW Motorrad",
        modelo: "R 1250 GS",
        cilindrada: 1250,
        motor: "Bicilíndrico tipo Boxer",
        potencia: 136,
        estilo: "Adventure",
        paisOrigen: "Alemania"
    },
    {
        marca: "Kawasaki",
        modelo: "ZX-10R",
        cilindrada: 1000,
        motor: "Tetracilíndrico en línea",
        potencia: 203,
        estilo: "Superbike",
        paisOrigen: "Japón"
    },
    {
        marca: "Honda",
        modelo: "CRF450RX",
        cilindrada: 450,
        motor: "Monocilíndrico Unicam",
        potencia: 202,
        estilo: "Enduro",
        paisOrigen: "Japón"
    }
];

const contenedorMotos = document.getElementById("contenedorMotos")

if(contenedorMotos){
        motocicletas.forEach(moto =>{
            const tarjetaMoto = document.createElement("div")
            tarjetaMoto.classList.add("tarjetaMoto")
            tarjetaMoto.innerHTML = `
                <h2>${moto.marca} ${moto.modelo}</h2>
                <p>Motor: ${moto.motor}</p>
                <p>Cilindrada: ${moto.cilindrada}cc</p>
                <p>Potencia: ${moto.potencia}CV</p>
                <p>Estilo: ${moto.estilo}</p>
                <p>País de orígen: ${moto.paisOrigen}</p>`
                contenedorMotos.appendChild(tarjetaMoto)
        }
        )
}