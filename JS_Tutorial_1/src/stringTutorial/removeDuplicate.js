let uniqeWords =[];

function checkUnique(word){
    for (let i = 0; i < uniqeWords.length; i++){
        //if the word already exixts in the array then return false
        if(uniqeWords[i] == word){
            return false;
        }
    }
    uniqeWords.push(word);
    return true;
}

function removeDuplicate(message){
    let newMessage = "";
    let word="";

    for(let i = 0; i < message.length; i++) {

        if (message.substring(i, i + 1) == " ") {
            if (checkUnique(word) == true) {
                newMessage += word + " ";
            }
            word = "";
        } else {
            word += message.substring(i, i + 1);
        }
    }
    return newMessage;
}

const msg = "A quick brown fox quick jumped over quick a lazy dog";
let padMsg = msg.padEnd(msg.length+1, " "); //adding padding to the end of the string
console.log(removeDuplicate(padMsg));