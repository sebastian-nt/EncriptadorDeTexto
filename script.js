const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje_final");
const muneco = document.getElementById("muneco");
const infoDerecha = document.getElementById("infoDerecha");
const copiar = document.getElementById("copiar");
const derecho = document.getElementById("derecho");
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function limpiar(){
    muneco.classList.add("oculto");
    infoDerecha.style.display = "none";
    copiar.style.display = "block";
    derecho.classList.add("ajustar");
    mensaje.classList.add("ajustar");
    textArea.value= "";
}

function botonEncriptar(){
    const textoEncriptado =  encriptar(textArea.value);
    if(textoEncriptado != ""){
        mensaje.innerHTML = textoEncriptado;
        limpiar(); 
    }
    /*mensaje.style.backgroundImage = "none";*/
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++ ){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function botonDesencriptar(){
    const textoEncriptado =  Desencriptar(textArea.value);
    if(textoEncriptado != ""){
        mensaje.innerHTML = textoEncriptado;
        textArea.innerHTML = "";
        limpiar();

    }
}

function Desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++ ){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto(){
    // Obtener el valor del input
    let texto = document.getElementById("mensajeFinal");
    // Seleccionar el contenido del input
    texto.select();
    texto.setSelectionRange(0, 99999); // Para móviles
    // Copiar el texto al portapapeles
    document.execCommand("copy");
    mensaje.innerHTML = "";
    muneco.classList.remove("oculto");
    infoDerecha.style.display = "block";
    copiar.style.display = "none";
    derecho.classList.remove("ajustar");
    mensaje.classList.remove("ajustar");
    textArea.focus();
}

