var Fluxxor = require('fluxxor');
var shortcuts = require('../config/shortcuts');
var keymaster = require('keymaster');

module.exports = Fluxxor.createStore({
    initialize() {
      var store = this;
      Object.keys(shortcuts).map(function (shortcut) {
        var action = function () {
          shortcuts[shortcut].call(store.flux.dispatchBinder);
          return false;
        };
        keymaster(shortcut, action);
      });
    }

  }
);