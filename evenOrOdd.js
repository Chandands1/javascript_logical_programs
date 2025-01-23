function isEven(number){
    return number%2==0;
    
}

const number = 30;

if(isEven(number)){
    console.log("The number is Even: "+number);
}
else{
    console.log("The number is odd: "+ number);
}