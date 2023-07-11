//                QUESTION
/**Sandwiches: Write a function that accepts a array of items a person wants on a
 * sandwich. The function should have one parameter that collects as many items as the
 *  function call provides, and it should print a summary of the sandwich that is being ordered
 * . Call the function three times, using a different number of arguments each time */
function Sandwiches() {
    var Parametrs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Parametrs[_i] = arguments[_i];
    }
    console.log("Sandwich consist of " + Parametrs);
}
Sandwiches("Bread", "Chicken", "Tomato");
Sandwiches("Mayounese");
Sandwiches("Chicken Kabab", "Ketchup", "Chese", "Garlic");
