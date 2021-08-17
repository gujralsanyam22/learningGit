#!/usr/bin/env node


// const fs = require("fs");
// let arguments = process.argv.slice(2);


// let flags = []
// let filenames = [];

// for(let i of arguments){
//   if(i[0] == "-"){
//       flags.push(i);
//   }
//   else{
//       filenames.push(i);
//   }
// }

// // if(flags.length == 0  && filenames.length != 0){
// //     for(let file of filenames){
// //         console.log(fs.readFileSync(file,"utf-8"));
// //     }
// // }

// // else{
// //     for(let i of flags){
// //         if(flags == "-rs"){
// //             for(let file of filename){
// //                 let fileData = fs.readFileSync(file,"utf-8");
// //                  //for(let i in fileData)
// //                 for(let i of filename){
// //                     let fileData = fs.readFileSync(file,"utf-8");
// //                    // let fileDataArray = fileData.split(" ").join(" "));
// //                     console.log(fileData.split(" ").join(" "));
// //                 }
// //             }
// //         }
// //     }
// // }     




// // for(let file of filenames){
// //     let fileData = fs.readFileSync(file,"utf-8");
// //     for(let flag of flags){
// //         if(flag == "-rs"){
// //             fileData = fileData.split(" ").join(" ");
// //         }
// //         if(flag =="-rn"){
// //         fileData = removeAll(fileData, "\r\n");
// //         }
// //     }
// //     console.log(fileData);
// // }


// function removeAll(string, removeData){
//     return string.split(removeData).join("");
// }


// for(let file of filenames)
// {
//     let content=fs.readFileSync(file,'utf-8');
//     for(let fg of flags)
//     {
//         if(fg=="-rs")
//         {
//             content=content.split(" ").join("");
//         }
//         if(fg=="-rn")
//         {
//             content=content.split("\r\n").join("");
//         }
//         if(fg=="-rsc")
//         {
//             let str=""
//             for(let i in content)
//             {
//                 if((content.charCodeAt(i)>=65&&content.charCodeAt(i)<=90)||(content.charCodeAt(i)>=97&&content.charCodeAt(i)<=122))
//                 {
//                     str+=content.charAt(i);
//                 }
//             }
//             content=str;
//         }
//     }
//     console.log(content);
// }

// function removeAll(string, removeData){
//     return string.split(removeData).join("");
// }



const fs = require("fs");
let arguments = process.argv.slice(2);

let flags = [];
let filenames = [];
let secondaryArguments = [];

for(let i of arguments) {
    if(i[0] == "-") {
        flags.push(i);
    } else if(i[0] == "$") {
        secondaryArguments.push(i.slice(1));
    } else {
        filenames.push(i);
    }
}

// if(flags.length == 0) {
//     for(let file of filenames) {
//         console.log(fs.readFileSync(file,"utf-8"));
//     }
// } else {
//     for(let flag of flags) {
//         if(flag == "-rs") {
//             for(let file of filenames) {
//                 let fileData = fs.readFileSync(file,"utf-8");
//                 console.log(fileData.split(" ").join(""));
//             }
//         } else if
//     }
// }


for(let file of filenames) {
    let fileData = fs.readFileSync(file,"utf-8");
    for(let flag of flags) {
        if(flag == "-rs") {
            fileData = removeAll(fileData," ");
        }
        if(flag == "-rn") {
            fileData = removeAll(fileData, "\r\n")
        }
        if(flag == "-rsc") {
            for(let secondaryArgument of secondaryArguments) {
                fileData = removeAll(fileData,secondaryArgument);
            }
        }
    }
    console.log(fileData);
}

function removeAll(string, removalData) {
    return string.split(removalData).join("");
}





