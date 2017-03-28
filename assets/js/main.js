
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
        post.setAttribute("class","data-id");
        post.style.display = "inline-block";
        var span = document.createElement("span");
        span.innerHTML = type;

        var btneliminar = document.createElement("BUTTON");
        btneliminar.setAttribute("class","eliminarResource");
        var txtbtneliminar = document.createTextNode(" X");

        btneliminar.addEventListener("click",this);
        post.appendChild(span);
        post.appendChild(btneliminar);
        btneliminar.appendChild(txtbtneliminar);
        return post;
    }

    this.handleEvent = function(e){
      e.preventDefault();
      var id = e.target.parentNode.getAttribute("data-id");
      //console.log(e.target.parentNode);
      if(e.type == "click"){
        this.resources = this.resources.filter(function(item){

          return item.id != id ;
        });
      //  console.log(this.resources)
      }
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }


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
        var resourceAreaSplit = resourceArea.split(",");
                resourceAreaSplit.forEach(function(elemento){
                    resourcesManager.addResource(elemento);
                    resourcesManager.printHtmlResource(document.getElementById('showresources'));
                });


        });
  }
});
