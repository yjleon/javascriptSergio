let valorAleatorio = Math.round(Math.random()*6);
console.log(valorAleatorio);
let nombre=prompt("ingresa tu nombre");
switch (valorAleatorio) {
    case 1:
        console.log(`${nombre} tendras un reto interesante`);
        break;
    case 2:
        console.log(`${nombre}tendras una novia`);
        break;
    case 3:
        console.log(`${nombre}tendras un gay siguiendote`);
        break;
    case 4:
        console.log(`${nombre}tendras un acosador en instaram`);
        break;
    case 5:
        console.log(`${nombre}tendras un nuevo trauma`);
        break;
    case 6:
        console.log(`${nombre}te golpera tu mujer`);
        break;

    default:
        console.log("no enctramos nada para ti");
        break;
}