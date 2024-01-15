//es un enlace que tiene espacios al conseguirlo con un metodo get en un formlario me aparecera los espacioncubierto s por un % asi que tenemso qeu corregir esascosas
/*Como puede ver, reemplazó los espacios en la versión codificada y los eliminó nuevamente en la versión 
decodificada. Todos los demás caracteres permanecen iguales: esta codificación y decodificación no tiene 
en cuenta los caracteres especiales y, por lo tanto, los deja en el URI. Se pueden esperar dos puntos, signos 
de interrogación, signos igual, barras diagonales y símbolos comerciales.
Entonces, los métodos decodeURI() y encodeURI() pueden ser muy útiles para arreglar un URI 
roto, pero son inútiles cuando solo quieres codificar o decodificar una cadena que contiene un 
carácter con un significado especial, como = o &. Tomemos el siguiente ejemplo decodeUriComponent() and encodeUriComponent()
*/
let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURIComponent(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURIComponent(encoded_uri);
console.log("Decoded:", decoded_uri);


//para eso existen los metodos encodeURI Y decodeURI

let uri1 = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri1 = encodeURI(uri1);
console.log("Encoded:", encoded_uri1);
let decoded_uri1= decodeURI(encoded_uri1);
console.log("Decoded:", decoded_uri1);
/* Como puede ver, reemplazó los espacios en la versión codificada y los eliminó nuevamente en la versión 
decodificada. Todos los demás caracteres permanecen iguales: esta codificación y decodificación no tiene 
en cuenta los caracteres especiales y, por lo tanto, los deja en el URI. Se pueden esperar dos puntos, signos 
de interrogación, signos igual, barras diagonales y símbolos comerciales.
*/