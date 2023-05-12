
// //write a schema for comment and its reply in mongoDb
// const mongoose=require('mongoose')

// const comment=new mongoose.schema(
// {
//     _id: ObjectId, // a unique identifier for the comment
//     userId: ObjectId, // the user who posted the comment
//     text: String, // the text content of the comment
//    createdAt: Date, // the date and time when the comment was posted
//     replies: [{
//         _id: ObjectId, 
//         userId: ObjectId, 
//         text: String, 
//        createdAt: Date,
//       }],
//   },{timestamps:true}
// );
// module.exports= mongoose.model("comment",comment)
  
// You can retrieve all the replies for a given comment by querying the 
// replies array using the $elemMatch operator to find the reply with the 
// desired _id. Additionally, you can retrieve the comment and its associated 
// replies together by retrieving the comment document and accessing its replies array.
//_______________________________________________________________________________________________________

// schema for storing multiple hobbies for a user in MongoDB without using an array:

// const mongoose=require('mongoose')
// const user=new mongoose.schema(
// {
//     _id: ObjectId, // a unique identifier for the user
//     name: String, // the name of the user
//     hobby1: {
//       name: String ,// the name of the first hobby
//       description: String, // a description of the first hobby
//       level: String, // the user's skill level in the first hobby (e.g. beginner, intermediate, advanced)
//     },
//     hobby2: {
//         name: String,
//         description: String, 
//         level: String, 
//     },
    
//   },{timestamps:true}
// );
// module.exports=mongooose.model('hobbies',user)
  
//   db.users.find({
//     $or:[{"hobbie.name":'reading'},
//          {"hobby.name": "workout"}
//   ]
//   })
  
function callbackFun(result){
   console.log(result)
}

function myFunction(value){
   let result =10;
    value(result)
}myFunction(callbackFun)
 
 const promise=new Promise((reslove,reject)=>{
   let value=3000000000000
   if(value)
   reslove(value)
   else
   reject('err')
 })
 promise.then((value)=>{
   console.log(value)
 }).catch((err)=>{
   console.log('err')
 })


 //______________________________________________map and foreach difference
//map(): map is used to transform a collection of data by applying a function to each element
// of the collection and returning a new collection 

const originalArray = [1, 2, 3];
const newArray = originalArray.map((num) => num * 2);
// newArray is now [2, 4, 6]
const  map=[1,23,3]

//foreach(): action on each element of a collection without creating a new collection
const array=["bby",2,"bye"]
array.forEach((str)=>console.log(str))
const stringArray = ["hello", "world", "!"];
//stringArray.forEach((str) => console.log(str));
// console output:
// "hello"
// "world"
// "!"


// console.log(a); // ReferenceError: a is not defined (TDZ)
// let a = 100;


/*What is Object Destructuring?

Object destructuring is a feature introduced in ES6 (ECMAScript 2015) in JavaScript that allows you
to extract properties from an object and assign them to variables
 */
// const person = { name: 'John', age: 30 };
// const { name, age } = person;



const person={name:"ravi",age:24}
//const {name,age}=person

console.log(name); // "John"
console.log(age); // 30

const express=require('express');
const app=express()

app.get('/',(req,res)=>{
   res("who win")
})

app.listen(3001,function(err){
if(err)
console.log("err")
else
console.log("running")
})