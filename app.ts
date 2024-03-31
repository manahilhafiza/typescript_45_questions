//guest list:
let Guest_List: string  [] = ['Kamran Tessori','Nawaz Sharef','Asif Ali'];

//for(let i = 0; i<Guest_List.length; i++){

   // console.log('Dear Mr.' + Guest_List [i] + ',\n\n IT IS OUR PLEASURE TO INVITE YOU IN OUR PARTY. \n\n Thank You!');
//}
//absent guest

let absent_Guest: string = 'Kamran Tessori';

//new guest

let new_Guest: string = 'Daniyal';

Guest_List[0] = new_Guest;

for(let i = 0; i<Guest_List.length; i++){
    console.log('Dear Mr.' + Guest_List [i] + ',\n\n IT IS OUR PLEASURE TO INVITE YOU IN OUR PARTY. \n\n Thank You!');
}
console.log(`Dear Mr. ${absent_Guest} is not coming to the party.`);

//3 more guest invited:
console.log('Good News! we find big dinner table so we are inviting 3 more guest.');

Guest_List.unshift('Sir Zia');

Guest_List.splice( 2, 0 ,'Maryum Nawaz');

Guest_List.push('Bilawal Bhutto');

for(let i = 0; i<Guest_List.length; i++){
console.log('Dear Mr.' + Guest_List [i] + ',\n\n It Is Our Pleasure to invite You in  Our Party. \n\n Thank You!');
}   
  
