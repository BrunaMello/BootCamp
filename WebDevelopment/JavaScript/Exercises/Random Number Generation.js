
//0 - 0.9 random number
var n = Math.random();

n = n * 6;

n = Math.floor(n) + 1;

console.log(n)

var name1 = prompt("Type your name");
var name2 = prompt("Type the your soulmate's name");

var loveScore = Math.random();

loveScore = loveScore * 100;

n = Math.floor(loveScore) + 1;

if (loveScore < 30){
    alert("Love Score: " + loveScore + "%, think about it!" );
} else if (loveScore > 29 && loveScore < 50){
    alert("Love Score: " + loveScore + "%, not too bad!" );
} else if (loveScore > 49 && loveScore < 75){
    alert("Love Score: " + loveScore + "%, almost soulmates!" );
} else {
    alert("Love Score: " + loveScore + "%, Soulmates!" );
}

