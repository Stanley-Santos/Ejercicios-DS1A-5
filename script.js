let Numero1= document.getElementById("numero1")
let Numero2= document.getElementById("numero2")
let resultado= document.getElementById("Resultado")

function obtenerNumero(){
    if(Numero1.value.trim()===""||Numero2.value.trim()==="")
{
    resultado.textContent="Escribe los dos numeros";
    return null;
}

let a= Number(Numero1.value);
let b= Number(Numero2.value);
return[a,b];
}

document.getElementById("sumar").addEventListener("click",function(){
    let numeros= obtenerNumero();
    if(numeros===null)return;
    resultado.textContent="Resultado: "+(numeros[0]+numeros[1])
})
document.getElementById("restar").addEventListener("click",function(){
    let numeros= obtenerNumero();
    if(numeros===null)return;
    resultado.textContent="Resultado: "+(numeros[0]-numeros[1])
})
document.getElementById("multiplicar").addEventListener("click",function(){
    let numeros= obtenerNumero();
    if(numeros===null)return;
    resultado.textContent="Resultado: "+(numeros[0]*numeros[1])
})
document.getElementById("dividir").addEventListener("click",function(){
    let numeros= obtenerNumero();
    if(numeros===null)return;

    if(numero[1]===0){
        resultado.textContent="No se puede dividir entre cero";
    } else{
            resultado.textContent="Resultado: "+(numeros[0]/numeros[1])
    }
    
});