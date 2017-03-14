
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
