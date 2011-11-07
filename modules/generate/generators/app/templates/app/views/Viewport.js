/**
 * @class app.views.Viewport
 * @extends Ext.Panel
 * This is a default generated class which would usually be used to initialize your application's
 * main viewport. By default this is simply a welcome screen that tells you that the app was 
 * generated correctly.
 */
app.views.Viewport = Ext.extend(Ext.Panel, {
  id        : 'viewport',
  layout    : 'card',
  fullscreen: true,

  initComponent: function() {

    Ext.apply(this, {
      dockedItems: [{
        xtype: 'toolbar',
        dock : 'top',
        title: 'Sencha Touch Application'
      }]
    });

    app.views.Viewport.superclass.initComponent.apply(this, arguments);
  }

});
