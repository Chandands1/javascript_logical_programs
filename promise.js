let p = new Promise(function(resolve){
   resolve("foo");
},10000);

function callback(){
    console.log(p);
}
console.log(p)
p.then(callback)
