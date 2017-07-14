!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v&&(c.default=c.__useDefault=v);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("b", [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var nextTroopId = 0;

  var troop = function () {
    function troop(externalId, maxhealth, damage, image, DOMparent) {
      _classCallCheck(this, troop);

      this.externalId = externalId;
      var id = 'troop_'.concat(String(++nextTroopId));
      this.id = id;
      this.maxhealth = maxhealth;
      this.health = maxhealth;
      this.damage = damage;

      var trp = document.createElement('DIV');
      trp.classList.add('troop');
      trp.setAttribute('id', id);
      trp.addEventListener('click', function () {
        starWars.hit(externalId);
      });
      var healthbox = document.createElement('DIV');
      healthbox.classList.add('healthbox');
      var health = document.createElement('DIV');
      health.classList.add('health');
      health.setAttribute('id', id.concat('_health'));
      var healthpoints = document.createElement('DIV');
      healthpoints.classList.add('healthpoints');
      healthpoints.setAttribute('id', id.concat('_healthpoints'));
      var avatar = new Image();
      avatar.classList.add('avatar');
      avatar.src = image;

      healthbox.appendChild(health);
      healthbox.appendChild(healthpoints);
      trp.appendChild(healthbox);
      trp.appendChild(avatar);

      trp.style.left = (Math.random() < 0.5 ? '-' : '') + '5000px';
      trp.style.top = (Math.random() < 0.5 ? '-' : '') + '5000px';
      DOMparent.appendChild(trp);
      var ignore = trp.clientWidth;
      trp.classList.add('smooth');
      trp.style.left = '0';trp.style.top = '0';
      // Animate entrance
      this.DOM = trp;

      this.setHealth(maxhealth);
    }

    _createClass(troop, [{
      key: 'setHealth',
      value: function setHealth(newHealthPoints) {
        if (newHealthPoints < 0) newHealthPoints = 0;else if (newHealthPoints > this.maxhealth) newHealthPoints = this.maxhealth;else newHealthPoints = Math.floor(newHealthPoints);
        this.health = newHealthPoints;

        document.getElementById(this.id.concat('_health')).style.width = String(Math.ceil(100 * newHealthPoints / this.maxhealth)).concat('%');
        document.getElementById(this.id.concat('_healthpoints')).innerHTML = String(newHealthPoints);

        return newHealthPoints;
      }
    }, {
      key: 'hit',
      value: function hit() {
        this.DOM.classList.add('hit');
        setTimeout(function () {
          this.classList.remove('hit');
        }.bind(this.DOM), 300); // Remove hit class after a delay
        return this.setHealth(this.health - this.damage);
      }

      // Marked as dead

    }, {
      key: 'kill',
      value: function kill() {
        this.DOM.classList.add('killed');
      }

      // Remove troop's DOM element from the DOM

    }, {
      key: 'remove',
      value: function remove() {
        this.DOM.parentElement.removeChild(this.DOM);
      }
    }]);

    return troop;
  }();

  exports.default = troop;
});
$__System.registerDynamic("c", ["b"], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _troop = $__require("b");

  var _troop2 = _interopRequireDefault(_troop);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var settings = {
    imagesFolder: 'images/',
    DarthVader: {
      number: 1, // Number of Darth Vaders in game
      image: 'DarthVader.png', // Image
      initialHealth: 100, // Number of health points at start
      damage: 9 // Points deducted from Darth Vader when hit
    },

    stormtroopers: {
      number: 3, // Number of stormtroopers in game
      image: 'stormtrooper.png', // Image
      initialHealth: 85, // Number of health points at start
      damage: 10 // Points deducted from a stormtroopers when hit
    },

    dronetroopers: {
      number: 8, // Number of dronetroopers in game
      image: 'dronetrooper.png', // Image
      initialHealth: 45, // Number of health points at start
      damage: 14 // Points deducted from a dronetroopers when hit
    }
  };

  var game = function () {
    function game() {
      _classCallCheck(this, game);

      this.army = []; // Will hold actual troop objects
      this.alive = []; // Will hold indices of alive troops, without gaps - useful for hitting random troops
    }

    _createClass(game, [{
      key: 'start',
      value: function start() {
        flashRestartStop();

        this.army.forEach(function (tr) {
          tr.remove();
        }); // Remove all troops from the board - if the game is re-starting

        var numberOfSoldiers = settings.DarthVader.number + settings.stormtroopers.number + settings.dronetroopers.number;

        this.alive = new Array(numberOfSoldiers).fill(null).map(function (ignore, index) {
          return index;
        });

        this.army = new Array(numberOfSoldiers).fill(null) // Fill array with null - the array does not have all array methods until this step
        .map(function (soldier, index) {
          // Now fill the array with the actual troops
          var newTroop = void 0,
              barracks = void 0;
          if (index < settings.DarthVader.number) {
            newTroop = settings.DarthVader;
            barracks = "DarthVader_barracks";
          } else if (index < settings.DarthVader.number + settings.stormtroopers.number) {
            newTroop = settings.stormtroopers;
            barracks = "stormtrooper_barracks";
          } else {
            newTroop = settings.dronetroopers;
            barracks = "dronetrooper_barracks";
          }
          return new _troop2.default(index, newTroop.initialHealth, newTroop.damage, settings.imagesFolder + newTroop.image, document.getElementById(barracks));
        });
      }

      // Hit a troop with index i

    }, {
      key: 'hit',
      value: function hit(i) {
        var _this = this;

        if (i < 0 || i > this.army.length || i !== Math.floor(i)) throw new Error('No troop with index ' + i);
        var troopUnderFire = this.army[i];
        if (troopUnderFire.hit() === 0) {
          // Was the troop under fire killed?
          if (i < settings.DarthVader.number) {
            // Was the killed troop Darth Vader?
            // Darth Vader was killed - mark all alive troops as killed
            this.alive.forEach(function (aliveIndex) {
              _this.army[aliveIndex].kill();
            });
            flashRestartStart();
          } else {
            // A troop other than Darth Vader was killed - remove only the troop killed
            troopUnderFire.kill();
            // Remove the index of the killed troop from this.alive array
            this.alive.splice(this.alive.indexOf(i), 1);
          }
        }
      }

      // Hit random troop

    }, {
      key: 'hitRandom',
      value: function hitRandom() {
        // Select from this.alive array a random value. This will necessarily be an index of an alive troop
        this.hit(this.alive[Math.floor(Math.random() * this.alive.length)]);
      }
    }]);

    return game;
  }();

  exports.default = game;
});
$__System.registerDynamic('a', ['c'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _game = $__require('c');

  var _game2 = _interopRequireDefault(_game);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var flashRestartTimeout = 300;
  var stopFlashRestart = false;

  function flashRestartStart() {
    stopFlashRestart = false;
    flashRestart1();
  }
  function flashRestartStop() {
    stopFlashRestart = true;
  }

  function flashRestart1() {
    document.getElementById('restart').classList.add('bright');
    setTimeout(flashRestart2, flashRestartTimeout);
  }

  function flashRestart2() {
    document.getElementById('restart').classList.remove('bright');
    if (!stopFlashRestart) setTimeout(flashRestart1, flashRestartTimeout);
  }

  window.flashRestartStart = flashRestartStart;
  window.flashRestartStop = flashRestartStop;

  function startGame() {
    var starWars = new _game2.default();
    starWars.start();
    window.starWars = starWars;
  }

  if (document.getElementById('dronetrooper_barracks')) startGame();else window.onload = startGame;
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});