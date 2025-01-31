// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creación de variables globales para el Challenge.
//Variable donde esta la lista de jugadores.
let arregloNombres = [];

//Variable contador para que no se pueda iniciar el juego sin 2 jugadores o menos.
let contador =1;

//Función Agregar amigo para agregar un amigo al hacerle click al botón agregar.
function agregarAmigo(){
    let nombreIngresado = document.getElementById("amigo").value;

    document.getElementById("button-draw").disabled=false;

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
    limpiarCampo();
}

//Función actualizar lista para que los nombres registrados aparezcan en pantalla.
function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML="";
    arregloNombres.forEach((nombre, posicion) =>{
        let li = document.createElement("li");
        li.textContent = `${posicion+1}. ${nombre}`;
        lista.appendChild(li);
    });
}

//Función del botón sortear amigo donde se saca un jugador al azar y se valida que en el primer intento hayan más de dos jugadores.
function botonSortearAmigo(){
    if(contador<=1){
        if(arregloNombres.length<=2){
            alert("Se necesitan por lo menos 3 personas para iniciar el juego");
        }else{
            sorteoDelAmigo();
        }
    }else{
        sorteoDelAmigo();
    }
}

//Función limpar campo para limpiar el input despues de agregar un jugador.
function limpiarCampo(){
    document.getElementById("amigo").value ="";
}

//Función reiniciar el juego que borra todas las listas y devuelve todos los parametros a su inicio para poder jugar de nuevo.
function reiniciarJuego(){

    arregloNombres = [];
    document.getElementById("button-draw").style.visibility="visible";
    document.getElementById("button-draw").style.opacity = 100;
    document.getElementById("button-draw").disabled=true;

    limpiarCampo();

    document.getElementById("listaAmigos").innerHTML="";

    document.getElementById("resultado").innerHTML="";
    contador=1;
}

//Función sorteo del amigo que realiza toda la logica de sacar el jugador random y elimina al jugador del arreglo para que no se repita.
function sorteoDelAmigo(){
    let posicionGanadora = Math.floor(Math.random()*arregloNombres.length);

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";

    let resultado = document.getElementById("resultado");
    resultado.innerHTML="";

    let li = document.createElement("li");

    li.textContent = `Tu amigo secreto es ${arregloNombres[posicionGanadora]}`;

    resultado.appendChild(li);

    if(arregloNombres.includes(arregloNombres[posicionGanadora])){
        arregloNombres.splice(posicionGanadora,1);
        if(arregloNombres.length==0){
            document.getElementById("button-draw").disabled=true;

            alert("Ya todos los jugadores han salido, el juego ha finalizado");
        }
    }
        contador++;
        console.log(arregloNombres);
        console.log(contador);
}