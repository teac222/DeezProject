$(document).ready(function () {
    let storage = localStorage.getItem("favoris");
    let fav = storage ? JSON.parse(storage) : storage;
    if (fav && fav.length > 0) {
        let favRandom = Math.floor(Math.random() * fav.length);
        fav = fav[favRandom];

        $('#randomFavorite').append("<div class=card id=card" + favRandom + "></div>");
        $("#card" + favRandom).append("<div id=description" + favRandom + " class=description></div>");
        $("#description" + favRandom).append("<img src=" + fav.cover + " class=cover >");
        $("#description" + favRandom).append("<div id=track" + favRandom + " class=track></div>");
        $("#track" + favRandom).append("<p class=song>" + fav.title + " </p>");
        $("#track" + favRandom).append("<div id=credit" + favRandom + " class=credit ></div>");
        $("#credit" + favRandom).append("<p class=artist>" + fav.artist + " </p>");
        $("#credit" + favRandom).append("<p class=album>" + fav.album + " </p>");
        $("#card" + favRandom).append("<audio controls id=musicPlayer" + favRandom + " class=musicPlayer src=" + fav.player + "></audio>");

        $('.changeTrack').on('click', function () {
            location.reload(true);
        });
    }
    else {
        $("#no-fav").html("Okay, you haven't had time to add favorites yet, you're forgiven");
        $('.changeTrack').css('display', 'none');
    }

});

