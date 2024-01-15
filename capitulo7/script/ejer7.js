//creracion de clases en javascript
//tambien le podemos dar valores predeterminados a una propiedad ej:
class perro{
    //para hacer las porpiedades no accesibles fuera de la clase osea loque seria privadasen java hacemos esto ese numeral indica que son privadas osea no accesibles fuera de la clase

    //al igual qu een java se aplcia lo que son los get y set para acceder a propiedades y modificarlas con el get accedemos a las porpiedades privadas inaccesibles fuera de la clase y con el set las cambiamos
    #nameDog;
    #color;
    constructor(nameDog="kaiser",color,peso,raza){
        //y como arriba las pusimos como #nameDog en el construcctor igual lo mismo que pasaba en java con las privadas y tambien en python
        this.#nameDog=nameDog;
        this.#color=color;
        this.peso=peso;
        this.raza=raza;
    }
    //metodos get y sett
    //se les deja el mismo nombre de la propiedad para que se acceda a entrecomillas a esa funcion get y set y ccuadno se llama en el obnjeto instanciado no se pone parentesis solo el nombre de la propiedad y ya
    get nameDog(){
        return this.#nameDog;
    }

    set nameDog(nombreNuevo){
        this.#nameDog=nombreNuevo;
    }

    //y asi para las otras prpiedades ya que se apica lo mismo que en java cada propiedadad debe tener su get y set y de ben ser privadas las variables

    //generando metodos
    saludar(){
        console.log("hola soy tu querido " , this.nameDog);
    }

    saludoPersonal(nombreAmo){
        console.log(`hola ${nombreAmo}`);
    }


}

const perrito = new perro("kaiser","negro", 6 , "pincher");

console.log("mi perro se llama ", perrito.nameDog ,"pesa" , perrito.peso);
console.log("\n ",perrito.nameDog);
//tambien hay erencia con el extends de java 
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
    this.color = color;

    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
    }
    move() {
    console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
    this.currentSpeed += amount;
    }
   }
// y se aplica lo mismo que en java el super para que traiga lso otros iniciadores
   class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
    }
    doWheelie() {
    console.log("Driving on one wheel!");
    }
   }

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);

motor.accelerate(50);
motor.move();
