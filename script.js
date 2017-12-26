var beers = [];

function addBeer(name, category) {
    var beer = { "name": name, "category": category };
    beers.push(beer);
}

$(".post-beer").click(function () {
    addBeer($(".beer-input").val(), $(".category-input").val());
    renderBeers();
    $(".beer-input").val(""); 
    $(".category-input").val("");
});

function renderBeers() {
    $(".beers-list").find("li").remove();
    for (var i = 0; i < beers.length; i++) {
    $(".beers-list").append('<li>' + beers[i].name + '</li>' + '<li>' + beers[i].category + '</li>');
    }
}


