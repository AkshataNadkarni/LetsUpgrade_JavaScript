//Question 1 : Program to search for a particular character in a string
var name = "Akshata Nadkarni";
var pos = name.indexOf("N");
console.log("In the string  \"" + name + "\" Character \"N\" is found at position " + pos);

//Question 2 : Program to Convert minutes to seconds
var time = 10;
var sec = time * 60;
console.log("\n" + time + "  minutes is equal to " + sec + " seconds");

//Question 3 : Program to search for a element in a array of string
var code = ["java","html","css","python","javascript","react"]
var find = code.indexOf("css");
console.log("\nThe elements available in an array are \n\"" + code +"\"\nstring css is found at position " + find);

//Question 4 : Program to display only elements containing 'a' in them from an array
var codeA = code.filter(findElement);
function findElement(value,index,array){
    var x = value.indexOf("a");
    return x > 0 ;
}
console.log("\nThe elements available in an array are \n\"" + code + "\"\n The elements which contains 'a' in them are \n \"" + codeA +"\"");

//Question 5 : Print an array in a reverse order
console.log("\nThe elements available in an array are \n\"" + code +"\"\n The reversed array is \n \"" + code.reverse() + "\" ");
