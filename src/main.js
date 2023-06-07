
const separador = " ";
const vocales = ["a", "e", "i", "o", "u"];
const vocalesEncriptadas = ["ai", "enter", "imes", "ober", "ufat"];
let mensajeEncriptado ="";
const totalVocales= vocales.length
let index = 0
let mensaje = document.getElementById("recibirMensaje");
const init= ()=>{  

  // if (mensaje.length >0) {
    return mensaje.value.trim().split(separador);
  // }else{
  //   mostrarMensajeError()
  // }
   
}

const encriptarMensaje = () => {
let separarPalabras = init()
let msmRecibir = document.getElementById("darMensaje") 
  for(let i = 0; i < separarPalabras.length; i++) {
    mensajeEncriptado += encriptar(separarPalabras[i].toLowerCase())+" ";
  };
  msmRecibir.value = mensajeEncriptado.trim();
  msmRecibir.style.backgroundImage = "none"
  mensajeEncriptado ="";
};

function encriptar(mensaje) {
if (!mensaje || mensaje.length <= 0) return "";
let mensajeRescrito = ""
while (index < mensaje.length) {
  if(vocales.indexOf(mensaje[index]) != -1) {
    for (let contador = 0; contador < totalVocales ; contador++) {
      if(mensaje[index] ==vocales[contador] ) mensajeRescrito += mensaje[index].replaceAll(vocales[contador], vocalesEncriptadas[contador]);
    }
  }else{
    mensajeRescrito += mensaje[index];
  }
  index++
 }
 index=0
return mensajeRescrito;
}

const desencriptarMensaje = () => {
let separarPalabras = init()  
for(let i = 0; i < separarPalabras.length; i++) {
  mensajeEncriptado += desencriptar(separarPalabras[i].toLowerCase())+" ";
};
document.getElementById("darMensaje").value = mensajeEncriptado.trim();
mensajeEncriptado ="";
};

function desencriptar(mensaje) {
  if (!mensaje || mensaje.length <= 0) return "";
  let mensajeRescrito = mensaje
  for (let contador = 0; contador < totalVocales ; contador++) {
    mensajeRescrito = mensajeRescrito.replaceAll(vocalesEncriptadas[contador], vocales[contador])
  }
  return mensajeRescrito;
}