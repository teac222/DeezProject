$(document).ready(function () {
    // GENERER FAVORIS
    let fav = JSON.parse(localStorage.getItem("favoris")) || [];

    if (fav.length != 0) {

        for (let i = 0; i < fav.length; i++) {

            $('#favoriteTrack').append("<div class=card id=card" + [i] + "></div>");
            $("#card" + [i]).append("<div id=description" + [i] + " class=description></div>");
            $("#description" + [i]).append("<img src=" + fav[i].cover + " class=cover >");
            $("#description" + [i]).append("<div id=track" + [i] + " class=track></div>");
            $("#track" + [i]).append("<p class=song>" + fav[i].title + " </p>");
            $("#track" + [i]).append("<div id=credit" + [i] + " class=credit ></div>");
            $("#credit" + [i]).append("<p class=artist>" + fav[i].artist + " </p>");
            $("#credit" + [i]).append("<p class=album>" + fav[i].album + " </p>");
            $("#card" + [i]).append("<audio controls id=musicPlayer" + [i] + " class=musicPlayer src=" + fav[i].player + "></audio>");
            $("#card" + [i]).append("<button id=addFavorites" + [i] + " class=removeFavorites></button>");

            let idFav = fav[i].id;
            // SUPPRIMER LES FAVORIS
            $(`#addFavorites${i}`).on("click", fav[i].id, function (event) {

                fav = fav.filter(idFav => idFav.id !== event.data);

                localStorage.setItem("favoris", JSON.stringify(fav));
                $(this).parent().remove();
            });
        }
    }else {
        $("#favoriteTrack").html("What ?! No favorites ?! What the...");
    }
});