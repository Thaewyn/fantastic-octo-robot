//some random app file

var monsterList = ["goblin", "warg", "ogre", "troll"];
var monster;

var appController = {
    init: function() {
        console.log("initialize the app!");
        monster = this.makeMonster();
    },
    randomNumber: function(maximum, isInteger) {
        var rand = Math.random() * maximum;
        if (isInteger) {
            return Math.floor(rand);
        } else {
            return rand;
        }
    },
    makeMonster: function(whichMonster) {
        var newMonster = {
            name: "",
            hp: 5
        }
        if (whichMonster) {
            newMonster.name = monsterList[whichMonster];
        } else {
            newMonster.name = monsterList[this.randomNumber(monsterList.length, true)];
        }
        return newMonster;
    }
}

appController.init();

console.log("We have a monster! It's a "+monster.name);