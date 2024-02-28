const age =72;
if(age>=18){
    console.log('you are inside if');
    console.log('you can vote');
    if (age>60){
        console.log('you can vote twice.')
    }

}
else{
    console.log('You are a minor you can not vote');

    if(age<5){
        console.log('You must go to school.')
    }
}
console.log('this will execute always.')

const marks = 92;
if(marks>90)
{
    console.log('A+');
}
else if(marks>80)
{
    console.log('A');
}
else if(marks>70){
    console.log('B+');
}
else if(marks>60){
    console.log('B');
}
else 
{
    console.log('low Marks')
}

const marks1 =50;
const result = (marks1>=40) ? "Passed":"Failed";
console.log('result:',result);