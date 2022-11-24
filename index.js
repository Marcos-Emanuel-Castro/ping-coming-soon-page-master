const input = document.querySelector('#input-name');
const submit = document.querySelector('.button');
const textError = document.querySelector('#text-error');

const expresiones = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
} 

var campos = false;

const validarFormulario = () => {
    if(expresiones.email.test(input.value)){
        textError.classList.add('inactive');
        input.classList.remove('active-border');
        input.classList.add('inactive-border');
        campos = true;
    }else {
        textError.classList.remove('inactive');
        input.classList.add('active-border');
        input.classList.remove('inactive-border');
        campos = false
    }
}

input.addEventListener('keyup', validarFormulario);
input.addEventListener('blur', validarFormulario);


submit.addEventListener('click', ()=>{
    if(campos == true){
        input.value = '';
    }
});