function findAndReplaceString(message, find, replace){
    /*message = message.replace(find, replace);
    console.log(message);*/

    let newMessage ="";
    for(let i=0; i<message.length; i++){
        if(message.substring(i, i+1) == find.substring(0,1)) {    //found the first letter
            if (message.substring(i, i + find.length) === find) {    //if the whole string matches
                newMessage+= replace;   //add the replaced string to the end of the string
                i+= find.length-1;
            }
            else{   //if the rest of the msg doesn't match
                newMessage+= message.substring(i, i+1);
            }
        }
        else{
            newMessage+= message.substring(i, i+1); //concating the string that doesn't have to replaced
        }
    }

    return newMessage

}

const msg = "A quick brown fox with another quickquick fox jumped over a lazy dog";
let replaceMsg = findAndReplaceString(msg, "quick", "fast");
console.log(replaceMsg);