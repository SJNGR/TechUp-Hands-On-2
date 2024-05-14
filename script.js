var age = 20
age = 65

var username = "sijia"
var password = "techup"
var isFemale = false
var isLoggedIn = false

var blog_posts = ["today we had fire drill", "i had coffee", "I wore blue"]

console.log(age)
console.log(username)
console.log(password);
console.log(isFemale);
console.log(isLoggedIn);

if (isFemale == true){
    console.log("You identify as Female");
}
else {
    console.log("You do not identify as Female")
}
console.log(blog_posts);


while (age < 70) {
    console.log("Your age is " + age );
    age = age + 1;
}

function sayHello() {
    alert("Hello everyone");
}

