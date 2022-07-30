const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

let tamañoIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamañoIndicador + 'px';

let indexSeccionActiva;

// Observer
const observer = new IntersectionObserver((entradas, observer) => {
	entradas.forEach(entrada => {
		if(entrada.isIntersecting){
			// Obtenemos cual es la seccion que esta entrando en pantalla.

			// Creamos un arreglo con las secciones y luego obtenemos el index del la seccion que esta en pantalla.
			indexSeccionActiva = [...secciones].indexOf(entrada.target);
			indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
		}
	});
}, {
	rootMargin: '-80px 0px 0px 0px',
	threshold: 0.2
});

// Agregamos un observador para el hero.
observer.observe(document.getElementById('hero'));

// Asignamos un observador a cada una de las secciones
secciones.forEach(seccion => observer.observe(seccion));

// Evento para cuando la pantalla cambie de tamaño.
const onResize = () => {
	// Calculamos el nuevo tamaño que deberia tener el indicador.
	tamañoIndicador = menu.querySelector('a').offsetWidth;

	// Cambiamos el tamaño del indicador.
	indicador.style.width = `${tamañoIndicador}px`;

	// Volvemos a posicionar el indicador.
	indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
}

window.addEventListener('resize', onResize);

//fin header slider

const form = document.getElementById('form');
const nombre = document.getElementById('name');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const pass = document.getElementById('password');

form.addEventListener('submit', e =>{
    e.preventDefault()
    let entrar = false;
    if(nombre.value.length <= 2){
        alert('El nombre no es valido');
    }

    if(apellido.value.length <= 2){
        alert('El apellido no es valido');
    }

    if(usuario.value.length <= 6){
        alert('El usuario no es valido');
    }

	if(email.value.length <=8){
		alert('el email no es valido');
	}

    if(pass.value.length <= 8){
        alert('La constraseña no es valida');
    }
});