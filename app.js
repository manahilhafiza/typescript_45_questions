var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in a array. Make sure the array is not in alphabetical order.
var plcaces = ['Islamabad', 'Eifel Tower', 'Italy', 'Germany', 'Karachi'];
// Print your array in its original order.
console.log('orignal ' + plcaces);
//• Print your array in alphabetical order without modifying the actual list.
console.log('copy ' + __spreadArray([], plcaces, true).sort());
//• Show that your array is still in its original order by printing it.
console.log('orignal ' + plcaces);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + __spreadArray([], plcaces, true).sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log('orignal' + plcaces);
//• Reverse the order of your list. Print the array to show that its
//Order has change
console.log('orignal' + plcaces.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('orignal' + plcaces.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('orignal' + plcaces.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('orignal' + plcaces.sort().reverse());
