var nombre = prompt("Cual es el nombre de la persona?");
var edad = prompt("Cual es el la edad de la persona?");

class persona {
    constructor(name, year){
      this.name = name;
      this.year = year;
    }
    show(){
        return ("The name is " + this.name + ", " + this.year + " years");
    }
  }
  
  const persona1 = new persona(nombre, edad);

  document.getElementById("Id").innerHTML = persona1.show();