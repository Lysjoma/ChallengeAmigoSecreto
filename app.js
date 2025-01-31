// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arregloNombres = [];

function agregarAmigo(){
    let nombreIngresado = document.getElementById("amigo").value;

    if(nombreIngresado.trim() !== ""){
        if(arregloNombres.includes(nombreIngresado)){
            alert("La persona ya se encuentra registrada");
        }else{
            arregloNombres.push(nombreIngresado);
            actualizarLista();
        }
    }else{
        alert("El campo esta vacio, ingrese un nombre.");
    }
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    arregloNombres.forEach((nombre, posicion) =>{
        let li = document.createElement("li");
        li.textContent = `${posicion+1}. ${nombre}`;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    let posicionGanadora = Math.floor(Math.random()*arregloNombres.length);
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML="";
    let li = document.createElement("li");
    li.textContent = `Tu amigo secreto es ${arregloNombres[posicionGanadora]}`;
    resultado.appendChild(li);
}