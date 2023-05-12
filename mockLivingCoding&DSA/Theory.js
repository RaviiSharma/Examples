// // 1. write query to get all records whose age is between 10 and 20.
// // 2) write syntax for callback and promise
// // 3) write a blog scheme.

//1. db.users.find({age:{$gte:10,$lte:20}})

//___________________________________________callback

// A callback is a function that is passed as an argument to another function and is
// executed by that function at a later point in time. Callbacks are commonly used in
// asynchronous programming, where a function needs to wait for some operation to complete
// before it can continue executing.

// function myCallbackFunction(result) {
//   console.log("The result is " + result);
// }

// function myFunction(callback) {
//   // Do some asynchronous operation and get the result
//   let result = 30;
//   // Call the callback function with the result
//   callback(result);
// }

// // Call myFunction with myCallbackFunction as the callback argument
// myFunction(myCallbackFunction);

//______________________________________________promise

// Promises are used in asynchronous programming to handle the results of an
// asynchronous operation. 

// let myPromise = new Promise(function(resolve, reject) {
//   // Do some asynchronous operation and get the result
//   let result = 10;
//   // If the operation is successful, call the resolve function with the result
//   // If there is an error, call the reject function with an error message
//   if (result) {
//     resolve(result);
//   } else {
//     reject("An error occurred");
//   }
// });

// // Use the Promise
// myPromise.then(function(result) {
//   console.log("The result is " + result);
// }).catch(function(error) {
//   console.log("An error occurred: " + error);
// });

//schema
// const mongoose =require("mongoose");
// const blogSchema = new mongoose.Schema(
//   {
//     fname: {type: String, required: true, trim: true},
//     email: {type: String, required: true, enum: ["Mr", "Mrs", "Miss"]},
//     password:{type: String, required: true, unique: true},

//   },
//   {timestamps:true}
// );


const mongoose= require('mongoose');
const userSchema= new mongoose.Schema({
  
})
// module.exports = mongoose.model("Blog",blogSchema)

// const wait = time => new Promise((resolve) => setTimeout(resolve, time));
// wait(3000).then(() => console.log('Hello!'));  // 'Hello!'

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("successbbb!");
//     }, 1000);
//   });
  
//   promise.then(function (result) {
//     console.log(result); // "success!"
//   });

//_____________________________________________map filter reduce_________________________________
 // map transform array and return array
 const arr=[1,2,3,4,5]//15

// function double(x){
//     return x*2
// }
// let output = arr.map(double)
// console.log(output)

// function binary(x){      //normal function
//   return x.toString(2)
// }
// let output2 = arr.map(binary)
// console.log(output2)

// let output1 = arr.map((x)=> x.toString(2)) //arrow function
// console.log(output1)

//filter() : filter the values

//check Odd number
// function isOdd(x){
//   return x%2
// }
// let filter = arr.filter(isOdd)
// console.log('odd num',filter)

function isPrime(n) {
  if (n <= 1)
      return false;

  // Check from 2 to n-1
  for (let i = 2; i < n; i++)
      if (n % i ==0)
          return false;

  return true;
};console.log(isPrime(2))

// //check even number
// function isEven(x){
//   return x%2===0
// }
// let filter1 = arr.filter(isEven) 
// console.log('even num',filter1)

// let filter1 = arr.filter((x)=> x%2===0) //arrow
// console.log('even num',filter1)

//return number greater than 4

// let filter2 = arr.filter((x) => x < 3 )
// console.log(filter2)

// //reduce()
// //sum or max

// function sum(arr){
//   let sum =0  
//   for(let i =0;i<arr.length;i++){
//     sum =sum + arr[i]
//   }
//   return sum
// };console.log('sum',sum(arr))


// let reduce1= arr.reduce((acc,curr)=>{
//   acc=acc+curr;
//   return acc;
// },0)
// console.log(reduce1)

// function findMax(arr){
//   let max =0  
//   for(let i =0;i<arr.length;i++){
//     if(arr[i]>max){
//      max = arr[i];
//     }
//   }
//   return max
// };console.log(findMax(arr))

// //another methode
// const reduce2= arr.reduce((max,curr)=>{
//   if(curr>max){
//     max=curr;
//   }
//   return max;
// },0)
// console.log(reduce2)

//list of user full names 

// const users=[
//   {fname:"ravi",lname:"kumar",age:"20"},
//   {fname:"rahul",lname:"kumar",age:"24"},
//   {fname:"rajesh",lname:"kumar",age:"20"}
// ]

// const fullName= users.map((x)=> x.fname +" "+ x.lname +" "+ x.age)
// console.log(fullName)

// const result = users.filter((x)=> x.age < 24).map((x)=> x.fname)
// console.log(result)

//______________________________________________________________________________________________
//_________________________________________________fresh code________________________________

//___________________________
//example of asyn opearion , one operation occurs while other is proceeseing
// console.log('one')
// setTimeout(()=>console.log('two'),100)
// console.log('three')

// Asynchronous code:
// Asynchronous code runs in parallel. This means that an operation can occur while
// another one is still being processed.

// function f(){
//     var a=0
//     console.log(a)
// }f()


//  console.log(a)//error 


// let a = 10;
// function f() {
// if (true) {
// var b = 9
// // It prints 9
// //console.log(b);
// }
// // It gives error as it
// // defined in if block
// console.log(b);
// }
// f()
// // It prints 10
// console.log(a)
// Output:
// 9
// ReferenceError: b is not defined


// Example 5: If users use the let variable before the declaration, it does not
// initialize with undefined just like a var variable and return an error.
// console.log(a);//error
// let a = 10;
// console.log(a)

