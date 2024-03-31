var age = 25;
if (age < 2) {
    console.log('  person is baby ');
}
else if (age >= 2 && age < 4) {
    console.log(' person is toddler');
}
else if (age >= 4 && age < 13) {
    console.log(' person is kid');
}
else if (age >= 13 && age < 20) {
    console.log(' person is teenager');
}
else if (age >= 20 && age < 65) {
    console.log(' person is adult');
}
else {
    console.log(' person is older');
}
