function getFrequency(str) {
    const frequencyMap = new Map();
    for (const char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    let ans=[];
    for(let key of frequencyMap){
        // console.log(key);
        ans.push(key);
    }
    return ans;
    // return Array.from(frequencyMap);
}

let string = "Hello World!";
const frequencyArray = getFrequency(string);
console.log(frequencyArray);
