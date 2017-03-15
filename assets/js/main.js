function ResourcesManager(){

  this.resources = [];
  this.id = 0;


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
this.addResource = function(type){

    this.resources.push({
      id: this.id,
      type: type,

    });
    this.id++;

  }

  this.printHtmlResource = function(parent){
    parent.innerHTML = "";
    this.resources.forEach(function(item){
      parent.appendChild(this.createHtmlResource(item.type,item.id));
    },this);
  }

  this.createHtmlResource = function(type,id){
    var post = document.createElement("div");
    span.setAttribute("data-id",id);
    var span = document.createElement("span");
    span.innerHTML = type;
    var eliminar = document.createElement("a");
    eliminar.setAttribute("href","#");
    eliminar.addEventListener("click",function(e){
        e.preventDefault();
        var resourceId = e.target.parent.getAttribute("data-id");
        delete this.resources[resourceId];

    });
    post.appendChild(span);
    post.appendChild(eliminar);
    return post;
  }
}


window.addEventListener("load", function(){

  var apopup = document.getElementById('apopup');
  apopup.addEventListener('click',function (event) {
    event.preventDefault();
    document.getElementById('box').style.display = "block";
  });

  var close = document.getElementById("btn-close");
  close.addEventListener('click',function(event){+
    event.preventDefault();
    box.style.display = "none";
  });



});
