let a ="Pokemon";
// to access single characters in the string
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);

// to know the length of the string
console.log(a.length)



let nname="Ash";
let surname="Ketchum";

console.log("His name is " + nname + " and his surname is " + surname);
// to make it easier to write we can do using template literals
console.log(`His name is ${nname} and his surname is ${surname}`);



// convert a string to uppercase and lowercase
let c="abcde";
console.log(c.toUpperCase());
console.log(c.toLowerCase());


// to print only a selected part of the text
console.log(c.slice(1, 4));
console.log(c.slice(1));  // will print everything from the given index



// to repalce a thing in a string
console.log(c.replace("ab", "77"));



//concatenate (merge) a string 
console.log(c.concat(a));
console.log(c.concat(a, "bulbasaur", "op"));

// to add line break
console.log("\n");