function checkPallindrome(str){
    return str.toLowerCase().split('').reverse().join("");
}

const str = "madam";

const result = checkPallindrome(str);

if(str === result){
    console.log("The string is pallindrome: "+ str)
}else{
    console.log("The String is not a Pallindrome! : "+ str)
}

console.log(result);