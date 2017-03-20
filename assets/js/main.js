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
        post.setAttribute('data-id',id)
        post.setAttribute("class","data-id");
        var span = document.createElement("span");
        span.innerHTML = type;

        var eliminar = document.createElement("a");
        eliminar.setAttribute("href","#");

        var btneliminar = document.createElement("BUTTON");
        btneliminar.setAttribute("class","eliminarResource");
        var txtbtneliminar = document.createTextNode(" X");

        btneliminar.addEventListener("click",function(e){
            e.preventDefault();
            var resourceId = e.target.parentNode.parentNode.getAttribute("data-id");
            this.parentNode.parentNode.parentNode.removeChild(post);
        });
        post.appendChild(span);
        post.appendChild(eliminar);
        eliminar.appendChild(btneliminar);
        btneliminar.appendChild(txtbtneliminar);
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

  var resourcesManager = new ResourcesManager();
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

        adicionar[i].addEventListener('click',function(event){
        event.preventDefault();
        var resourceArea = document.getElementById('textResource').value;
        //var resourceArea = document.getElementsByClassName('texto');
        //for(var j = 0; j<resourceArea.length;j++){
          //var elementos = resourceArea[j].value;
          var resourceAreaSplit = resourceArea.split(",");
                resourceAreaSplit.forEach(function(elemento){
                    resourcesManager.addResource(elemento);
                    resourcesManager.printHtmlResource(document.getElementById('showresources'));
                });
        //}

        });
  }
});


/*
window.addEventListener("load", function(){
    var resourcesManager = new ResourcesManager();
    var buttonAddResource = document.getElementById('agregarResource');

    buttonAddResource.addEventListener('click',function(){

      var resourceArea = document.getElementById('textResource').value;
      var resourceAreaSplit = resourceArea.split(",");
      resourceAreaSplit.forEach(function(elemento){
      resourcesManager.addResource(elemento);
      resourcesManager.printHtmlResource(document.getElementById('showresources'));
        //resourceArea.value = " ";
    });
  });
});
*/
