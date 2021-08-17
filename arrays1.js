//let arr = [];
//let arr = new Array();

// 
// 

// strings to the arrays.

// let str1 = "Bhavesh";
// let str2 = "Bhavesh Bansal";
// let str3 = "Apple, Mango, Banana";

// console.log(str1.split(""));
// console.log(str2.split(""));
// console.log(str1.split(""));


// Array to strings

// let arr =["a","b", "c","d"];

// console.log(arr.join(""));
// console.log(arr.join("#"));
// console.log(arr.join("|"));



// let arr1 = ["a","b","c"];
// let arr2 = ["d","e","f"];
// console.log(arr1);


// array methods

//  let arr = [1,2,3,4,5,6];
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }


//Second method (traverse and get the index)
// for(let i of arr) {
//     console.log(i);
// }

// //traverse and get the value .
// for(let i of arr){
//     console.log(i);
// }

console.log(String.fromCharCode("a".charCodeAt(0)+1));

// // most important methods of array
// const arr1 = [1,2,3,4,5];
// arr1[3] = 7;     // we should the change the particular value.
// //arr = [1,2,3];  we should not change the address.
// console.log(arr1);





// let arr= ["a","b","c","d"];




// function temp(myarg,data) {
//     console.log(myarg,data);
// }


// function temp(myarg,myarg2, myarg3, data) {
//     console.log(myarg,myarg2, myarg3,data);
// }
// arr.forEach(temp.bind(this, "hello", "hello2","hello3"));

// arr.forEach(temp.bind(this, "hello"));

// arr2.forEach(function (data, index)) {
//     arr2[index] = data + index;
// })
// console.log(arr2);

// arr2.forEach(data, index, array, fourth) => {
//   console.log(value,index,array);
// })


// forEach provide data value and index value.


// function printFun(arr){
//     for (i of arr){
//         console.log(i);
//     }
// }

// function myforEach(arr, printfun){
//     printFun(arr);
// }
// myforEach(arr,printFun);


function myforEach(array, callBackFn){
    for(let i=0; i<array.length; i++){
        callBackFn(array[i],i,array);
    }
}
let arr = [1,2,3,4];
myforEach(arr,function(value,index,array){
    console.log(value,index,array);
})

// // This is chceked by the sir














