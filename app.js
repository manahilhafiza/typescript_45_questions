function make_album(artist, title) {
    var dictaionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictaionaries;
}
var album = make_album("Ali", "light");
console.log(album);
album = make_album("Taha", "dark");
console.log(album);
album = make_album("Minal", "red wave");
console.log(album);
