//guest list:
var Guest_List = ['Kamran Tessori', 'Nawaz Sharef', 'Asif Ali'];
//for(let i = 0; i<Guest_List.length; i++){
// console.log('Dear Mr.' + Guest_List [i] + ',\n\n IT IS OUR PLEASURE TO INVITE YOU IN OUR PARTY. \n\n Thank You!');
//}
//absent guest
var absent_Guest = 'Kamran Tessori';
//new guest
var new_Guest = 'Daniyal';
Guest_List[0] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\n IT IS OUR PLEASURE TO INVITE YOU IN OUR PARTY. \n\n Thank You!');
}
console.log("Dear Mr. ".concat(absent_Guest, " is not coming to the party."));
//3 more guest invited:
console.log('Good News! we find big dinner table so we are inviting 3 more guest.');
Guest_List.unshift('Sir Zia');
Guest_List.splice(2, 0, 'Maryum Nawaz');
Guest_List.push('Bilawal Bhutto');
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\n It Is Our Pleasure to invite You in  Our Party. \n\n Thank You!');
}
