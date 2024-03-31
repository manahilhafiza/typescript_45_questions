function make_sandwiches(items) {
    console.log('\nmaking a sandwiches with:');
    items.forEach(function (element) { return console.log("" + element); });
    console.log(' Enjaoy your sandwiches!\n');
}
make_sandwiches(['hum', 'cheese', 'lettuce']);
make_sandwiches(['turkey', 'becon']);
make_sandwiches(['peanut', 'jelly']);
