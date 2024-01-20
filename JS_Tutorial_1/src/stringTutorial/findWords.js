// Question2 - Find Words not strings; Combined words like VasuVasu

function findWords(message, find) {
    let tword="";
    let count = 0;
    for(let i = 0; i < message.length; i++){
        if(message.substring(i, i+1)==" "){ //finish the word when you find a space
            if(tword == find){  //compare the separated word
                count++;
            }
            //console.log(tword);
            tword="";   //reset the string
        }
        else{
            tword+=message.substring(i, i+1);   //concat the letter to the string
        }
    }
    return count;
}

const msg = "I am going to London and am going to Manchester and maybe back to London, and then...";
var countWords = findWords(msg, "London");
console.log("Count:", countWords);