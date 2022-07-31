const enlaces = document.getElementsByClassName('nav--list')[0];
const hamburguesa = document.getElementsByClassName('hamburguesa')[0];
const menuHamburguesa = document.getElementById('hamburguesa');
let abierto = false;

const toggleMenu = () =>{
    enlaces.classList.toggle('enlaces2');
    enlaces.style.transition = 'transform 0.5s ease-in-out';
}

hamburguesa.addEventListener('click', function(){
    toggleMenu();
    if(document.querySelector('.nav--list.enlaces2')){
        abierto=true;
    }else{
        abierto=false;
    }
})

window.addEventListener('click', function(e){
    this.console.log(e.target);
    if(abierto){
        if(e.target !== menuHamburguesa){
            toggleMenu();
            abierto=false;
        }
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 800){
        if(abierto){
            toggleMenu();
            enlaces.style.transition = 'none';
            abierto = false;
        }
    }
})

// fin menu hamburguesa.


const form = document.getElementById('form');
const nombre = document.getElementById('name');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const pass = document.getElementById('password');

form.addEventListener('submit', e =>{
    e.preventDefault()
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

//fin form footer

const form2 = document.getElementById('form2')
const nombre2 = document.getElementById('nombre2');
const apellido2 = document.getElementById('apellido2');
const email2 = document.getElementById('email2');


form2.addEventListener('submit', e =>{
    e.preventDefault();

    if(nombre2.value.length <= 2){
        alert('el nombre del formulario no es valido');
    }

    if(apellido2.value.length <= 2){
        alert('El apellido del formulario no es valido');
    }

    if(email2.value.length <=8){
		alert('el email del formulario no es valido');
	}

    if(document.getElementById('samsung').checked){
        alert('Marca seleccionada samsung');
    }

    if(document.getElementById('iphone').checked){
        alert('Marca seleccionada iphone');
    }

    if(document.getElementById('otro').checked){
        alert('Marca seleccionada otro');
    }
});


