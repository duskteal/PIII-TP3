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

listadoPaginas.forEach(pagina => {
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("tarjeta")
    tarjeta.innerHTML = `
    <h1>${pagina.nombre}</h1>
    <p class="descripcion">${pagina.descripcion}</p>`
    contenedorTarjetas.appendChild(tarjeta)
    tarjeta.addEventListener("click",()=>{
        window.location.href = `${pagina.link}`
    })
    }
);
const tarjetas = document.querySelectorAll(".tarjeta")

tarjetas.forEach(tarjeta =>{
        tarjeta.addEventListener("mouseenter",() =>
            {
            tarjeta.classList.add("tarjetaHover")
            }
        )
    }
)

const tarjetaHover = document.querySelectorAll(".tarjetaHover")

tarjetas.forEach(tarjeta =>{
        tarjeta.addEventListener("mouseleave",() =>
            {
            tarjeta.classList.remove("tarjetaHover")
            }
        )
    }
)