var assert = require('assert');
var retoTest = require('../assets/js/main.js');

describe("Test_Thoughtworks",function(){
  var app;
  before(function(){
    app = retoTest.ResourcesManager();
  })

  it("Poder agregar un Resource",function(){
    var resource = ["chrome","mysql"];
    assert.deepEqual(resource,app.resources);
  })

  /*it("Poder eliminar un Resource",function(){
    app.addResource();

  })*/
})
