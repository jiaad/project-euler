
function wsh(){
  let i = 1
  let result = 0
  while (i < 1000) {
    if (i % 3 ===0 || i%5===0) {
        result = result + i
        }
            i++
    }
  console.log(result)
}

// wsh()

function pyramid() {
  for (let i = 1; i <= 5; i++) {

    console.log(" ".repeat(5-i)+"#".repeat(i))
  }
}
// pyramid()

function pyramid(){
let i = 1
  while(i <=5){
    let arr = []
    arr.push(i)
    // console.log(" ".repeat(5-i)+"1".repeat(i*2))
    console.log("*".repeat(5-i + 1));
    
    i++
  }
}
// pyramid();


function name(height) {
  for (let i = 1; i <= height; i++) {
    let arr = []
    arr.push(i)
    console.log(" ".repeat(height-i)+"*".repeat(i * 2 + -1 ));
  }
}
// name(5)


function palindrome(num) {
  let arr = []
  for (let i = 0; i <= num; i++) {
    i
    let cal = i*num
    if (cal === 906609) {
      console.log(cal);
    }
    
    
}
  
}
// palindrome(999)

function toMax(n) {
  for (let i = 0; i <=Math.min(n,10); i++) {
    console.log(i)
  }
}
// toMax(9)

// function yo(arr) {
  
//   let result = {}
//   for (let i = 0; i < arr.length; i++) {
//     let char = arr[i]
//     if (result[char] >= 0) {
//       result[char]++;
//       console.log("cbkdfjkfd");
      
//     }else{
//       result[char] = 1

//       console.log("y a que else qui marche"); 
//     }
//   }
//   return result
  
// }
// console.log(yo("cqjdncjkncs"));

// function po(arr) {
//   var result = {}
//   for (var char of arr) {
//     char = char.toLowerCase();if (/[a-z0-9]/.test(char))result[char] = ++result[char] || 1}
//   return result;
// }
// console.log(po("@yoYYYYYYY             kljdezl    skjncfzsk   kjsxskq")  )

function frequency(arr1,arr2) {
  // let arrOne= {}
  let arrTwo= {}
  if (arr1.length !== arr2.length)    console.log("bitch");
    // return false//====
  for (const firstArray of arr1) {
    arrTwo =+ arrTwo[firstArray]  
  }
  for (const secondArray of arr2) {
  arrTwo =+  arrTwo[secondArray]
    
  console.log(arrTwo);
  }


}
// frequency("aza","aza")

// var str = 'This is my string';
// for (var i = 0; i < str.length; i++) {
//   console.log  (str.charAt(i));
// // }
// function frequency(arr1,arr2) {
//   let lookUp= {}
//   if (arr1.length !== arr2.length)    console.log("bitch");
//     // return false//====
// for (let i = 0; i < arr1.length; i++) {
//   let letter = arr1[i]
//   lookUp[letter] ? lookUp[letter]+=1: lookUp[letter]=1
// }
// console.log(lookUp);
// console.log("===========================")

// for (let j = 0; j < arr2.length; j++) {
//   let letter = arr2[j]
//   if (!lookUp[letter]){
//     return false
//   }else{
//     lookUp[letter] -=1
//   }
// }
// return true

// }
// // frequency("aza","kkkk")

function uniqueVal(val){
let i = 0;

for (let j = 1; j < val.length; j++) {
  if(val[i] !== val[j]){
    i++;
    val[i] = val[j]
  }
  // console.log(i, j)
}
return i+1
}
// console.log(arr);



uniqueVal([1,1,1,2,2,3,4,5,5,5,6,7])





