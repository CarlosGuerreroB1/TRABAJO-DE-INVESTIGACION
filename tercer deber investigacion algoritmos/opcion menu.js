const read = require('prompt-sync')();
const write = console.log;

function mostrarMenu() {
  write("1. Ejercicio 1 Celsius a Fahrenheit");
  write("2. Ejercicio 2 presente el doble y el triple del número");
  write("3. Ejercicio 3 suma y su media aritmética");
  write("4. Ejercicio 4 De libra a Kilogramos y gramos");
  write("5. Ejercicio 5 Expresion Matematica");
  write("6. Ejercicio 6 Calculo de Sueldo");
  write("7. Ejercicio 7 mayor de los dos siempre y cando el primero sea par y el segundo impar");
  write("8. Ejercicio 8 Letras Comprendidas");
  write("9. Ejercicio 9 Valor a Pagar");
  write("10. Ejercicio 10 ALGORITMOX");
  write("11. Ejercicio 11 Dia y Nombre");
  write("12. Ejercicio 12 Mes y Nombre");
  write("13. Ejercicio 13 Arreglo Nombres");
  write("14. Ejercicio 14 Direccion");
  write("15. Ejercicio 15 Numeros Aleatorios");
  write("16. Ejercicio 16 NOMBR3S");
  write("17. Ejercicio 17 Digito");
  write("18. Ejercicio 18 Letras");
  write("19. Ejercicio 19 Caracter");
  write("20. Ejercicio 20 Signos de puntuacion");
  write("21. Ejercicio 21 Caracteres Iguales, mayores o menores");
  write("22. Ejercicio 22 Nombres Iguales, mayores o menores");
  write("23. Ejercicio 23 Elemntos de cadena");
  write("24. Ejercicio 24 Elementos de arreglo");
  write("25. Salir");
}

