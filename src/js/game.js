'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _troop = require('./troop');

var _troop2 = _interopRequireDefault(_troop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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