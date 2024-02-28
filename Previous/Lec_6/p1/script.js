for(let index= 0;index<5;index++){
    console.log("Rajan",index);
}
 let step = 0;
 while(step<5){
    console.log('step',step);
    step+=1;
 }
 let steps = 3;
 do{
    console.log('steps',steps);
    steps+=1;
 } while(steps<5);
let a = 0;
while(a<5){
    console.log("a",a);
    a+=1;
    if(a==3){
        break;
    }
}
let b=0;
while(b<5){
    b+=1;
    if(b==2){
        continue
        ;

    }
    console.log('b,',b);
    
}