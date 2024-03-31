var personName = ("karachi");
//lowercase
console.log("toLowerCase:", personName.toLowerCase());
//uppercase
console.log("toUpperCase:", personName.toLocaleUpperCase());
//titlecasr
console.log("titleCase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
