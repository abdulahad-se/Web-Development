const name="Ahad";
const repoCount=50;

// So in modern era nobody prefer this as it is little bit outdated, there is another way .
console.log(name + repoCount + "value");

// So if you want to write in todays time so use backticks( `` ), the advantage of using this is string interpolition , so what we do in actual we make placeholders and whatever variables is there you inject it there , and one more thing is you can do many things on the go just like for example you use and string and want to make it in uppercase so you cando that.
console.log(`My name is ${name} and i have ${repoCount} repositiries on my github`);


// one more way to declare the string is by creating an object , so it hold the data in key value
const myName=new String("AbdulAhad");// or ('AbdulAhad')
console.log(myName[0]);

// The __proto__ accessor property of Object instances exposes the [[Prototype]] (either an object or null) of this object.
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());// upper case if function so must put the round brackets with it bcz if you dont put it so output is like , [function : toUpperCase] , it is telling that upper case is an function and there are many more like this.
console.log(myName.charAt(5));
console.log(myName.indexOf('u'));

// as by name of substring we already know what it meant . but one more thing to remember as substring didnt take negative value if you pass and negaitve it just ignore it and consider it as zero.
const newName=myName.substring(2,7);
console.log(newName);

// so as substring doent accept negitve value , so we have one more method known as slice that accepts negative value that make it more flexible.
const secondName=myName.slice(-8,5);
console.log(secondName);

// so as in real world when we make an input page so customer knowningly or unknowningly add extra spaces which we dont want to to remove that space we use trim , it also has trimStart and trimEnd but mostly trim is used as it work on both side.
const newString=" HaHaTrimMethodTesting";
console.log(newString.trim());

const replaceTesting="https://abdulahad@%20.com";// note : as sometime there is space in url so browser replace space with %20 by default.
console.log(replaceTesting.replace("%20","-"));

// we can also ask question like:
const n="HiIAmAbdulAhad";
console.log(n.includes("z"));//output is false as the string doesnt have z.
console.log(n.includes("HiIAmAbdulAhad"));// output true;

// no we can convert into string based on space, so remember this when ever we use split we must have to enter the based ( i.e on the bases of what we want to split our string , either it could be , or - or _ or  )
const tester="HiIamLearner"
console.log(tester.split(""));// so we split on bases on no space as you notice there is no space so i split on bases of that.

// note : there are more methods aswell try to explore them aswell.













