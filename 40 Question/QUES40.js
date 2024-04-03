"use strict";
function make_album(artist_name, album_title, num_tracks) {
    let album = {
        artist: artist_name,
        title: album_title
    };
    if (num_tracks) {
        album['tracks'] = num_tracks;
    }
    return album;
}
let album1 = make_album("Atif Aslam", "Pehli Dafa");
let album2 = make_album("Ali Zafar", "Jee Dhoondta Hai");
let album3 = make_album("Arijit sing", "Tum Hi Ho");
console.log(album1);
console.log(album2);
console.log(album3);
