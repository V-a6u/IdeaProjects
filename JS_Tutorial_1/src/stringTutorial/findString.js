//Question 1 - Counting the number of a specific word
function countingTest(message, find){
    let msgArray = message.split(" ");
    let count = 0;
    for(let i = 0; i < msgArray.length; i++){
        if(msgArray[i] == find){
            count++;
        }
    }
    return count;
}

function counting(message, find){
    let count = 0;
    for(let i = 0; i < message.length; i++){
        if( message.substring(i, i+1) == find.substring(0, 1) ){    //comparing the first letter
            //console.log("found the first character");
            if( message.substring(i, i+find.length) === find ) {    //starting from the first character to the end of fond string
                count++;
                console.log(message.substring(i, i+find.length));
                i+=find.length-1;   //to skip the rest of the word; this will speed up the execution
            }
        }
    }
    return count;
}

const msg = "I am going to London and am going to Manchester and maybe back to London, and then...";
// var countTest = countingTest(msg, "am");
// console.log(countTest);

var countAnswer = counting(msg, "London");
console.log("Count:", countAnswer);