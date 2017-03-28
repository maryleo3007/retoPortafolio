var Agents = [ {nombre : "bjstdmngbgr02.thoughtworks.com", estado : "idle",     ip : "192.168.1.2", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr03.thoughtworks.com", estado : "building", ip : "192.168.1.3", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr04.thoughtworks.com", estado : "building", ip : "192.168.1.4", directorio : "/var/lib/cruise-agent"},
        			 {nombre : "bjstdmngbgr05.thoughtworks.com", estado : "idle",     ip : "192.168.1.5", directorio : "/var/lib/cruise-agent"}];



window.addEventListener("load", function(){

  var agentsManager = new AgentsManager();

  Agents.forEach(function(item){
    agentsManager.addAgent(item.nombre,item.estado, item.ip, item.directorio);
    agentsManager.printHtmlAgent(document.getElementById("pysical"));

  });


});
