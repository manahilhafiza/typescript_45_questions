var megicians_names = ['harry poter', 'hermione', 'albus', 'ron'];
function make_great(megicianarry) {
    for (var i = 0; i < megicianarry.length; i++)
        megicians_names[i] = +'the great' + megicianarry[i];
}
function show_megicians(megician) {
    megician.forEach(function (element) {
        console.log(element);
    });
}
show_megicians(megicians_names);
make_great(megicians_names);
