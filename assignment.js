// feetToMile 

function feetToMile(feet) {
    var mile = feet / 5280;
    if(Math.sign(feet) > 0){
        return mile;
    }
    
    

}
var mileCheck = feetToMile(55280);
console.log(mileCheck);


 // woodCalculator


function woodCalculator(chair, table, bed) {
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;

}
var woodNeed = woodCalculator(10, 10, 10);
console.log("Total wood need:", woodNeed, "cubic feet")




//brickCalculator

function brickCalculator(floor) {
    var brick;
    if(floor >= 0 && floor <= 10)
     brick = 1000 * 15 * floor; // For 1 floor 1000 brick needed, 1-10 floors are 15feet
    else if(floor >= 11 && floor <= 20)
     brick = 1000 * 12 * floor; // For 1 floor 1000 brick needed, 11-20 floors are 12feet
    else
     brick = 1000 * 10 * floor; // For 1 floor 1000 brick needed, more than 20 floors are 10feet
    return brick //returns total brick needed;
}

var totalBricks = brickCalculator(40);
console.log( "total bricks need:", totalBricks);




// tinyFriend


function tinyFriend(friendsName) {
    var tinyName = friendsName[0];
    
    for(var i = 0; i < friendsName.length; i++) {
        var recentName = friendsName[i];
        if(recentName.length < tinyName.length) {
            tinyName = recentName;
        }
    }
    return tinyName;
}

var result = tinyFriend(["Saif","Ahmed", "rahman", "Saifur"]);
console.log(result)