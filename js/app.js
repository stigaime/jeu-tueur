class Killer {

    constructor(name, life) {
        this.name = name;
        this.life = life;
    }

    attack(survivor, survivorIndex) {

        let deathProb = Math.random();
        let attackProb = Math.random();
        let dieWithDamProb = Math.random();

        if(deathProb > survivor.deathProb) {

            console.log("Jason a tué " + survivor.name);
            deadPeople.push(survivor);
            survivors.splice(survivorIndex, 1);

        } else if(attackProb < survivor.damageProb) {

            console.log(survivor.name + " a esquivé et a infligé 10 points de dégats à Jason");
            jason.life -= 10;

        } else if(dieWithDamProb > survivor.dieWithDamProb) {

            console.log(survivor.name + " est mort en infligeant 15 dégats à Jason");
            jason.life -= 15;
            deadPeople.push(survivor);
            survivors.splice(survivorIndex, 1);

        } else {

            console.log("Jason n'a toujours pas reperé de victime !");
            
        }

        if(jason.life <= 0) {
            console.log("Jason est mort !");
            console.log("Il reste " + survivors.length + " survivants");

            let text = "";
            for(let i = 0; i < deadPeople.length; i++) {
                text += deadPeople[i].name + " ,";
            }
            console.log("Les survivants ont gagné mais RIP à " + text);

        }

    }

}

class Character {

    constructor(name, deathProb, damageProb, dieWithDamProb) {
        this.name = name;
        this.deathProb = deathProb;
        this.damageProb = damageProb;
        this.dieWithDamProb = dieWithDamProb;
    }

}

let survivors = [
    new Character("nerd", 0.4, 0.4, 0.5),
    new Character("blonde", 0.5, 0.4, 0.3),
    new Character("black", 0.6, 0.6, 0.5),
    new Character("hero", 0.2, 0.7, 0.8),
    new Character("sportif", 0.3, 0.8, 0.6)
];

let deadPeople = [];


let jason = new Killer("Jason", 70);

while (jason.life > 0 && survivors.length > 0) {

    let survivorIndex = Math.floor(Math.random() * (survivors.length - 1));
    jason.attack(survivors[survivorIndex], survivorIndex);

}