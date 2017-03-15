function ResourcesManager(){

    this.resources = [];
    this.id = 0;

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
            var postDelete = document.getElementById("id del div general");
            postDelete.removeChild(postDelete.childNodes[resourceId]);
            delete this.resources[resourceId];

        });
        post.appendChild(span);
        post.appendChild(eliminar);
        return post;
    }
}

function posicionBox(box) {
  var mov = 20;
  var inicial = 33;
  var boxNew = document.getElementById(box);
  box = box.split("-");
  boxNew.style.top = (inicial + mov * box[1])+"%";
}

window.addEventListener("load", function(){

  var popup = document.getElementsByClassName("tooltip");
  var cerrar = document.getElementsByClassName("cerrar");
  var adicionar = document.getElementsByClassName("add");

  for(var i=0; i<popup.length; i++){
    popup[i].addEventListener('click',function (event) {
      event.preventDefault();
      var box = this.name;
      posicionBox(box);
      document.getElementById(box).style.display = "inline-block";
    });
  }
  for(i=0; i<cerrar.length; i++){
    cerrar[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      var box = this.name;
      document.getElementById(box).style.display = "none";
    });

  }

  for(i = 0; i<adicionar.length; i++){

      

  }









});
