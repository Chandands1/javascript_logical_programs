function countVowels(str){
    let count = 0;
    let convertedStr = str.toLowerCase();
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for(let i =0;i<convertedStr.length;i++){
        if(vowels.has(convertedStr[i])){
            count++;
        }
    }
    return count;
}

const str = "hi my name is chandan, I am from madya";

const numberOfVowels = countVowels(str);

console.log("The number of vowels are: "+ numberOfVowels)