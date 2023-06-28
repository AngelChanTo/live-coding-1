// Escribe tu código aquí.

//declaramos el array de entrada que es el parametro2

var parametro1 = "test123"; // 7
const parametro2 = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'hbfbkdddfgnflkdgdfkhl', 'estaesunaprueba', 'puedovolar', 'elmo', 'malo', 'amlo'];
                       //7         //8         //6      //6        //5    //10        //n palabras
function compara(par1, par2){
    let longitud1=par1.length;
    let resultado = [];
    for(let i=0; i<par2.length; i++){
        if(par2[i].length>longitud1){
             //declaro un arreglo vacio;
            resultado.push(par2[i]);
        }//cierre del if
    
    }//cierre del for
    return resultado; //['bootcamp', 'escritorio' , 'hbfbkdddfgnflkdgdfkhl'  ]
}//cierre funcion

//my array tiene 3 palabras bootcamp(i=0), escritorio(i=1), hbfbkdddfgnflkdgdfkhl(i=2)
let myArray = compara(parametro1, parametro2); //la funcion recibe parametros
const container = document.getElementById("listita");
const elementos = document.createElement("div");
let myString = ''; //definir un string vacio

//defini mi funcion para agregar los elementos del array
function agregarElementos(arreglo){
    for (let i=0; i<arreglo.length;i++) {

        myString+=`<li>${arreglo[i]}</li>`;
        
    }
    elementos.innerHTML = myString; //`<li>${myArray[0]}</li><li>${myArray[1]}</li><li>${myArray[2]}</li>`
    container.appendChild(elementos);
}

agregarElementos(myArray);
