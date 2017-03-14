
var botones = document.getElementsByName("links");


for(i=0; i<botones.length; i++){
  botones[i].addEventListener("click", function(index){

      var contenido = document.getElementsByClassName("contenido");
      var links = document.getElementsByClassName("links");

      for (i = 0; i < contenido.length; i++) {
        contenido[i].style.display = "none";
      }
      for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
      }
      document.getElementById(this.name).style.display = "block";
      this.className += " active";


  });

}
