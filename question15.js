//                QUESTION
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var Guest = ["ALi", "Mohsin", "Hamza", "Hassan", "Ahsan"];
for (var index = 0; index < 1; index++) {
    console.log("Sorry to say that " + Guest[1] + " Can’t make the dinner.");
    console.log("Sorry to say that " + Guest[3] + " Can’t make the dinner.");
    console.log("\n");
}
var ModifyList = ["yasir", "Asif"];
for (var index = 0; index < 1; index++) {
    console.log("I am replacing " + Guest[1] + " by " + ModifyList[1] + " to make dinner.");
    console.log("I am replacing " + Guest[3] + " by " + ModifyList[0] + " to make dinner.");
    console.log("\n");
}
var FinalList = [Guest[0], Guest[2], Guest[4], ModifyList[1], ModifyList[0]];
for (var index = 0; index < 1; index++) {
    console.log("Final People for dinner are " + FinalList);
}
