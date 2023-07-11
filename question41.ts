//               QUESTION

/**Magicians: Make a array of magician’s names. Pass the array to a function called
 *  show_magicians(), which prints the name of each magician in the array.
 * 
 */


let magicians_name=["Aalto", "Simo","Abbot", "David","Acer", "David","Ackerman", "Allan","Adams", "Curtis","Aich", "Jewel"]

function show_magicians(magicians :string[]){
    for (let I = 0; I < magicians_name.length; I++) {
        console.log(magicians_name[I])
    }
}
show_magicians(magicians_name)