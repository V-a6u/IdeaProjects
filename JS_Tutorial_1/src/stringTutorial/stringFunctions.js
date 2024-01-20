/*
//Counting the words
let message= "A quick fox jumped over";
let wordCount = 0;

for(let i=0; i<message.length; i++){
    if(message.substring(i, i+1) == " "){
        wordCount++;
    }
}
console.log("Number of words:", wordCount+1);

let wordCount1 = message.split(" ");   //trying split method
console.log(wordCount1);
console.log(wordCount1.reverse());
*/

//Reversing
let message= "A quick fox jumped over";
let wordCount = 0;
let word = "";

for(let i=message.length; i>0; i--){
    if(message.substring(i, i-1) == " ") {
        wordCount++;
        console.log(word);
        word = "";
    }
    else{
        word+= message.substring(i, i-1);
    }
}
console.log(word);

let wordCount1 = message.split(" ");   //trying split method
console.log(wordCount1);
let wordReverseArray = wordCount1.reverse();
let wordReverse = wordReverseArray.join(" ");
console.log(wordReverse);

let wordReverseTest = message.split(" ").reverse().join(" ");   //combining in one line
console.log(wordReverseTest);

let messageWhitespace = "A  quick    brown fox  jumped   over a   lazy dog";
//let messageWithoutWhitespace = messageWhitespace.replaceAll(/\s/g, " ");
let messageWithoutWhitespace = messageWhitespace.split(/\s+/).filter(word => word.length > 0); //filters out any empty strings that might result from consecutive spaces
console.log("messageWithout:", messageWithoutWhitespace);
console.log("Word Count:", messageWithoutWhitespace.length);