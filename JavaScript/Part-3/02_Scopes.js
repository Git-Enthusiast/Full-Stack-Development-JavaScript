
let a = 100; // Global scope


if(true){
let a = 12
const b = 20    // Block Scope
// var c = 18
// d = 15

console.log("Inner a = ", a); //12

}

console.log(a); //100
// console.log(b);
// On Both 'a' and 'b' will give and error as we are 
// trying to access it outside of their scope.
//console.log(c); // 18
// But in case of var This will print 18 means 
// we can access it outside of its scope which
// makes it problematic so we did not use var any more.

//console.log(d);

// now in case of 'd' also print 15 so same problem arises as above


function one(){
    const username = "Rajan"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
  //  console.log(website); this will lead to an error.

    two()

    
}

one()


if(true){
    const username = "hitesh"
    if (username === "hitesh") {

       const website = "Youtube" 
       console.log(username+website);
       
    }
    // console.log(website); // out of scope
    
    
}
// console.log(username); // out of scope



//  ******************** interesting ***************
