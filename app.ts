let Guest_List: string  [] = ['Kamran Tessori','Nawaz Sharef','Asif Ali'];

for(let i = 0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List [i] + ',\n\n It is Our Pleasure to invite you in our Party. \n\n Thank You!');
}


let absent_Guest: string = 'Kamran Tessori';

let new_Guest: string = 'Daniyal';

Guest_List[0] = new_Guest;

for(let i = 0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List [i] + ',\n\n It is Our Pleasure to invite you in our Party. \n\n Thank You!');
  
}   

console.log(`Dear Mr. ${absent_Guest} is not coming to the party.`);