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
    var span = document.createElement("span");
    span.innerHTML = type;
    var eliminar = document.createElement("a");
    eliminar.setAttribute("href","#");
    eliminar.addEventListener("click",function(e){
        e.preventDefault();
        var resourceId = e.target.parent.getAttribute("data-id");
        delete this.resources[resourceId];

    });
    post.appendChild(span);
    post.appendChild(eliminar);
    return post;
  }
}


window.addEventListener("load", function(){
  var resourcesManager = new ResourcesManager();
  var buttonAddResource = document.getElementById('buttonAddResource');

  buttonAddResource.addEventListener('click',function(){
    var resourceArea = getElementById('textResource').value;
    var resourceAreaSplit = resourceArea.split(",");
    resourceArea.forEach(function(elemento){
      resourcesManager.addResource(resourceAreaSplit);
      resourcesManager.createHtmlResource(document.getElementById('addSpecifyResources'));});});});
