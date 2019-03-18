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
        if (playerObj) {
            playerObj.weapon = this.weaponList[whichWeapon];
        } else {
            this.player.weapon = this.weaponList[whichWeapon];
        }
        return true;
    }
}

appController.init();

appController.equipWeapon(2);
