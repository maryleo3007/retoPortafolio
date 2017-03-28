
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
      if(e.type == "click"){
        this.resources = this.resources.filter(function(item){
          return item.id != id ;
        });
      }
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }


}
