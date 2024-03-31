//guest list: 3 GUEST INVITED
let Guest_List: string  [] = ['Kamran Tessori','Nawaz Sharef','Asif Ali'];

//for(let i = 0; i<Guest_List.length; i++){

   // console.log('Dear Mr.' + Guest_List [i] + ',\n\n IT IS OUR PLEASURE TO INVITE YOU IN OUR PARTY. \n\n Thank You!');
//}
//absent guest

let absent_Guest: string = 'Kamran Tessori';

//new guest

let new_Guest: string = 'Daniyal';

Guest_List[0] = new_Guest;

//for(let i = 0; i<Guest_List.length; i++){
   // console.log('Dear Mr.' + Guest_List [i] + ',\n\n IT IS OUR PLEASURE TO INVITE YOU IN OUR PARTY. \n\n Thank You!');
//}
//console.log(`Dear Mr. ${absent_Guest} is not coming to the party.`);

//3 more guest invited:
//console.log('Good News! we find big dinner table so we are inviting 3 more guest.');

Guest_List.unshift('Sir Zia');

Guest_List.splice( 2, 0 ,'Maryum Nawaz');

Guest_List.push('Bilawal Bhutto');

//for(let i = 0; i<Guest_List.length; i++){
//console.log('Dear Mr.' + Guest_List [i] + ',\n\n It Is Our Pleasure to invite You in  Our Party. \n\n Thank You!\n\n');
//}   
  
// REMOVE GUEST LIST ONLY 2 GUEST INVITED:
//console.log('\N Sorry we can not arrange big table, only 2 peoples will be invited.');

while(Guest_List.length>2){
let Remove_Guest = Guest_List.pop(); 
//console.log (`Dear Mr. sorry! ${Remove_Guest} you can not invited to dinner.`);
}
//STILL INVITED GUEST:
//for(let i = 0; i<Guest_List.length; i++){
//console.log('Dear Mr.' + Guest_List [i] + ',\n\n you are still invited to dinner. \n\n Thank You! \n\n');
 //}
//EMPTY GUEST LIST
Guest_List.splice(0,2);
console.log(Guest_List);

//Exercise 19 
console.log(`total number of guest + ${Guest_List.length}`);

