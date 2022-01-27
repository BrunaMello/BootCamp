// Creating Obj

var bellBoy1 = {
    name: "Tom",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"],
    //methods
    moveSuitcase: function () {
        alert("May I take your suitcase?")
        pickUpSuitcase();
        move();
    }
}

var bellBoy2 = {
    name: "Jimmy",
    age: 21,
    hasWorkPermit: false,
    languages: ["Portuguese", "English"]
}

var houseKeeper = {
    name: "Maria",
    yearsOfExperience: 10,
    howManyHotel: 5,
    cleanerRepetoire: ["barthroom", "lobby", "bedroom"]
}

// Creating Obj from Functions (Contructors)

function BellBoy (name, age, hasWorkPermit, languages) {  //name has to be capitalized
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;

    // methods default with constructor
    this.moveSuitcase = function () {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}

function HouseKeeper (name, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;

    // methods
    this.clear = function () {
        alert("Cleaning Room...");
    }
}

// Creating obj using constructor function

var houseKeeper1 = new HouseKeeper("Bruna", 10, ["Bathroom", "Bed"]);
console.log(houseKeeper1);

// Methods

