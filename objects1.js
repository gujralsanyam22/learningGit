// let arr = [1,2,3,4];



// for(let i=0; i < arr.length; i++){
    //arr[i]+=2;
//}


// arr = arr.map( function(value) {
//     return value + 2;
// });



// console.log(arr.slice(1,3));

// arr.splice(1,3);
// console.log(arr);


// let deletedArray = arr.splice(1,3);
// console.log(deletedArray);
// console.log(arr);

// slice takes ending index      (ei-1)

// splice takes argument from (1,3)   1,2,3


let arr1 = [1,2,3,4,5,6,7,8,9];
// let temp = [...arr1];

// for(let i=arr.length-1; i >0; i++){
//    //for(let i in arr1){
//     if(arr1[i]%2==1){
//         arr1.splice(i,1);
//     }
// }
// console.log(arr1);


// 

let arr = [2,5,3,4,1];
console.log(arr.sort(function(a,b) {
 console.log(a,b);
    if(a>b){
    return -1;
    }
    else if (a == b){
        return 0;
    }
    else{
        return -1;
    }
}));








