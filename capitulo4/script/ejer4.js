// operador ternario operando1? operando2 : operando3; perando1 es la expresión que se va a evaluar. Si el valor de la expresión es verdadero, se  ejecuta el operando2 . Si el valor de la expresión es falso, se ejecuta el operando3 . 
//Puede leer el signo de interrogación como "entonces" y los dos puntos como "otra cosa" aquí:
//expresión ? declaración de verdadero : declaración asociada con falso; EJ:
let edad=Number(prompt("ingresa tu edad"))

console.log(edad>18?"puede entrar":"no puede entrrar");

//caso switch lo mismo que en python

let activity="Get up";

switch(activity) {
    case "Get up":
    console.log("It is 6:30AM");
    break;
    case "Breakfast":
    console.log("It is 7:00AM");
    break;
    case "Drive to work":
    console.log("It is 8:00AM");
    break;
    case "Lunch":
    console.log("It is 12:00PM");
    break; 
    case "Drive home":
    console.log("It is 5:00PM");
    break; 
    case "Dinner":
    console.log("It is 6:30PM");
    break;
    default:
 // code to be executed when no cases match
    break;
   }
//TAMBIEN PODEMOSCOMBINAR CASOS 
let grade = "F";
switch(grade){
   case "F":
   case "D":
   console.log("You've failed!");
   break;
   case "C":
   case "B":
   console.log("You've passed!");
   break;
   case "A":
   console.log("Nice!");
   break;
   default:
   console.log("I don't know this grade.");
  }



