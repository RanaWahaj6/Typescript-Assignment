//           QUESTION
/**Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
 */
console.log("VERSION 1");
var alien_Color = "Green";
if (alien_Color === "Green") {
    console.log("Congratulation ! player just earned 5 points");
}
else if (alien_Color !== "Green") {
    console.log("Congratulation ! player just earned 10 points");
}
console.log("VERSION 2");
var alien_color = "Red";
if (alien_color === "Green") {
    console.log("Congratulation ! player just earned 5 points");
}
else if (alien_color !== "Green") {
    console.log("Congratulation ! player just earned 10 points");
}
