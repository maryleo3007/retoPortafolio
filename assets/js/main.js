
var botones = document.getElementsByClassName("links");

for(i=0; i<botones.length; i++){
  botones[i].addEventListener("click", function(index){

      var contenido = document.getElementsByClassName("contenidoTab");

      for (i = 0; i < contenido.length; i++) {
        contenido[i].style.display = "none";
      }
      for (i = 0; i < botones.length; i++) {
        botones[i].className = botones[i].className.replace("active", "");
      }
      document.getElementById(this.name).style.display = "block";
      this.className += " active";

  });

}

/*

var buttonsAgents = document.getElementsByClassName("agents");
var buttonContent = document.getElementById("buttoncontent");

for(i=0; i<buttonsAgents.length; i++){
//arrayObjeto es un array con todos los objetos
  buttonsAgents[i].addEventListener("click", function(index){
    var arrayFiltrado = arrayObjeto.filter(function(item){
                          return this.name == item.type;
                        });
    arrayFiltrado.forEach(function(item){
      //  mostrar();
    });

  },this);
}


//objeto donde estan todos los datos
function Objeto (tema, status, adress ){
  this.tema
  this.type
  this.resources

}


function mostrar(){

  var post = document.createElement("div");
  var p = document.createElement("p");
  var agregar = document.createElement("a");
  agregar.setAttribute("href", "#");
  agregar.innerHTML = "+ Specify Resources";
  agregar.addEventListener("click", function(){


  });

  for(i=0; i<this.resources.length; i++){
    var eliminar = document.createElement("button");
    eliminar.innerHTML = "x";
    eliminar.addEventListener("click", function(){

    });
  }





}

*/
