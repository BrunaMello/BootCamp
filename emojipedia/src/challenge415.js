import emojipedia from "./emojipedia.js";



const newArray = emojipedia.map(function (emoji) {
    return  emoji.meaning.substring(0, 100);
});

console.log(newArray);
