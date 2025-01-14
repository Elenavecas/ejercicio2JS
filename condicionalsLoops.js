//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//CONDICIONALES

//Ejercicio 1: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'

/*const age = 18
if (age >= 18) {console.log("Eres Mayor de edad")
} 
else {console.log("Eres menor de edad");
} */
//Escribe tu código aquí


//Ejercicio 2: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.
const age = 12
if (age >= 18) {console.log("Eres Mayor de edad")
} 
else {console.log("Eres menor de edad");
}

//Ejercicio 3: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"
/*const pet = "perro";*/

    
//Escribe tu código aquí
/*if (pet == "perro") {console.log("Tengo un perro")}
else if (pet == "gato") {console.log("tengo un gato")}
else if (pet == "pajaro") {console.log("tengo un pajaro")}
else {console.log("no tengo una mascota condicional")} */

//Ejercicio 4: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.
const pet = "serpiente";
if (pet == "perro") {console.log("Tengo un perro")}
else if (pet == "gato") {console.log("tengo un gato")}
else if (pet == "pajaro") {console.log("tengo un pajaro")}
else {console.log("no tengo una mascota condicional")}

//Ejercicio 5: Haz el mismo ejercicio 3, pero con el condicional switch.

//Escribe tu código aquí


    switch (pet) {
    case "perro":
        console.log("Tengo un perro");
        break;
    case "gato":
        console.log("Tengo un gato");
        break;
    case "pajaro":
        console.log("Tengo un pajaro");
        break;
    default:
        console.log("no tengo mascota convencional")
        break;
    }
//Ejercicio 6: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"
/*const weather = "soleado"

const result = weather ===  "soleado" ? "Me vestiré con un vestido" : "Me vestiré con pantalon" //Escribe tu código aquí;

console.log(result)*/


//Ejercicio 7: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.

const weather = "frío"

const result = weather ===  "soleado" ? "Me vestiré con un vestido" : "Me vestiré con pantalon" //Escribe tu código aquí;

console.log(result)

//Ejercicio 8: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.

const value = '1'
if (typeof value ==="number") {console.log("Es un número");}
else if (typeof value === "string") {console.log("es un string");}
else {console.log("ni es numero ni string");  }
//Escribe tu código aquí


//BUCLES

//Ejercicio 9: Imprime en consola una lista del 0 al 10 con el bucle for

for (let i = 0; i<11; i++) {console.log("iteración nñumero: " +i)}
//Escribe tu código aquí


//Ejercicio 10: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 

const programmers = [
    {
        name: 'Ada',
        lastname: 'Lovelace',
        knowledge: 'la máquina analítica'
    },
    {
        name: 'Margaret',
        lastname: 'Hamilton',
        knowledge: 'el programa espacial Apolo'
    },
    {
        name: 'Grace',
        lastname: 'Hopper',
        knowledge: 'el lenguaje Cobol'
    },
    {
        name: 'Hedy',
        lastname: 'Lamarr',
        knowledge: 'el wifi'
    }     
]
for (let programadora in programmers ) {console.log(programadora + ": " + programmers[programadora].name + " " + programmers[programadora].lastname + ", su aporte fue " + programmers[programadora].knowledge);}
//Escribe tu código aquí


//Ejercicio 11: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.

const names = ['Rocío', 'Lola', 'Antía', 'Laura', 'Noelia']
for (let nombre of names) {console.log("Hola mi nombre es " +nombre);}
//Escribe tu código aquí


//Ejercicio 12: Con un bucle while imprime en consola una lista del 1 al 5.

//Escribe tu código aquí
let contador = 1;
while (contador <=5) {console.log("Lista: " + contador);
    contador++;
}



//Ejercicio 13: Realiza el mismo ejercicio anterior pero con un bucle do while.
let num = 1;
do {console.log("el numero es: " + num); num++;}
while (num <=5);

//Escribe tu código aquí
