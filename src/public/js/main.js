let menu = document.querySelector('#menu')
let menu_bar = document.querySelector('#menubar')
let btnBuscar = document.querySelector('#btnBuscar')

menu_bar.addEventListener('click', () => {
    if(menu.style.display=='none'){
        menu.classList.remove('ocultarMenu')
        menu.classList.add('mostrarMenu')
    }else{
        menu.classList.add('ocultarMenu')
        menu.classList.remove('mostrarMenu')
    }
})

btnBuscar.addEventListener('click', () => {
    if(buscador.style.display!='block'){
        document.querySelector('#buscador').style.display = 'block'
        document.querySelector('#EjecutarBusqueda').style.display = 'block'
    }else{
        document.querySelector('#buscador').style.display = 'none'
        document.querySelector('#EjecutarBusqueda').style.display = 'none'
    }
})