//some random app file
var player;

var appController = {
    init: function() {
        console.log("initialize the app!");
        player = {
            hp: 100,
            weapon: "stick"
        }
    },
    randomNumber: function(maximum, isInteger) {
        var rand = Math.random() * maximum;
        if (isInteger) {
            return Math.floor(rand);
        } else {
            return rand;
        }
    },
    weaponList: ["sword", "axe", "bow", "dagger"],
    equipWeapon: function(whichWeapon, playerObj) {
        console.log("equip a new weapon!");
        if (playerObj) {
            playerObj.weapon = this.weaponList[whichWeapon];
        } else {
            player.weapon = this.weaponList[whichWeapon];
        }
        return true;
    }
}

appController.init();

console.log("player is equipping a "+player.weapon);
appController.equipWeapon(2);
console.log("player is equipping a "+player.weapon);