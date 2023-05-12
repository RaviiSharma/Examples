// function inception(){
//     inception()
// }
// inception()  //leads to stack over flow due to infinte calls.

/*______________________sum of n number in recursion ____________________________________--*/
//formula = (n*(n+1))/2 

//  function solution(a) { //5
// //return a==0? a:a+solution(a-1) //sortcut
//    if (a > 0) { //4
//      return a+solution(a-1); //5+4+3+2+1+0 = 15 ,2+1 , n+=sum(n-1) 2+1+
//    } else {
//      return a; //a==0
//    }
//  }

//  let num = solution(5); // yaha x ki value h pehle 0
//  console.log(num);

/*_________________________________ how function works in calls stacks________________________________*/
//write a function who take n number and print n times 
//let n=1
// fun1(1)
// function fun1(n){
//     console.log(n)
//     fun2(2)
// }

// function fun2(n){
//     console.log(n)
//     fun3(3)
// }//fun2()

// function fun3(n){
//     console.log(n)
//     fun4(4)
// }

// function fun4(n){
//     console.log(n)
//     fun5(5)
// }

// function fun5(n){
//     console.log(n)
    
// }// (1 2 3 4 5 will print 5 times,we calling 5 function to print n )

/*_____________________________________RECURSION_________________________________________________*/
// fun1(1)
// function fun1(n){   //1 2 3 4 5
//     //base condition 
//     if(n==5){
//         console.log(5) //it will return only 5
//         return     //?
//     }
//     //body
//     console.log(n) //1 2 3 4 5
//     //recursive calls
//     fun1(n+1) //2,3,4,5,6
//     //console.log(n) //5 4 3 2 1
// }

//recursive call
//if u r callig a function again n again,u can treat it as a separate call in the stack
//this is the last function call, & this is called Tail recursion .
//
//______________________________________________itrative approach of factorial_______________

// const itrativeFact = (num)=> {       //when num=5
//     ans =1
//     for(let i=num; i>0; i--){     // i: 5 4 3 2 1
//         ans = ans*i              //ans : 1*5 5*4 20*3 60*2 120*1 
//     }
//     console.log(ans)            //120
// };
// itrativeFact(5) 

// function fact(n){
//    let fNum=1;
//     for(let i=n;i>0;i--){
//         fNum *=i
//     }
//     return fNum
// };console.log(fact(5))


//_____________________________________________recursive approach of factorial____________________________________-


// const recursiveFact = (num)=> { //when num = 5 4 3 2 1
//     if(num==2){
//         return 2;
//     }
//     return num*recursiveFact(num-1) //5*4 20*3 60*2 
//     }
//     //const ans1 = recursiveFact(5) //yehi aaye g sara value ,aur return kre g :)
//     console.log(recursiveFact(5))             //120
    
    //__________________________________________itrative approach of fibonaccii number  ___________________
    // function itrativeFibonacci(num){ //when num =4
    //     let arr =[0,1]
    //     sum =0
    //     for(let i=0; i<num;i++){ //
    //         sum = arr[i] + arr[i+1] //already present 0+1 ,1  
    //         arr.push(sum)//[0,1,1]
    //     }
    //     console.log(arr)
    // };
    // itrativeFibonacci(4)

    
    
    //_____________________________________________recursive approach of fibonaccii number____________________________________-
    
    //formula of fibonaccii number = (n-1) + (n-2) // leaner recurrence relation :- make tree & 2 branches 
    
    // const recursiveFibonacii= (num)=>{ //when num =5 
    //     if(num<2){
    //         return 1
    //     }
    //     return recursiveFibonacii(num-1) + recursiveFibonacii(num-2) // (5-1)+(5-2) 
    
    // };
    // let result3=recursiveFibonacii(5) //passing 50 input take too much time, it's never give output !!
    // console.log(result3)
    
    //________________________________________recursive approach of power______________________________________________________
    //power of number
    // number = 8 
    // power=7
    // power(8,7)=8*power(8,6) //
    
    // const power= (num,x)=>{
    //     if(x==1)
    //         return num;
    //     else 
    //     return num*power(num,x-1) //
    // };
    // console.log(power(4,2)) //
    
    // function reachHome(step,destination){
    //     if(step==destination){
    //         return "pahuch gya tubelight ke ghar :) "
    //     }
    // //proceesing
    //  step++
    // //recursive call
    // return reachHome(step,destination)
    // }; 
    // var home=reachHome(1,10)
    // console.log(home)
    //______________________________________________________________________LoveB___________________________________________
    //let name ="ravi"
    // function reverse(s,i,j){
    //     //base case
    //     if(i>j)return ;
    //     //processing
    //     //Swap(s[i],s[j])
    //     let temp=s[i]
    //     s[i]=s[j]
    //     s[j]=temp
    //     i++;
    //     j--
    //     //recursive call
    //     return reverse(s,i,j)
    
    
    // }
    // let s="ravi"
    // let res=reverse(s,0,s.length-1)
    // console.log(res)
    //_________________________________________recursion to check palidrome________________________________
    // let str="bookkoob"
    // function checkP(str,i,j){
    //     //base case
    //     if(i>j) return "its a palidrome";
    //     if(str[i]!=str[j]) return "not a palidrome";
    
    //     return checkP(str,i+1,j-1)
    // }let res=checkP(str,0,str.length-1)
    // console.log(res)
    //__________________________________recursion on power________________________________
    // function power(a,b){
    //     //base case
    //     if(b==0)return 1
    //     if(b==1) return a
    //     //recursive call
    //     let ans=power(a,b/2)
    //     //if b is even 
    //     if(b%2==0){
    //     return ans*ans
    // }else{
    //     //if b is odd
    //     return a*ans*ans;
    // }   
    // };
    // //let rest=power(2,4)
    // console.log(power(2,2))
    
    // function arrSort(arr,n){
    //     //base case 
    //     if(n==0) return "already sorted" ;
    //     for(let i=0; i<n-1;i++){
    //         if(arr[i]>arr[i+1]){
    //             arr.reverse(arr[i],arr[i+1])
    //             console.log(arr)
    //            // return arr
    //         }
    //     }
    //     //recursive call
    //      return arrSort(arr,n-1)
    
    // };
    // let arr=[2,3,1]
    // let res=arrSort(arr,5)
    // console.log(res)
    
        