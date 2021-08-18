let  str ="Sanyam Gujral";
let ans = "";

for(let i=0; i<str.length; i++){
    ans+= str[i]+", ";
}
console.log(ans);



//  let str1 = "Sanyam Gujral";
 
//  for(let i=0; i<str.length; i++){
//      console.log(str.charCodeAt(i));
//  }


//  let str = "dfgjlslbbbbbbhgd";
//  let count=0;
//  for(let i=0; i<str.length; i++){
//      if(str[i]=='b'){
//          count++;
//      }
//  }
//  console.log(count);


 // let number = "12";
// console.log(parseInt(number));


// let str = "27473678546";
// let ans=0;
// for(let i=0; i<str.length; i+=2){
//     ans +=parseInt(str.substr(i,2));
// }
// console.log(ans);

//  let str="1A2";
//  let sum=0;
//  for(let i=0; i<str.length; i++){
//      if(isNaN(str[i])){      returns true if the number is not present .
                            //  return false if the number is present.
//          sum+=str.charCodeAt(i);
//      }
//      else{
//          sum+=parseInt(str[i]);
//      }
//  }
//  console.log(sum);

// this code is checked by bhavesh sir.

// l
// str between 48 and 57



// let str = "Bhavesh Bansal";

// output : lansnab  hsev vah B;

// output : check if it is palindrome;





// let str = "Bhavesh Bansal";
// let ans = "";
// for(let i=str.length-1; i>=0; i--){
//     ans += str[i];
// }
// console.log(ans);



let str = "Sanyam Gujral";
let sum="";

for(let i=str.length-1; i>=0; i--){
    sum=sum+str[i];
}
let sp = 0;
let ep = sum.length;
let ans = "";

for(let i=sum.length-1; i>=0; i--){
 if(sum[i] == " "){
     sp = i+1;
     ans += sum.substring(sp,ep);
     ep = i;
     sp = undefined;
 } else if(i == 0){
     sp=0;
     ans += sum.substring(ep,sp);
 }
}
console.log(ans);
// hhi



// let i=0;
// for(i=0; i<str.length; i++){
//     if(str[i]!=sum[i]){
//         console.log("Not a Palindrome");
//         break;
//     }
// }

// if(i == str.length){
//     console.log("Palindrome");
// }
// console.log(sum);

//hello i am sanyam
