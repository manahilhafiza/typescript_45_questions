let personName: string  = ("karachi");

//lowercase
console.log("toLowerCase:",personName.toLowerCase());

//uppercase
console.log("toUpperCase:",personName.toLocaleUpperCase());

//titlecasr
console.log("titleCase:",personName.replace(/\bw/g, c=> c.toUpperCase()));


