var assert = require('assert');
var retoTest = require('../assets/js/main.js');

describe("Test_Thoughtworks",function(){
var app;
  before(function(){
    app = new retoTest.ResourcesManager();
  })

  it("you can add resource",function(){

    app.addResource("chrome");
    app.addResource("mysql");
    var resource = [{id:0,type:"chrome"},{id:1,type:"mysql"}];
    assert.deepEqual(resource,app.resources);
  })

  it("you can delete a resource",function(){
    app.addResource("chrome");
    app.addResource("mysql");
    var resource = [{id:0,type:"chrome"},{id:1,type:"mysql"}];
    assert.deepEqual(resource,app.resources);
  })

  it("can't add empty resource",function(){

    app.addResource("chrome");
    app.addResource("");
    var resource = [{id:0,type:"chrome"}];
    assert.deepEqual(resource,app.resources);
  })

  it("can't add an existing resource",function(){
    app.addResource("mysql");
    app.addResource("mysql");
    var resource = [{id:0,type:"chrome"}];
    assert.deepEqual(resource,app.resources);
  })

})