function ejecutarOpcion(opcion) {
  if (opcion === 1) {
   // ejercicio 1
   //1.	Algoritmo que transforme de grados Celsius a Fahrenheit
   function convertirTemperatura(){ // Define una nueva función llamada 'convertirTemperatura'.
    let celsius=0, fahrenheit=0 // Declara dos variables: 'celsius' y 'fahrenheit', ambas inicializadas en cero
    celsius = +read("Ingrese la temperatura en grados Celsius:") // Lee la entrada del usuario para 'celsius' y convierte la cadena a número.
    fahrenheit = (celsius * 9/5) + 32 // Convierte 'celsius' a grados Fahrenheit y asigna el resultado a 'fahrenheit'.
    write("La temperatura en grados Fahrenheit es " + fahrenheit + " gracias,por su visita ") // Escribe un mensaje en la consola indicando la temperatura en grados Fahrenheit.
 }
 convertirTemperatura() // Llama a la función 'convertirTemperatura', lo que provoca que se ejecute el código dentro de la función.
  } 

  
  else if (opcion === 2) {
    // Ejercicio 2
    // Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número.
    function dubleTriple(){
      let num=0, dbl=0, trpl=0
      write("Presente, doble y triple de un numero")
      num = parseInt(read("Ingrese un numero: "))
      write("Numero presente:", num)
      dbl = num * num
      write("Doble del numero:", dbl)
      trpl = num * num * num
      write("Triple del numero:", trpl)
      write("Gracias por su vista vuelva pronto")
    }
    dubleTriple()
  } 


  else if (opcion === 3) {
    //Ejercicio 3
    //3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.
    function calcularOperaciones() { // Define una nueva función llamada 'calcularOperaciones'.
        let num1 = +read("Ingrese el primer número:"); // Lee la entrada del usuario para 'num1' y convierte la cadena a número.
        let num2 = +read("Ingrese el segundo número:"); // Lee la entrada del usuario para 'num2' y convierte la cadena a número.
        let num3 = +read("Ingrese el tercer número:"); // Lee la entrada del usuario para 'num3' y convierte la cadena a número.
        let num4 = +read("Ingrese el cuarto número:"); // Lee la entrada del usuario para 'num4' y convierte la cadena a número.
        let producto = num1 * num2 * num3 * num4; // Calcula el producto de los cuatro números y asigna el resultado a 'producto'.
        let suma = num1 + num2 + num3 + num4; // Calcula la suma de los cuatro números y asigna el resultado a 'suma'.
        let media = suma / 4; // Calcula la media aritmética de los cuatro números y asigna el resultado a 'media'.
        write("El producto de los números es " + producto); // Escribe un mensaje en la consola indicando el producto de los números.
        write("La suma de los números es " + suma); // Escribe un mensaje en la consola indicando la suma de los números.
        write("La media aritmética de los números es " + media); // Escribe un mensaje en la consola indicando la media aritmética de los números.
    }
    calcularOperaciones(); // Llama a la función 'calcularOperaciones'. 
  } 

  if (opcion === 4) {
   // Ejercicio 4
   // 4.Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos 
   //y gramos(nota: una libra equivale a 0.453593 kilogramos)
   function librasKilos(){
    let lbr=0, kl=0, gr=0
    write("De librras a kilogramos y gramos")
    lbr = parseFloat(read("Ingrse cuantas libras pesa: "))
    kl = lbr / 2.205
    write("Su peso en kilogramos es: ", kl)
    gr = lbr * 453.6
    write("Su peso en gramos es: ", gr)
   }
   librasKilos()
  } 


  else if (opcion === 5) {
    // Ejercicio 5
    //5.Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))
    function resolverExpresion() { // Define una nueva función llamada 'resolverExpresion'.
      let a = +read("Ingrese el valor para 'a':"); // Lee la entrada del usuario para 'a' y convierte la cadena a número.
      let b = +read("Ingrese el valor para 'b':"); // Lee la entrada del usuario para 'b' y convierte la cadena a número.
      let c = +read("Ingrese el valor para 'c':"); // Lee la entrada del usuario para 'c' y convierte la cadena a número.
  
      let x = ((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c)); // Resuelve la expresión matemática y asigna el resultado a 'x'.
      // Math.sin(a): Calcula el seno de 'a'. El argumento 'a' está en radianes.
      // Math.cos(b): Calcula el coseno de 'b'. El argumento 'b' está en radianes.
      // Math.trunc(a): Trunca el número 'a', eliminando cualquier parte decimal.
      // Math.sqrt(Math.pow(a, 3)): Primero, Math.pow(a, 3) eleva 'a' al cubo. Luego, Math.sqrt() calcula la raíz cuadrada del resultado.
  
      write("El resultado de la expresión es " + x); // Escribe un mensaje en la consola indicando el resultado de la expresión.
  }
  
  resolverExpresion(); // Llama a la función 'resolverExpresion'.
  } 
  
  
  else if (opcion === 6) {
    // Ejercicio 6
    // 6.Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. 
    ///Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo 
    //que se pagan al doble de la hora de la jornada normal. 
    //El porcentaje del seguro social(iess) es del 10% del ingreso total. 
    //Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.
    function horasLaborales(){
      let hrt=0, ph=0, sobretiempo=0, dbl=0, iess=0, nt=0
      write("Sueldo neto a recibir")
      hrt = parseFloat(read("Ingrese sus horas de trabajo: "))
      if(hrt > 40){
        ph = hrt * 5
        write("Su sueldo comunmente es de: ", ph)
        write("Pero como tiene sobretiempo")
        sobretiempo =hrt * 10
        write("Su ingreso total es: ", sobretiempo)
        iess = sobretiempo * 10 / 100
        write("Aporte al Iess 10%: ", iess)
        nt = sobretiempo - iess
        write("El valor neto a recibir es de: ", nt)
      }
      else{
        ph = hrt * 5
        write("Su sueldo comunmente es de: ", ph)
        iess = ph * 10 / 100
        write("Aporte al Iess 10%: ", iess)
        nt = ph - iess
        write("El valor neto a recibir es de: ", nt)
      }
    }
    horasLaborales()
  } 
  
  
  if (opcion === 7) {
   //Ejercicio 7
   //7.	Algoritmo que pida dos números y presenta el mayor de los dos siempre y cuando el primero sea par y el segundo impar
   function presentarMayor() { // Define una nueva función llamada 'presentarMayor'.
    let num1 = +read("Ingrese el primer número:"); // Lee la entrada del usuario para 'num1' y convierte la cadena a número.
    let num2 = +read("Ingrese el segundo número:"); // Lee la entrada del usuario para 'num2' y convierte la cadena a número.

    if (num1 % 2 === 0 && num2 % 2 !== 0) { // Comprueba si 'num1' es par y 'num2' es impar.
        let mayor; // Declara una variable 'mayor'.
        if (num1 > num2) { // Si 'num1' es mayor que 'num2'...
            mayor = num1; // ...asigna 'num1' a 'mayor'.
        } else { // Si 'num1' no es mayor que 'num2'...
            mayor = num2; // ...asigna 'num2' a 'mayor'.
        }
        write("El número mayor es " + mayor); // Escribe un mensaje en la consola indicando el número mayor.
    } else {
        write("El primer número no es par o el segundo número no es impar."); // Escribe un mensaje en la consola indicando que los números no cumplen con las condiciones.
    }
}
presentarMayor(); // Llama a la función 'presentarMayor'.
  } 


  else if (opcion === 8) {
    // Ejercicio 8
    //8.Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas 
    //inclusive y sino verificar si es un signo de puntuacion ", . ; :"
    function ltrSig(){
      let carácter=""
      carácter = read("Ingrese un caracter: ")
      if(carácter == "," || carácter == "." || carácter == ";" || carácter == ":"){
        write(carácter, " Es un signo de puntuacion")
      }
      else{
        write(carácter, " Es una letra del abecedario")
      }
    }
    ltrSig()
  } 
  
  
  else if (opcion === 9) {
  //Ejercicio 9
  //9.Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas, 
  //el costo por unidad es de $0,25 caso  contrario el precio será  10% menos
function calcularCosto() { // Define una nueva función llamada 'calcularCosto'.
    let cantidad = +read("Ingrese la cantidad de colas:"); // Lee la entrada del usuario para 'cantidad' y convierte la cadena a número.
    let costo = 0; // Inicializa 'costo' en cero.
    let descuento = 0; // Inicializa 'descuento' en cero.
    let costoFinal = 0; // Inicializa 'costoFinal' en cero.

    if (cantidad < 12) { // Si la cantidad es menor que 12...
        costo = cantidad * 0.25; // ...el costo es la cantidad multiplicada por 0,25.
    } else { // Si la cantidad es 12 o más...
        costo = cantidad * 0.25; // ...el costo es la cantidad multiplicada por 0,25.
        descuento = costo * 0.10; // ...el descuento es el 10% del costo.
    }
    costoFinal = costo - descuento; // Calcula el costo final después del descuento.
    write("El costo de venta de las colas es: " + costo); // Escribe un mensaje en la consola indicando el costo de venta.
    write("El descuento es: " + descuento); // Escribe un mensaje en la consola indicando el descuento.
    write("El costo final es: " + costoFinal + ". Gracias por su visita."); // Escribe un mensaje en la consola indicando el costo final y un mensaje de agradecimiento.
}
calcularCosto(); // Llama a la función 'calcularCosto'.
  }
  
  
  if (opcion === 10) {
   // Ejercicio 10
   //10.El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200,
   // se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. 
   //Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.
   function AlgoritmoX(){
    let prc=0, desc=0, iva=0, total=0
    prc = parseFloat(read("Ingrese el precio del traje: "))
    if(prc >= 200){
      desc = prc * 10 / 100
      write("Descuento 10%: ", desc)
      iva = prc * 15 / 100
      write("Iva 15%: ", iva)
      total = prc - desc + iva
      write("Total: ", total)
    }
    else{
      desc = prc - 10
      write("Descuento: ", desc)
      iva = prc * 15 / 100
      write("Iva 15%: ", iva)
      total = desc + iva
      write("Total: ", total)
    }
   }
   AlgoritmoX()
  } 


  else if (opcion === 11) {
  //Ejercicio 11
  //11.Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos
function presentarDia() { // Define una nueva función llamada 'presentarDia'.
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]; // Define un arreglo con los nombres de los días.
    let numero = +read("Ingrese el número del día (0-6):"); // Lee la entrada del usuario para 'numero' y convierte la cadena a número.

    if (numero >= 0 && numero <= 6) { // Si 'numero' está en el rango de 0 a 6...
        let dia = dias[numero]; // ...busca el nombre del día correspondiente en el arreglo 'dias'.
        write("El día es " + dia); // Escribe un mensaje en la consola indicando el nombre del día.
    } else {
        write("Número inválido. Por favor, ingrese un número entre 0 y 6."); // Escribe un mensaje en la consola indicando que el número ingresado es inválido.
    }
}
presentarDia(); // Llama a la función 'presentarDia'.
  } 


  else if (opcion === 12) {
    // Ejercicio 12
    //12.Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.
    function meses(){
      write("Meses")
      let mes=["Inicio", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
      let num = parseInt(read("Ingrese el numero del mes que desea saber: "))
      write(mes[num])
    }
    meses()
  } 
  
  
  if (opcion === 13) {
  //Ejercicio 13
  //13.Dado 5 nombres almacenarlo en un arreglo y luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos.
function presentarNombres() { // Define una nueva función llamada 'presentarNombres'.
    let nombres = []; // Define un arreglo para almacenar los nombres.
    // Lee la entrada del usuario para cada nombre y lo almacena en el arreglo 'nombres'.
    nombres[0] = read("Ingrese el primer nombre:");
    nombres[1] = read("Ingrese el segundo nombre:");
    nombres[2] = read("Ingrese el tercer nombre:");
    nombres[3] = read("Ingrese el cuarto nombre:");
    nombres[4] = read("Ingrese el quinto nombre:");
    // Presenta cada nombre del arreglo desde el último al primero.
    write("El quinto nombre es " + nombres[4]);
    write("El cuarto nombre es " + nombres[3]);
    write("El tercer nombre es " + nombres[2]);
    write("El segundo nombre es " + nombres[1]);
    write("El primer nombre es " + nombres[0]);
}
presentarNombres(); // Llama a la función 'presentarNombres'.
  } 
 
 
  else if (opcion === 14) {
    // Ejercicio 14
    //14.Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.
    function dirección(){
      write("Primer, medio, y ultimo caracter")
      let dirección = "Victor Emilio Estrada"
      write(dirección[0], dirección[7], dirección[20])
    }
    dirección()
  } 
 
 
  else if (opcion === 15) {
  //Ejercicio 15
  15.//Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.
function imprimirValores() { // Define una nueva función llamada 'imprimirValores'.
  let valores = []; // Define un arreglo para almacenar los valores.
// Genera cinco valores aleatorios entre -100 y 100 y los agrega al arreglo 'valores'.
  for (let i = 0; i < 5; i++) {
        let valorAleatorio = ((Math.random() * 201) - 100) | 0;
        valores.push(valorAleatorio);
    }

    // Imprime el primer valor si es par positivo.
    if (valores[0] > 0 && valores[0] % 2 === 0) {
        write("El primer valor es par positivo: " + valores[0]);
    }

    // Imprime el último valor si es impar negativo.
    if (valores[4] < 0 && valores[4] % 2 !== 0) {
        write("El último valor es impar negativo: " + valores[4]);
    }
}
imprimirValores(); // Llama a la función 'imprimirValores'.
  } 
 
 
  if (opcion === 16) {
   // Ejercicio 16
   //16.Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.
   function nombr3s(){
    let nombres = []
    let nombre = read("Ingrese el primer nombre: ")
    nombres[0] = nombre
    nombre = read("Ingrese el segundo nombre: ")
    nombres[1] = nombre
    nombre = read("Ingrese el tercer nombre: ")
    nombres[2] = nombre
    write("El primer y último carácter de cada nombre:")
    write("Primer carácter del primer nombre:", (nombres[0][0]))
    write("Último carácter del primer nombre:", (nombres[0][nombres[0].length - 1]))
    write("Primer carácter del segundo nombre:", (nombres[1][0]))
    write("Último carácter del segundo nombre:", (nombres[1][nombres[1].length - 1]))
    write("Primer carácter del tercer nombre:", (nombres[2][0]))
  write("Último carácter del tercer nombre:", (nombres[2][nombres[2].length - 1]))
}
nombr3s()

  }
 
 
  else if (opcion === 17) {
  //Ejercicio 17
  //17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito
function presentarPrimerDigito() { // Define una nueva función llamada 'presentarPrimerDigito'.
    let cadena = read("Ingrese una cadena:"); // Lee la entrada del usuario para 'cadena'.
    if (cadena[0] >= '0' && cadena[0] <= '9') { // Si el primer carácter de 'cadena' es un dígito...
        write("El primer carácter es un dígito: " + cadena[0]); // ...escribe un mensaje en la consola indicando el primer carácter.
    } else {
        write("El primer carácter no es un dígito."); // ...de lo contrario, escribe un mensaje en la consola indicando que el primer carácter no es un dígito.
    }
}
presentarPrimerDigito(); // Llama a la función 'presentarPrimerDigito'.
  } 
  
  
  else if (opcion === 18) {
    // Ejercicio 18
    //18.Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra
    function letras(){
      write("Letras")
      let cadena1 = read("Ingrese una cadena: ")
      if (cadena1[cadena1.length - 1] >= 'a' && cadena1[cadena1.length - 1] <= 'z' || cadena1[cadena1.length - 1] >= 'A' && cadena1[cadena1.length - 1] <= 'Z') {
        console.log("El último carácter es una letra: " + cadena1[cadena1.length - 1])
      } else {
        console.log("El último carácter no es una letra.")
      }
    }
    letras()
  } 
  
  
  if (opcion === 19) {
  //Ejercicio 19
  //19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal
  const read = require('prompt-sync')(); // Importa la biblioteca 'prompt-sync' para leer la entrada del usuario.
const write = console.log; // Asigna la función 'console.log' a la variable 'write' para escribir en la consola.

function presentarPrimeraVocal() { // Define una nueva función llamada 'presentarPrimeraVocal'.
    let cadena = read("Ingrese una cadena:"); // Lee la entrada del usuario para 'cadena'.
    let primerCaracter = cadena[0]; // Obtiene el primer carácter de 'cadena'.

    // Comprueba si el primer carácter de 'cadena' es una vocal.
    if (primerCaracter === 'a' || primerCaracter === 'e' || primerCaracter === 'i' || primerCaracter === 'o' || primerCaracter === 'u' ||
        primerCaracter === 'A' || primerCaracter === 'E' || primerCaracter === 'I' || primerCaracter === 'O' || primerCaracter === 'U') {
        write("El primer carácter es una vocal: " + primerCaracter); // Escribe un mensaje en la consola indicando el primer carácter.
    } else {
        write("El primer carácter no es una vocal."); // Escribe un mensaje en la consola indicando que el primer carácter no es una vocal.
    }
}

presentarPrimeraVocal(); // Llama a la función 'presentarPrimeraVocal'.

  } 
  
  
  else if (opcion === 20) {
    // Ejercicio 20
    //20.Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,”
    function signo(){
      let sig = ".;:,."
      if(sig[0] == "." && sig[2] == ":" && sig[4] == "."){
        write(sig[0], sig[2], sig[4])
      }
      else{
        write("No es un signo de puntuacion")
      }
    }
    signo()
  } 
  
  
  else if (opcion === 21) {
    //Ejercicio 21
    //21.	Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo
    const read = require('prompt-sync')(); // Importa la biblioteca 'prompt-sync' para leer la entrada del usuario.
const write = console.log; // Asigna la función 'console.log' a la variable 'write' para escribir en la consola.

function compararCaracteres() { // Define una nueva función llamada 'compararCaracteres'.
    let primerCaracter = read("Ingrese el primer carácter:"); // Lee la entrada del usuario para el primer carácter.
    let segundoCaracter = read("Ingrese el segundo carácter:"); // Lee la entrada del usuario para el segundo carácter.

    // Comprueba si los dos caracteres son iguales.
    if (primerCaracter === segundoCaracter) {
        write("Los dos caracteres son iguales."); // Escribe un mensaje en la consola indicando que los dos caracteres son iguales.
    } 
    // Comprueba si el primer carácter es menor que el segundo carácter.
    else if (primerCaracter < segundoCaracter) {
        write("El primer carácter es menor que el segundo carácter."); // Escribe un mensaje en la consola indicando que el primer carácter es menor que el segundo carácter.
    } 
    // Si los dos caracteres no son iguales y el primer carácter no es menor que el segundo, entonces el primer carácter debe ser mayor que el segundo.
    else {
        write("El primer carácter es mayor que el segundo carácter."); // Escribe un mensaje en la consola indicando que el primer carácter es mayor que el segundo carácter.
    }
}
compararCaracteres(); // Llama a la función 'compararCaracteres'.
  } 
  
  
  if (opcion === 22) {
   //Ejercicio 22
   //22.Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo
   function namemayr(){
    let nom1="", nom2=""
    nom1 = read("Ingrese el primer nombre: ")
    nom2 = read("Ingrese el segundo nombre: ")
    if(nom1 > nom2){
        write("El primer nombre es mayor que el segundo")
    }
    else if(nom1 < nom2){
      write("El primer nombre es menor que el segundo")
    }
    else if (nom1 == nom2){
        write("Los dos nombres son igulaes")
    }
}
namemayr()
  } 
  
  
  else if (opcion === 23) {
  //Ejercicio 23
 // 23.	Dado una cadena indicar cuantos elementos tiene, sin usar ciclos 
 const read = require('prompt-sync')(); // Importa la biblioteca 'prompt-sync' para leer la entrada del usuario.
const write = console.log; // Asigna la función 'console.log' a la variable 'write' para escribir en la consola.

function contarElementosCadena() { // Define una nueva función llamada 'contarElementosCadena'.
    let cadena = read("Ingrese una cadena:"); // Lee la entrada del usuario para 'cadena'.
    let longitud = cadena.length; // Obtiene la longitud de 'cadena' usando la propiedad '.length'.

    write("La cadena tiene " + longitud + " elementos."); // Escribe un mensaje en la consola indicando la longitud de la cadena.
}

contarElementosCadena(); // Llama a la función 'contarElementosCadena'.

  } 
 
 
  else if (opcion === 24) {
    //Ejercicio 24
    //24.Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos
    function elements(){
    let arr=[1,2,3,4,5,6]
    let long = arr.length;
    write(long)
  } 
  elements()
}
  
  else if (opcion === 25) {
    write("Saliendo del programa...");
    write("Programa finalizado.");
    write("Gracias por su visita :)")
  } 
  else {
    write("Opción no válida. Intente de nuevo.");
  }
}

function main() {
  let opcion;
  do {
    mostrarMenu();
    opcion = +read("Selecciona un ejercicio (1-25): ");
    ejecutarOpcion(opcion);
  } while (opcion !== 25);
}

main();