// console.log(b);//undefined
// var b = 10;
// console.log(b)//10


// // Output:
// // Uncaught ReferenceError: Cannot access 'a' before initialization

// //var add =function(x,y){return x+y}
// var add= (x,y)=>{return x+y}
// console.log(add(1,2))

//_________________________________________________promise
// const promise=new Promise((resolve,reject)=>{
//   let result =20
// if(result){
//   resolve(result)
// }else{
//   reject('error')
// }
// })

// promise.then((result)=>{
//   console.log(result)
// }).catch((reject)=>{
//   console.log('error')
// })


// //________________________________________________callback
// function myCallbackFunction(result) {
//   console.log( result);
// }

// function myFunction(callback) {
//   // Do some asynchronous operation and get the result
//   let result = 10;
//   // Call the callback function with the result
//   callback(result);
// }

// // Call myFunction with myCallbackFunction as the callback argument
// myFunction(myCallbackFunction);//10


// A callback is a function that is passed as an argument to another function and is
// executed by that function at a later point in time. Callbacks are commonly used in
// asynchronous programming, where a function needs to wait for some operation to complete
// before it can continue executing.

//___________________________________________API

// const express = require('express');
// const router = express.Router();
// const Book = require('./models/Book');
// const createBook = require('./middleware/createBook'); // Import createBook middleware function
//  // Import Book model

router.post('/', createBook, async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book); // chain response methods for clarity
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//   //find a book
//   router.get('/:id',findBook, async (req, res) => {
//       try {
//         const book = await Book.findById(req.params.id);
//         res.status(200).send(book);
//       } catch (error) {
//         res.status(500);
//         throw new Error('No book found');
//       }
//     })


//   //Delete book

//   router.delete('/:id',deleteBook,async (req, res) => {
//       try {
//         const book = await Book.findByIdAndDelete(req.params.id);
//         res.status(200).send(book);
//       } catch (error) {
//         res.status(500);
//         throw new Error('Server Error');
//       }
//     })


//   //Update

//   router.put('/:id',updateBook,async (req, res) => {
//       try {
//         const book = await Book.findByIdAndUpdate(req.params.id, req.body);
//         res.status(200);
//         res.json(book);
//       } catch (error) {
//         res.status(500);
//         throw new Error('Update failed');
//       }
//     })


//   module.exports = { router };

//________________________________________________________schema
// const mongoose =require("mongoose");
// const userSchema = new mongoose.Schema(
//   {
//     title: {type:String, required:true, enum: ["Mr,"Mrs","Miss"]}
//     fname: {type: String, required: true, trim: true},
//     email: {type: String, required: true, unique: true},
//     password:{type: String, required: true, unique: true},

//   },
//   {timestamps:true}
// );
// module.exports = mongoose.model("User",userSchema)
//__________________________________________________________express 
/*npm init, npm i express nodemon , => npx nodemon mockLivingCoding\&DSA/theory.js */
const express = require('express')
const app=express()

app.get('/',(req,res)=>{
  res.send('hello world')
})

app.listen(3000,function(err){
  if(!err)
  console.log('server running on 3000')
  else
  console.log('server is not running')
})

// var interval=setInterval(function(){
// console.log('excute every 1000 ms')
// },10)


// var timeOut=setTimeout(function(){
//   console.log("excute once")
// })
//clearInterval(interval)

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.status = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, Ravi!');
// });


// server.listen(3000, () => {
//   console.log(`Server listening on port 3000`);
// });


// const http=require('http')
// const app=http.createServer((req,res)=>{
//   res.status=200;
//   res.setHeader('Content-Type','text/plain')
//   res.end('hey there')
// })
// app.listen(3000,()=>{
//   console.log('server running port 3000')
// })

//_____________________________________________________________index.js
// const express=require("express")
// const route=require("./routes/route")
// const bodyParser=require("body-parser")
// const mongoose=require("mongoose");

// const app=express()
// app.use(bodyParser.json())

// mongoose.connect("mongo string",{
//   useNewUrlParser:true
// }).then(()=>{
//   console.log("mongodb is connectd")
// }).catch(()=>{
//   console.log("error")
// })

// app.use("/",route)
// app.listen(3000,(err)=>{
//   if(!err)
//   console.log("server is running")
//   else
//   console.log("server is not running")
// })




/**const express=require('express);
 * const router=express.Router();
 * const Book=require('./models/Book');
 * const createBook=require(./middleware/createBook);
 * 
 * 
 * router.post('/',createBook,async,(req,res)=>{
 * try{
 * const book=await Book.create.(req.body);
 * res.status(201).json(book)
 * }catch(error){
 * res.status(500);
 * throw new Error(error)
 * }
 * })
 * 
 * 
 *  * router.get('/:id' ,getBook,async,(req,res)=>{
 * try{
 * const book=await Book.findById(req.params.id);
 * res.status(200).send(book)
 * }catch(error){
 * res.status(500);
 * throw new Error(error)
 * }
 * })
 * 
 * 
 * router.delete('/:id' ,deleteBook,async,(req,res)=>{
 * try{
 * const book=await Book.findByIdAndDelete(req.params.id);
 * res.status(200).send(book)
 * }catch(error){
 * res.status(500);
 * throw new Error(error)
 * }
 * })
 * 
 * 
 *  * router.update('/:id' ,updateBook,async,(req,res)=>{
 * try{
 * const book=await Book.findByIdAndUpdate(req.params.id, req.body);
 * res.status(200).json(book)
 * }catch(error){
 * res.status(500);
 * throw new Error(error)
 * }
 * })
 */

