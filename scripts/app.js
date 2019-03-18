//some random app file

var appController = {
    init: function() {
        console.log("initialize the app!");
    },
    randomNumber: function(maximum, isInteger) {
        var rand = Math.random() * maximum;
        if (isInteger) {
            return Math.floor(rand);
        } else {
            return rand;
        }
    }
}

appController.init();