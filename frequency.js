// calculate the frequency of each word in a paragraph of text using reduce
let ps=require('prompt-sync');
let p=ps();
let paragraph=p("Enter the paragraph ");
paragraph=paragraph.replace('/[^\w\s]/g').toLowerCase();
let arr=paragraph.split(" ");
console.log(arr);

let freqOfWord=arr.reduce((acc,word)=>{
    acc[word]=(acc[word] || 0)+1;
    return acc;
},[]);
console.log(freqOfWord);
