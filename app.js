var user_Name = ['admin', 'saqib', 'junaid', 'khan zada', 'ibrar'];
for (var i = 0; i < user_Name.length; i++) {
    if (user_Name[i] === "admin") {
        console.log('Hello admin! would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(user_Name[i], ",   Thank you logging in again! "));
    }
}
