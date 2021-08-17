// let person = {
//     "name" : "Sanyam",
//      age  : 23,
//      0 : "hello"
// }

// console.log(person["name"]);
// console.log(person.age);
// console.log(person);




 let arr = [1,2,3,4];
// let obj = {
//     0:1,
//     1:2,
//     2:3,
//     3:4,
// }
// person["company"] = "pepcoding";
// console.log(person);
// console.log(obj);


arr["name"] = "Bhavesh";
console.log(arr.name);
console.log(arr.length);


let obj = {
     obj  : "hello1",
    obj : "hello2"
}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// Traversing the values 
//  for(let key in obj) {
//       console.log(obj[key]);
//  }


//  for(let i=0; i<Object.keys(obj).length; i++){
//      console.log(obj[Object.keys(obj)[i]]);
//  }



// for(let i=0; i<Object.keys(obj).length; i++){
// console.log(obj[Object.keys(obj)[i]]);
// }

// 2 level nesting

for(let key in obj){
    console.log(key);
    if(typeof(obj[key]) == "object") {
        for(let key2 in obj[key]){
            console.log(key2);
        }
    }
}






