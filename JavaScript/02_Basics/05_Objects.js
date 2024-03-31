// destructuing in Js

const course = {
    courseName: "Js in Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
// courese.courseInstructor
// const {courseInstructor} = course
// // we can change the large name to shorthend for easy use.
// console.log(courseInstructor);
const {courseInstructor:inst} = course// we made shorthend "inst" for "courseInstuctor"
console.log(inst);// 

//  *************** API *************

// {
//    " name": "hitesh",
//     "courseName":"Js in Hindi",
//     "Price":"Free"
// }

[
    {},
    {},
    {}
]