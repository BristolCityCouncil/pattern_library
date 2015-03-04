Function.prototype.bind = function(a) {var b = this;return function() {return b.apply(a, arguments);}}
var console=console||{"log":function(){}};
YUI.add('module', function(Y){
    var c = { // config
        bind: $.proxy, // Proxy object (fn, this)
        s: $, // selector function (selector) + s.on method (ev, fn)
        extend: Y.mix, // object extend function (child, parent)
        each: $.each // foreach function (obj, fn(key, val) )
    };
    
    Y.Test.Suite.prototype.run = function(){
        if(this.hasRun) return;
        this.hasRun = true;
        Y.Test.Runner.add(this).run();
    };
    Y.namespace("uk.gov.bristol");
    // Stephens MicroModule Definition

    //     Backbone.js 1.1.2 [extend method]
    //     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    //     Backbone may be freely distributed under the MIT license.
    //     For all details and documentation:
    //     http://backbonejs.org
    var Module = function(selector, options){
            this.options = this.getOptions(options);
            selector = (!!selector) ? selector : "body";
            this.$el = (typeof selector === "object") ? selector : $(selector);
            if(!this.$el.length) return false;
            this.setEvents();
            this.DOM = this.getDOM();
            this.render(options);
        },
        jQueryPlugin = function(name, child){
            $.fn[name] = function(options){
                return this.each(function(i, el){
                    return new child($(el), options);
                });
            };
        };

    Module.extend = function(protoProps, staticProps) {
        var parent = this;
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        child = function(){ return parent.apply(this, arguments); };

        // Add static properties to the constructor function, if supplied.
        c.s.extend(child, parent, staticProps);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        var Surrogate = function(){ this.constructor = child; };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) c.s.extend(child.prototype, protoProps);

        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;

        // If a pluginName is set
        if(protoProps.pluginName){
            // Run the jQuery Plugin generator
            jQueryPlugin(protoProps.pluginName, child);
        }

        return child;
    };
 
    c.s.extend(Module.prototype, {
        events: [],
        DOM: [],
        options: [],
        render: function(){ return this; },
        getDOM: function() {
            var dom = [];
            c.each(this.DOM, function(k, v){
                if(typeof v === 'object') return;
                dom[k] = this.$el.find(v);
            }.bind(this));
            dom['el'] = this.$el;
            return dom;
        },
        getOptions: function(options){
            return c.s.extend({}, this.options, options);
        },
        setEvents: function(){
            c.each(this.events, function(k, fn){
                if(typeof fn === "string") fn = this[fn];
                var arr = k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').match(/^(\S+)\s(.*)/).slice(1), doml,
                    sel = arr[1].replace(/\\/g, '');
                    arr[0] = (arr[0]=='hover')?'mouseenter':arr[0];
                    doml = (sel[0]=="$")? this.DOM[sel.slice(1)] : this.$el.find(sel) ;
                    this.$el.on(arr[0], doml, fn.bind(this));
            }.bind(this));
        },
    });

    Y.uk.gov.bristol.module = Module;

}, '1.0.1', {
    requires: [
        'event',
        'test',
        'node-event-simulate',
        'node',
        'test-console',
    ]
});