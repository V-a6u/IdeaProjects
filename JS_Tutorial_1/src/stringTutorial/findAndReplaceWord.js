function findAndReplaceWord(message, find, replace){
    let newMessage ="";
    let tword= "";  //message.substring(0,1);

    for(let i=0; i<message.length; i++) {

        //first find if it's a word
        if (message.substring(i, i + 1) == " ") {

            //then find if it matches the find word
            if (tword == find) {
                newMessage+= replace;
            }
            else {
                newMessage+= tword;
            }
            tword = "";
            newMessage+= " ";   //add a space after the word
        }
        else {
            tword += message.substring(i, i + 1);   //concat the letter to the string
        }
    }
    return newMessage;

}

const msg = "A quick brown fox with another quickquick fox jumped over a lazy dog";
let padMsg = msg.padEnd(msg.length+1, " "); //adding padding to the end of the string
let replaceMsg = findAndReplaceWord(padMsg, "quick", "fast");
console.log(replaceMsg);