//         QUESTION
/**Hello Admin: Make a array of five or more usernames, including the name 'admin'.
 *  Imagine you are writing code that will print a greeting to each user after they log in to a website.
 *  Loop through the array, and print a greeting to each user:
 * If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
var usernames = ["Wahaj", "admin", "hamza", "ali", "hassan"];
if (usernames[0] == "Wahaj") {
    console.log("Hi wahaj , thank you for logging.");
}
if (usernames[1] == "admin") {
    console.log("Hello admin, would you like to see a status report?");
}
if (usernames[2] == "hamza") {
    console.log("Hi Hamza, thank you for logging.");
}
if (usernames[3] == "ali") {
    console.log("Hi Ali, thank you for logging.");
}
if (usernames[4] == "hassan") {
    console.log("Hi Hassan , thank you for logging.");
}
