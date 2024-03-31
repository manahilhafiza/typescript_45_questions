let current_users: string [] = ['TaHa','DaNiyal','SalMan','HamzaH','Jhon'];
let new_user: string [] = ['Bilal','TaHa','Dawood','Jameel','HamzaH'];

new_user.forEach(new_user => {
    let lowerCase:string = new_user.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
    console.log(`the username ${new_user} is not available. please write a different username`);
}
 else{
      console.log(`username  ${new_user} is available.`);
 }}) 
  
    