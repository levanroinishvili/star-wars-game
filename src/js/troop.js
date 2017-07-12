'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

    trp.style.left = (Math.random() < .5 ? '-' : '') + '5000px';
    trp.style.top = (Math.random() < .5 ? '-' : '') + '5000px';
    DOMparent.appendChild(trp);
    trp.clientWidth;trp.classList.add('smooth');
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