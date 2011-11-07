/**
 * @class app.models.{name}
 * @extends Ext.data.Model
 * The app.models.{name} model
 */
Ext.regModel("app.models.{name}", {
  fields: [
<tpl for="fields">
    \{name: "{name}", type: "{type}"\}{[xindex != xcount ? "," : ""]}</tpl>
  ]
});
