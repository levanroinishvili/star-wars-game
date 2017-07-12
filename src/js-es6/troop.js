let nextTroopId = 0;

export default class troop {
  constructor(externalId, maxhealth,damage,image,DOMparent) {
    this.externalId = externalId;
    let id = 'troop_'.concat(String(++nextTroopId));
    this.id         = id;
    this.maxhealth  = maxhealth;
    this.health     = maxhealth;
    this.damage     = damage;

    let trp = document.createElement('DIV');
    trp.classList.add('troop');
    trp.setAttribute('id',id);
    trp.addEventListener('click',()=>{starWars.hit(externalId);});
    let healthbox = document.createElement('DIV');
    healthbox.classList.add('healthbox');
    let health = document.createElement('DIV');
    health.classList.add('health');
    health.setAttribute('id',id.concat('_health'));
    let healthpoints = document.createElement('DIV');
    healthpoints.classList.add('healthpoints');
    healthpoints.setAttribute('id',id.concat('_healthpoints'));
    let avatar = new Image();
    avatar.classList.add('avatar');
    avatar.src = image;

    healthbox.appendChild(health);
    healthbox.appendChild(healthpoints);
    trp.appendChild(healthbox);
    trp.appendChild(avatar);


    trp.style.left = (Math.random()<.5?'-':'') + '5000px';
    trp.style.top  = (Math.random()<.5?'-':'') + '5000px';
    DOMparent.appendChild(trp);
    trp.clientWidth; trp.classList.add('smooth');
    trp.style.left='0'; trp.style.top='0';
     // Animate entrance
    this.DOM = trp;

    this.setHealth(maxhealth);
  }

  setHealth(newHealthPoints) {
    if ( newHealthPoints < 0 ) newHealthPoints = 0;
    else if ( newHealthPoints > this.maxhealth ) newHealthPoints = this.maxhealth;
    else newHealthPoints = Math.floor(newHealthPoints);
    this.health = newHealthPoints;

    document.getElementById(this.id.concat('_health')).style.width = String(Math.ceil(100*newHealthPoints/this.maxhealth)).concat('%');
    document.getElementById(this.id.concat('_healthpoints')).innerHTML = String(newHealthPoints);

    return newHealthPoints;
  }

  hit() {
    this.DOM.classList.add('hit');
    setTimeout((function(){
      this.classList.remove('hit');})
    .bind(this.DOM),300); // Remove hit class after a delay
    return this.setHealth(this.health - this.damage);
  }

  // Marked as dead
  kill() {
    this.DOM.classList.add('killed');
  }

  // Remove troop's DOM element from the DOM
  remove() {
    this.DOM.parentElement.removeChild(this.DOM);
  }
}
