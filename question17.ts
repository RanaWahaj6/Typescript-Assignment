//                     QUESTION

/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for 
only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty 
list at the end of your program.*/


console.log("You are informed that I found a bigger Dinner table")

let Arraylist1=["Hamza","ALi","Hassan","Mohsin","Kashif","Waji"]

Arraylist1.unshift("Asad")
console.log(Arraylist1)

console.log("SOrry to say that I can invite only two people at dinner.")



do {
    console.log("Sorry i can not invite you at dinner due to place shortage. "+Arraylist1.pop())
   
    
} while (Arraylist1.length>2);


for (let index = 0; index < Arraylist1.length; index++) {
    console.log(Arraylist1[index]+" you are still invited at dinner.")
    
    
}


do {
    Arraylist1.pop()
} while (Arraylist1.length>0);
console.log("The list is empty "+Arraylist1.length)