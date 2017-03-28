var agents = [ {nombre : "bjstdmngbgr02.thoughtworks.com", estado : "idle",     ip : "192.168.1.2", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr03.thoughtworks.com", estado : "building", ip : "192.168.1.3", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr04.thoughtworks.com", estado : "building", ip : "192.168.1.4", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr05.thoughtworks.com", estado : "idle",     ip : "192.168.1.5", directorio : "/var/lib/cruise-agent"}];

function AgentsManager(){

  this.agents = [];
  this.agentCount = 0;

  this.addAgent = function(nombre,estado,direccion,directorio){
                       this.agents.push({
                            id: this.agentCount,
                            name: nombre,
                            status: estado,
                            ip: direccion,
                            url: directorio,
                          //  resource: new.ResourcesManager();
                        });
                       this.agentCount++;
                    }

  this.printHtmlAgent = function(parent){
    parent.innerHTML = "";
    this.agents.forEach(function(item){
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
      enlace.addEventListener("click",function(event){
        event.preventDefault();
        var box = this.name;
        console.log(box);
        posicionBox(box);
        document.getElementById("box").style.display = "inline-block";
      });
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

}


function posicionBox(box) {
  var mov = 20;
  var inicial = 33;
  var boxNew = document.getElementById("box");
  box = box.split("-");
  boxNew.style.top = (inicial + mov * box[1])+"%";
}



window.addEventListener("load", function(){

  var agentsManager = new AgentsManager();
  agents.forEach(function(item){
    agentsManager.addAgent(item.nombre,item.estado, item.ip, item.directorio);
    agentsManager.printHtmlAgent(document.getElementById("pysical"));

  });


});
