/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Waiting in vain",
"Toast",
"Stay So",
"Smile Jamaica",
"Murder She Wrote",
"Gwan Big Up Urself"
];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links =["https://images-na.ssl-images-amazon.com/images/I/C1y54gHJoBS._SL1000_.png",
"https://nesthq.com/wp-content/uploads/2017/10/unnamed-1-1024x680.jpg",
"https://urbanislandz.com/wp-content/uploads/2015/07/Busy-Signal-arrest1.jpg",
"https://echolocationtalent.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-25-at-18.33.57.png",
"https://res-3.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,f_auto,w_800/v1489504843/event-poster-7567801.jpg",
"https://idolwiki.com/pics/RoyWoods/RoyWoods.jpg"]

var artists =["Bob Marley and The Wailers",
"Koffee",
"Busy Signal",
"Kronixx",
"Chaka Demus and Pilers",
"Roy Woods"]

var songLengths =["4:15",
"3:05",
"3:41",
"3:38",
"4:07",
"3:19"]

var songLinks=["https://www.youtube.com/watch?v=qTG7ZxO3-sE",
"https://www.youtube.com/watch?v=p8HoEvDh70Y",
"https://www.youtube.com/watch?v=gjMH831P9jM",
"https://www.youtube.com/watch?v=vofff0Ei3kk",
"https://www.youtube.com/watch?v=Bfcs2x5Cla0",
"https://www.youtube.com/watch?v=a5oHGZblGks"]



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song){
         $('#songs').append("<li>"+song+"</li>");
    });

    images_links.forEach(function(images_links){
        $('#images').append("<img src="+images_links+">");
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
