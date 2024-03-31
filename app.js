var current_users = ['TaHa', 'DaNiyal', 'SalMan', 'HamzaH', 'Jhon'];
var new_user = ['Bilal', 'TaHa', 'Dawood', 'Jameel', 'HamzaH'];
new_user.forEach(function (new_user) {
    var lowerCase = new_user.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowerCase)) {
        console.log("the username ".concat(new_user, " is not available. please write a different username"));
    }
    else {
        console.log("username  ".concat(new_user, " is available."));
    }
});
