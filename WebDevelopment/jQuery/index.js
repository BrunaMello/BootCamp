//selector $
$("h1").css("color", "green");

//manipulating texts
$("h2").text("Bye");

//manipulating attributes
$("a").attr("href", "www.bing.com");

//add event listeners
$("h1").click(function () {
    $("h1").css("color", "red")
});

$("button").click(function () {
    $("h1").css("color", "purple")
});

// $("input").keypress(function (event) {
//     console.log(event.key)
//});

// challenge
$("input").keypress(function (event) {
    $("h1").text(event.key);
})

// on method
$("h2").on("mouseover", function () {
    $("h2").css("color", "red")
} );

//adding em removing elements
$("h1").before("<button class='btn btn-danger'>New</button>");
$("h1").after("<button class='btn btn-danger'>New</button>");
$("h1").prepend("<button class='btn btn-danger'>New</button>");
$("h1").append("<button class='btn btn-danger'>New</button>");

//animations hide, fadeout, fadein, toggle
// $("h1").on("click", function () {
//     $("h1").hide();
// } );

$("h1").on("click", function () {
    $("h2").toggle();
} );

$("h2").on("click", function () {
    $("h1").animate({opacity: 0.50});
} );








