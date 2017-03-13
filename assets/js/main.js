var botones = document.getElementsByClassName("links")

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

function mostrar(event, elementId) {
  var i, buttoncontent, buttonlinks;
  buttoncontent = document.getElementsByClassName('buttoncontent');
  for(var i = 0 ; i < buttoncontent.length ; i++){
    buttoncontent[i].style.display = "none";
  }
  buttonlinks = document.getElementsByClassName('buttonlink');
  for(var i = 0 ; i < buttonlinks.length ; i++){
    buttonlinks[i].className =  buttonlinks[i].className.replace(" active", "");
  }
  document.getElementById(elementId).style.display = "block";
  event.currentTarget.className += " active";
  /*
  document.getElementById('all').style.display = "none";
  document.getElementById('physical').style.display = "none";
  document.getElementById('virtual').style.display = "none";
  document.getElementById(elementId).style.display = "block";*/
}
