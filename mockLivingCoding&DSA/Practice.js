
// //reverse string 
// function revS(s){
// 	let str="";
//     let n=s.length-1
// 	for(let i=n;i>=0;i--){
// 		str +=s[i]

// 	}
// 	return str
// }console.log(revS("ravi"))//ivar


// //reverse array
// function reverseWord(arr){

//     let n =arr.length-1;
    
//     for(let i=0;i<n/2;i++){
//         [arr[i],arr[n-i]]=[arr[n-i],arr[i]]
//     }
//     return arr
// };
// console.log(reverseWord([1,4,3,2]))//2 3 4 1


//create server without using express module_________________________________________
// const http=require('http')
// const app=http.createServer((req,res)=>{
//     res.status=200;
//     res.setHeader('Content-Type','text/plain');
//     res.end('Happy Coding')
// })

// app.listen(3000,()=>{
//     console.log('server running port 3000')
// })

// const promise=new Promise((resolve,reject)=>{
//     let result =20
// if(result){
//     resolve(result)
// }else{
//     reject('error')
// }
// })

// promise.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log('error')
// })

function callBackFun(result){
    console.log(result);
}

function myFunction(callback){
    let result=100;

    callback(result)
};myFunction(callBackFun)

// const express=require('express')
// const router=express()

// router.get('/',(req,res)=>{
//     res.send('hello world')
// })

// router.listen(3000,()=>{
// console.log('server run on port 3000')
// })


// const express=require('express')
// const router=express()
// const model=require('./models/model')

// router.post('/',async(req,res)=>{
//     try{
//         var book=await model.create(req.body)
//         res.status(201).json(book)

//     }catch(err){
//         res.status(500)
//         throw new Error('error')
//     }
// })

// router(3000,()=>{
//     console.log('runnin port 3000')
// })

// let str ="daaaaaaaaaaad"

// var validP=(str)=>{
//     let pali=str.toLowerCase()
//     let n=pali.length
//     for(let i=0;n/2;i++){
//         console.log("wh",pali[i])
//        if(pali[i] !==pali[n-1-i]){
//         return false
//        }else{
//         return true
//        }
//     }
// };console.log(validP(str))


//class es6

//rest parameter 
function rest(...args){
    return args[1];

}console.log(rest(1,2,3)); // Returns 9

//spread operator
function addTwoNumbers(num1,num2){
    return num1 + num2;

}console.log(addTwoNumbers(...[1,2]));//3
   
    