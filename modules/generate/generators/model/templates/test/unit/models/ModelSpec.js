describe("app.models.{name}", function() {
  var {name} = Ext.ModelMgr.getModel("app.models.{name}"),
      instance;

  beforeEach(function() {
    instance = new {name}({});
  });
});
