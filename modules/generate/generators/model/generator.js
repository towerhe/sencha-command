/**
 * @class Ext.generator.Model
 * @extends Ext.generator.Base
 * Generates a model file based on config
 */
Ext.generator.Model = Ext.extend(Ext.generator.Base, {

    generate: function() {
        var modelFile   = 'app/models/' + this.name + '.js',
            specFile    = 'test/unit/models/' + this.name + 'Spec.js',
            fixtureFile = 'test/fixtures/' + this.name + '.js';
        
        this.headline("Generating the " + this.name + " model");
        this.template("app/models/Model.js",           this, modelFile);
        this.template("test/unit/models/ModelSpec.js", this, specFile);
        this.template("test/fixtures/Fixture.js",      this, fixtureFile);
        
        this.insertInclude(modelFile, 'sencha-models');
        
        this.insertInclude('../../' + modelFile,               'app-models',  'test/unit/index.html');
        this.insertInclude('models/' + this.name + 'Spec.js',      'spec-models', 'test/unit/index.html');
        this.insertInclude('../fixtures/' + this.name + '.js', 'fixtures',    'test/unit/index.html');
    },
    
    decodeArgs: function(args) {
        this.name = args[0];
        this.fields = args.slice(1);
        
        var length = this.fields.length,
            field, i;
        
        for (i = 0; i < length; i++) {
            field = this.fields[i].split(':');
            
            this.fields[i] = {
                name: field[0],
                type: field[1]
            };
        }
    }
});

Ext.regGenerator('model', Ext.generator.Model);
