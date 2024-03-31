let megicians_names: string [] = ['harry poter ','hermione ','albus ','ron'];

function copy_Array (arr:string[]){
    return[...arr]
}

function make_great (megicianarry: string []){
    for(let i = 0; i < megicianarry.length ; i++)

    megicianarry [i] =   ' the Great ' + megicianarry [i];

}

function show_megicians ( megician:string[]){

   megician.forEach(element => {

      console.log(element);
   });
}
 const megicianArraycopy = copy_Array(megicians_names)

  make_great(megicianArraycopy);

  console.log('\n\nthis is my orignal array');

  show_megicians(megicians_names);
  console.log('\n\nthis is my modify copy of the  array')

 show_megicians(megicianArraycopy);
