function reverseString(str){
    let reverse ="";
    for(let i = str.length-1;i>=0;i--){
        reverse = reverse+str[i];
    }
    return reverse;
}

const str = "Chandan";

const result = reverseString(str);

console.log("The reversed String is: "+ result);