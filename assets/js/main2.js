var agents = [ {nombre : "bjstdmngbgr02.thoughtworks.com", estado : "idle",     ip : "192.168.1.2", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr03.thoughtworks.com", estado : "building", ip : "192.168.1.3", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr04.thoughtworks.com", estado : "building", ip : "192.168.1.4", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr05.thoughtworks.com", estado : "idle",     ip : "192.168.1.5", directorio : "/var/lib/cruise-agent"}];

function AgentsManager(){

  this.agents = [];
  this.agentCount = 0;

  this.addAgent = function(datos){
                       this.agents.push({
                            id: this.agentCount,
                            name: nombre,
                            status: estado,
                            ip: direccion,
                            url: directorio,
                            resource: new.ResourcesManager();
                        });
                       this.agentCount++;
                    }

  this.printHtmlAgent = function(parent){
    parent.innerHTML = "";
    this.agents.forEach(function(item){
      parent.appendChild(this.createHtmlResource(item.name,item.id));
    },this);
  }

  this.createHtmlResource = function(id, nombre, estado, direccion, directorio){
      var postAgent = document.createElement("div");
      postAgent.setAttribute("data-id",id);
      postAgent.setAttribute("class","physicalResources");
      var circulo = document.createElement("div");
      circulo.setAttribute("class","circulo");
      var contenido = document.createElement("div");
      contenido.setAttribute("class","contenidoResources");
      var spanName = document.createElement("span");
      spanN.innerHTML = nombre;
      /*var spanStatus = document.createElement("span");
      spanStatus.innerHTML = estado;
      var spanIp = document.createElement("span");
      spanIp.innerHTML = direccion;
      var spanUrl = document.createElement("span");
      spanUrl.innerHTML = directorio
      */
      var enlace = document.createElement("a");
      enlace.setAttribute("class","tooltip");
      enlace.setAttribute("name","box-0");
      enlace.innerHTML = "+ Specify Resources";
      var resourcesContainer = document.createElement("div");
      resourcesContainer.setAttribute("class","showresources");
      resourcesContainer.setAttribute("data-id",id);

      btneliminar.addEventListener("click",this);
      post.appendChild(circulo);
      post.appendChild(contenido);
      contenido.appendChild(span);
      post.appendChild(btneliminar);
      btneliminar.appendChild(txtbtneliminar);
      return post;
  }

}
