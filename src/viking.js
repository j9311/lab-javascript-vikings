



// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage (damage) {
     this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
}
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry (){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
        receiveDamage(damage) {
            this.health -= damage;
        
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`
        }
    }

}



// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(vikingRand){
        this.vikingArmy.push(vikingRand)

    }
    addSaxon(saxonRand){
        this.saxonArmy.push(saxonRand)

    }
    vikingAttack() {
        let rand = Math.floor(Math.random() * this.saxonArmy.length)
        let saxon = this.saxonArmy[rand]
        let result = saxon.receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength)
        saxon.health <= 0 && this.saxonArmy.splice(rand)
        return result
      }
      saxonAttack() {
        let rand = Math.floor(Math.random() * this.vikingArmy.length)
        let viking = this.vikingArmy[rand]
        let result = viking.receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength)
        viking.health <= 0 && this.vikingArmy.splice(rand)
        return result
      }
    showStatus(){
    }
}


let vikingRand = new Viking ('Blorg',Math.random()*20, Math.random()*40)
let saxonRand = new Saxon (Math.random()*10, Math.random()*20)
let newWar = new War ()
newWar.addSaxon(saxonRand)
newWar.addViking(vikingRand)



