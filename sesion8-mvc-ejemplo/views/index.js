const API_URI= 'http://localhost:5000'

document.getElementById('send').addEventListener('click',(event)=>{
    event.preventDefault();
    guardarUsuario();
});

function guardarUsuario(){
    const userData = new  FormData(document.getElementById('user'));
    fetch(API_URI,{
        method: 'POST',
        body: userData
    }).then
}