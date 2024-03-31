var Guest_List = ['Kamran Tessori', 'Nawaz Sharef', 'Asif Ali'];
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\n It is Our Pleasure to invite you in our Party. \n\n Thank You!');
}
var absent_Guest = 'Kamran Tessori';
var new_Guest = 'Daniyal';
Guest_List[0] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\n It is Our Pleasure to invite you in our Party. \n\n Thank You!');
}
console.log("Dear Mr. ".concat(absent_Guest, " is not coming to the party."));
