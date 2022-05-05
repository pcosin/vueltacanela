const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}




const $form = document.querySelector('#form')
const $inputs = document.querySelectorAll('#form input')
const campos = {
    nombre:false,
    telefono:false,
    email:false,
}

const validarForm = (e) =>{
    switch (e.target.name) {
        case 'nombre':
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("grupo__nombre").classList.remove('invalido');
                document.getElementById('grupo__nombre').classList.add('valido');
                campos.nombre =true;
            }else{
                document.getElementById('grupo__nombre').classList.add('invalido');
                campos.nombre =false;
            }
        break;
        case 'email':
            if(expresiones.correo.test(e.target.value)){
                document.getElementById("grupo__email").classList.remove('invalido');
                document.getElementById('grupo__email').classList.add('valido');
                campos.email =true;
            }else{
                document.getElementById('grupo__email').classList.add('invalido');
                campos.email =false;
            }
        break;
        case 'telefono':
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById("grupo__telefono").classList.remove('invalido');
                document.getElementById('grupo__telefono').classList.add('valido');
                campos.telefono =true;
            }else{
                document.getElementById('grupo__telefono').classList.add('invalido');
                campos.telefono =false;
            }
        break;
        
    }
}

$inputs.forEach((input) =>{
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})

    $form.addEventListener('submit', handleSubmit)

   
function handleSubmit(e){
    e.preventDefault()
    if(campos.nombre && campos.telefono && campos.email){
    susses();
    $('#mensajeInvalido').hide();
    $('#mensajeValido').show();
    }else{
        $('#mensajeValido').hide();
        $('#mensajeInvalido').show();
    }
    async function susses(){
        const form = new FormData($form)
        const response= await fetch($form.action, { 
                            method: $form.method,
                            body: form,
                            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.ok){
        $form.reset();
        }else{
            alert('Error con el servidor')
        }
    }
}
