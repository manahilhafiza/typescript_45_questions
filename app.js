var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var megicians_names = ['harry poter ', 'hermione ', 'albus ', 'ron'];
function copy_Array(arr) {
    return __spreadArray([], arr, true);
}
function make_great(megicianarry) {
    for (var i = 0; i < megicianarry.length; i++)
        megicianarry[i] = ' the Great ' + megicianarry[i];
}
function show_megicians(megician) {
    megician.forEach(function (element) {
        console.log(element);
    });
}
var megicianArraycopy = copy_Array(megicians_names);
make_great(megicianArraycopy);
console.log('\n\nthis is my orignal array');
show_megicians(megicians_names);
console.log('\n\nthis is my modify copy of the  array');
show_megicians(megicianArraycopy);
