let megicians_names: string [] = ['harry poter','hermione','albus','ron'];


function make_great (megicianarry: string []){
    for(let i = 0; i < megicianarry.length ; i++)
    megicians_names [i] =   'the great' + megicianarry [i];

}

function show_megicians (megician:string[]){
   megician.forEach(element => {
      console.log(element);
   });
}
 show_megicians(megicians_names)
  make_great(megicians_names)