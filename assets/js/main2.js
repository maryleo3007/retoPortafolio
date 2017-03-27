function ResourcesAgent(){

  this.agents = [];
  this.agentCount = 0;

  this.addAgent = function(tipo){
                       this.resources.push({
                            id: this.count,
                            type: tipo
                        });
                       this.count++;
                    }
}
