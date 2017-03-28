var Agents = [ {nombre : "bjstdmngbgr02.thoughtworks.com", estado : "idle",     ip : "192.168.1.2", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr03.thoughtworks.com", estado : "building", ip : "192.168.1.3", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr04.thoughtworks.com", estado : "building", ip : "192.168.1.4", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr05.thoughtworks.com", estado : "idle",     ip : "192.168.1.5", directorio : "/var/lib/cruise-agent"}];

function AgentsManager(){

  this.agentsArray = [];
  this.agentCount = 0;

  this.addAgent = function(nombre,estado,direccion,directorio){
                       this.agentsArray.push({
                            id: this.agentCount,
                            name: nombre,
                            status: estado,
                            ip: direccion,
                            url: directorio,
                            resource: new ResourcesManager()
                        });
                       this.agentCount++;
                       //console.log(this.agentsArray);
                    }

  this.printHtmlAgent = function(parent){
    parent.innerHTML = "";
    this.agentsArray.forEach(function(item){
      parent.appendChild(this.createHtmlAgent(item.id, item.name, item.status, item.ip, item.url));
    },this);
  }

  this.createHtmlAgent = function(id, nombre, estado, direccion, directorio){
      var postAgent = document.createElement("div");
      postAgent.setAttribute("data-id",id);
      postAgent.setAttribute("class","physicalResources");
      var circulo = document.createElement("div");
      circulo.setAttribute("class","circulo");
      var contenido = document.createElement("div");
      contenido.setAttribute("class","contenidoResources");
      var spanName = document.createElement("span");
      spanName.style = "font-weight: bold;";
      spanName.innerHTML = nombre + "&#160|&#160";
      var spanStatus = document.createElement("span");
      spanStatus.innerHTML =  estado + "&#160|&#160";
      var spanIp = document.createElement("span");
      spanIp.innerHTML =  direccion + "&#160|&#160";
      var spanUrl = document.createElement("span");
      spanUrl.innerHTML =  "&#160" + directorio;
      var space = document.createElement("br");
      var enlace = document.createElement("a");
      enlace.setAttribute("class","tooltip");
      enlace.setAttribute("name","box-"+id);
      enlace.setAttribute("href","#");
      enlace.innerHTML = "+ Specify Resources";
      enlace.addEventListener("click",this);
      var resourcesContainer = document.createElement("div");
      resourcesContainer.setAttribute("class","showresources");
      resourcesContainer.setAttribute("data-id",id);

      postAgent.appendChild(circulo);
      postAgent.appendChild(contenido);
      contenido.appendChild(spanName);
      contenido.appendChild(spanStatus);
      contenido.appendChild(spanIp);
      contenido.appendChild(spanUrl);
      contenido.appendChild(space);
      contenido.appendChild(enlace);
      contenido.appendChild(resourcesContainer);
      if(estado == "idle"){
        postAgent.style.background = "#CCE8B5";
        var img = document.createElement("img");
        img.setAttribute("src","assets/images/deny.png");
        img.style.cssFloat = "left";
        var status = document.createElement("div");
        status.setAttribute("class","deny-box");
        status.innerHTML = "Deny";
        status.appendChild(img);
        contenido.appendChild(status);

      }
      return postAgent;
  }

  this.handleEvent = function(e){
    e.preventDefault();
    if(e.type == "click"){
      var box = e.target.name;
      var id = box.split("-");
      var box1 = createBox(this.agentsArray,id[1]);
      box1.style.top = posicionBox(box);
      box1.style.display = "inline-block";
      e.target.parentNode.appendChild(box1);
    }
  }

}


function posicionBox(box) {
  var mov = 20;
  var inicial = 33;
  box = box.split("-");
  return (inicial + mov * box[1]) + "%";
}

function createBox (array,id){
  var box = document.createElement("div");
  box.setAttribute("class", "box");
  box.style = "display:none";
  var span = document.createElement("span");
  span.innerHTML = "(Separate multiple resources name with commas)";
  var input = document.createElement("input");
  input.setAttribute("class","texto");
  input.setAttribute("type","text");
  var addButton = document.createElement("button");
  addButton.setAttribute("class","add");
  addButton.innerHTML = "Add resources";
  addButton.addEventListener("click",function(e){
    //console.log(this.agentsArray);
      e.preventDefault();
      console.log(array);
      var texto = e.target.previousSibling.value;
      texto = texto.split(",");
      texto.forEach(function(elemento){
          var parent = event.target.parentNode.parentNode.parentNode.childNodes[6];
          array[id].resource.addResource(elemento);
          array[id].resource.printHtmlResource(parent);
      });
  });
  var closeButton = document.createElement("button");
  closeButton.setAttribute("class","cerrar");
  closeButton.innerHTML = "Close";
  closeButton.addEventListener("click",function(e){
      e.preventDefault();
      e.target.parentNode.parentNode.style.display = "none";
  });

  box.appendChild(span);
  span.appendChild(input);
  span.appendChild(addButton);
  span.appendChild(closeButton);

  return box;

}


window.addEventListener("load", function(){

  var agentsManager = new AgentsManager();

  Agents.forEach(function(item){
    agentsManager.addAgent(item.nombre,item.estado, item.ip, item.directorio);
    agentsManager.printHtmlAgent(document.getElementById("pysical"));

  });


});
