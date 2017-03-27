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
    this.deleteResouce = function(element){
      var i = this.resources.indexOf(element);
      if(i != -1){
        this.resources.splice(i,1);
      }
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
  var mov = 18;
  var inicial = 25;
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
          console.log(posicionBox(box));

          document.getElementById(box).style.display = "inline-block";
          console.log(posicionBox(box));
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

          var lista = document.getElementsByClassName('text');
          for(var i = 0; i < lista.length ; i++){
            console.log(lista[0]);
          }
          var box = this.name;
          console.log(box);

            var resourceAreaSplit = resourceArea.split(",");
                  resourceAreaSplit.forEach(function(elemento){
                      if(elemento != ""){
                        resourcesManager.addResource(elemento);
                        resourcesManager.printHtmlResource(document.getElementById('showresources'));
                      }

                  });

        });
  }
});
