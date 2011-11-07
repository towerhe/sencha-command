/**
 * @class {name}
 * @extends Ext.Controller
 * The {name} controller
 */
Ext.regController("app.controllers.{name}", {
<tpl for="actions">
  {.}: function() {
      
  }{[xindex != xcount ? ",\n\n" : ""]}</tpl>   
});
