
function ResourcesManager(){

    this.resources = [];
    this.count = 0;

    this.addResource = function(tipo){
                         this.resources.push({
                              id: this.count,
                              type: tipo
                          });
                         this.count++;
                      }

    this.printHtmlResource = function(parent){
      parent.innerHTML = "";
      this.resources.forEach(function(item){
        parent.appendChild(this.createHtmlResource(item.type,item.id));
      },this);
    }

    this.createHtmlResource = function(type,id){
        var post = document.createElement("div");
        post.setAttribute("data-id",id);
        post.style.display = "inline-block";
        var span = document.createElement("span");
        span.innerHTML = type;
        var eliminar = document.createElement("a");
        eliminar.setAttribute("href","#");
        eliminar.innerHTML = "x";
        var array = this.resources;
        console.log(this.resources);
        eliminar.addEventListener("click",function(e){
            e.preventDefault();
            var resourceId = e.target.parentNode.getAttribute("data-id");
            var postDelete = document.getElementById("post");
            postDelete.removeChild(e.target.parentNode);

        });
        post.appendChild(span);
        post.appendChild(eliminar);
        return post;
    }

    this.elimina = function(id){
      this.resources = this.resources.filter(function(item){
        return item.id != id;
      });
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


    var resourcesManager = new ResourcesManager();
    var buttonAddResource = document.getElementById('buttonAddResource');

    buttonAddResource.addEventListener('click',function(){
      var resourceArea = document.getElementById('textResource').value;
      var resourceAreaSplit = resourceArea.split(",");
      resourceAreaSplit.forEach(function(elemento){
        resourcesManager.addResource(elemento);
        resourcesManager.printHtmlResource(document.getElementById("post"));});});


});
