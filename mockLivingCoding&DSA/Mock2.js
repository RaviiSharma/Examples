

// function merge(arr,s,e){
//     let mid=Math.floor(s+(e-s)/2)
//     let l1=mid-s+1,l2=e-mid
//     let a=[],b=[]
//     let k=s
//   //add values 
//     for(let i=0;i<l1;i++)
//       a[i]=arr[k++]
//     for(let j=0;j<l2;j++)
//       b[j]=arr[k++]
  
//     let i=0,j=0,m=s;//m start hai yaha final ke liye 
//     while(i<l1 && j<l2){
//       if(a[i]<b[j])
//         arr[m++]=a[i++]
//       else
//         arr[m++]=b[j++]
//     }
//     while(i<l1)
//       arr[m++]=a[i++]
//     while(j<l2)
//       arr[m++]=b[j++]
  
//     return arr
//     //console.log(arr)
//   }
  
//   function mS(arr,s,e){
//     if(s>=e)
//       return -1
//     let mid=Math.floor(s+(e-s)/2)

//     //recursion call kr rhe h
//     mS(arr,s,mid)//merging left 
//     mS(arr,mid+1,e)//merging right
//     return merge(arr,s,e)//final merge
//   }
//   let a=[4,5,3,7]
//   console.log(mS(a,0,a.length-1))

  //T.C= O(Nlog(N))
  //S.C= O(N)


  function maxProfit(prices) {
    let buy =prices[0] //1. first buy ,then prices[0]
    prices[0]=0 
    let profit=0//and profit will be 0 ,if same day buy & sell
    //2. loop will start index 1 ,becoz we cannot buy & sell on day 1
          for(let i=1;i<prices.length;i++){
                  //3. comparing ,if buying prices is less than prices[i]
                  if(buy>prices[i]){
                          //then it will loss , so the prices[i] will become 0
                          buy =prices[i]
                          prices[i]=0
                  }else{
                          //4. if buying price is grater than prices[i], then it will profit 
                          profit=Math.max(prices[i]-buy,profit)
                  }
          }
          return profit
 };