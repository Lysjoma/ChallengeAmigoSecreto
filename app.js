// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arregloNombres = [];
let contador =1;

function agregarAmigo(){
    let nombreIngresado = document.getElementById("amigo").value;

    let botonJugar = document.getElementById("button-draw").disabled=false;

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

function limpiarCampo(){
    document.getElementById("amigo").value ="";
}

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