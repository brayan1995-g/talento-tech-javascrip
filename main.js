const v1="ti ben";
const v2="recuerda lo siguiente";
const v3="un gran poder requiere una gran responsabilidad";
const v4="ten cuidado con el halo verde";

const spiderman =(peligro)=>{
    if (peligro == true){ 
        return`como decia el ${v1} ${v2} ${v3}`;
         }else{ 
            return`como decia el ${v1} ${v4}`;
         }

};

// como crear titulo o text con javascript 
const titulo =document.createElement("h1")
titulo.textContent ="hola me llamo spiderman";
document.body.appendChild(titulo)

// como crear un botom con javascript 
const botom= document.createElement("button")
const botom2= document.createElement("button")

botom.innerText="peligro"
botom2.innerText="no peligro"

document.body.appendChild(botom);
document.body.appendChild(botom2);