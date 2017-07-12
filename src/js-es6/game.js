import troop from './troop';

const settings = {
  imagesFolder : 'images/',
  DarthVader : {
    number:         1,  // Number of Darth Vaders in game
    image:          'DarthVader.png', // Image
    initialHealth:  100,// Number of health points at start
    damage:         9   // Points deducted from Darth Vader when hit
  },

  stormtroopers : {
    number:         3,  // Number of stormtroopers in game
    image:          'stormtrooper.png', // Image
    initialHealth:  85, // Number of health points at start
    damage:         10  // Points deducted from a stormtroopers when hit
  },

  dronetroopers : {
    number:         8,  // Number of dronetroopers in game
    image:          'dronetrooper.png', // Image
    initialHealth:  45, // Number of health points at start
    damage:         14  // Points deducted from a dronetroopers when hit
  }
};

export default class game {
  constructor() {
    this.army = [];   // Will hold actual troop objects
    this.alive = [];  // Will hold indices of alive troops, without gaps - useful for hitting random troops
  }
  start() {
    flashRestartStop();

    this.army.forEach( tr=>{tr.remove();}); // Remove all troops from the board - if the game is re-starting

    let numberOfSoldiers = settings.DarthVader.number + settings.stormtroopers.number + settings.dronetroopers.number;

    this.alive = new Array(numberOfSoldiers).fill(null).map( (ignore,index) => index );

    this.army = new Array(numberOfSoldiers)
      .fill(null) // Fill array with null - the array does not have all array methods until this step
      .map((soldier,index)=>{ // Now fill the array with the actual troops
        let newTroop, barracks;
        if ( index < settings.DarthVader.number ) {
          newTroop = settings.DarthVader;
          barracks = "DarthVader_barracks";
        } else if ( index < settings.DarthVader.number + settings.stormtroopers.number ) {
          newTroop = settings.stormtroopers;
          barracks = "stormtrooper_barracks";
        } else {
          newTroop = settings.dronetroopers;
          barracks = "dronetrooper_barracks";
        }
        return new troop(index,newTroop.initialHealth,newTroop.damage,settings.imagesFolder+newTroop.image,document.getElementById(barracks));
      });
  }

  // Hit a troop with index i
  hit(i) {
    if ( i<0 || i>this.army.length || i!==Math.floor(i) ) throw new Error(`No troop with index ${i}`);
    let troopUnderFire = this.army[i];
    if ( troopUnderFire.hit() === 0 ) { // Was the troop under fire killed?
      if ( i<settings.DarthVader.number ) { // Was the killed troop Darth Vader?
        // Darth Vader was killed - mark all alive troops as killed
        this.alive.forEach( aliveIndex => {
          this.army[aliveIndex].kill();
        });
        flashRestartStart();
      } else {
        // A troop other than Darth Vader was killed - remove only the troop killed
        troopUnderFire.kill();
        // Remove the index of the killed troop from this.alive array
        this.alive.splice(this.alive.indexOf(i),1);
      }
    }
  }

  // Hit random troop
  hitRandom() {
    // Select from this.alive array a random value. This will necessarily be an index of an alive troop
    this.hit(this.alive[Math.floor(Math.random()*(this.alive.length))]);
  }
}
