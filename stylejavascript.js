// // let no=10;
// // console.log(no);
// // console.log(no._proto_);
// // let str="pawan is the boss";
// // console.log(str.charAt(2));


// // const no1=10;
// // const no2=20;
// // const result=no1+no2;
// // console.log(result);

// // const sen="Hello World!";
// // const findindex='o';
// // const result=sen.indexOf(findindex).toUpperCase().charAt(1);
// // console.log(result);

// // let num1=10
// // let num2="20";
// // let result=parseFloat(num1)+parseFloat(num2);
// // let rslt=num1+num2;
// // console.log(result); //30
// // console.log(rslt);//1020

// // let num=prompt("Enter the number");
// // if(num%2==0)
// // {
// //     console.log("number is even");
// // }
// // console.log("outside if block");
// //prompt("enter the email address");

// //let emails="student.1@codingninja.com";


// // function emailValidation(email)
// // {
// //     let emails;
// //     emails=email;
// //     console.log(emails);
// // let emailLength=emails.length;
// // console.log("lenght of the email = "+emailLength);
// // let dot=emails.lastIndexOf(".");
// // let dotCheck=emailLength-dot;

// // console.log("Index of = "+dotCheck);

// // let atindex=emails.lastIndexOf("@");
// // let atcheck=dotCheck-atindex;
// // console.log("checking the letter between @ and . = "+atcheck)
// // lastdoccheck=emailLength-dotCheck;

// //     if(((lastdoccheck>=2)||(lastdoccheck<=3))&&(atcheck>=4)&&(emailLength>=11))
// //         {
// //             emails="valid emails"
// //     }
// //     else{
// //         emails="Invalid Emails"
// //     }
// //     return emails
// // }
 
// // console.log(emailValidation("student.1@com.c"));

// /*function getLic(age){
//       let ManAge=age;
//       let test=true;
//       if(ManAge>=18){
//         if(test===true){
//             console.log("Congratulation! you are passed in driving test");
//         }
//         else{
//             console.log("Sorry ! you are not passed in driving test");
//         }
//       }
//       else{
//         console.log("you are under age");
//       }

//     return age
// }
// console.log(getLic(17));*/

//     // let color="red";

//     // switch(color){
//     //     case 'red':
//     //         console.log("STOP");
//     //     break;
//     //     case 'yellow':
//     //         console.log("GO SLOW");
//     //     break; 
//     //     case 'Grren':
//     //         console.log("Go AHEAD");
//     //     break;   
//     //     default:
//     //         console.log("Invaid trafficlight");
//     // }

//     // let flag;
//     // console.log(flag);
//     // let num=flag?100:200;
//     // console.log(num);

// //    for(let no=1;no<=100;no++)
// //    {
// //     let isPrime=true;
// //     for(i=2;i<no;i++){
// //         if(no%i==0){
// //           isPrime=false;
// //           break;
// //         }
// //     }
// //     if(isPrime){
// //         console.log("Prime"+no);
// //     }
    
// // }

// // let randomNo=8;
// // let guess;
// // do{
// //      guess=prompt("Guess the number");
// //     if(guess== randomNo){
// //     console.log("Right Guess");
// //     }
// //     else{
// //         console.log("unable to guess try again");
// //     }

// // }while(guess!=randomNo)

// // let no=1;
// // let ss=2;
// // for(no;no<=10;no++){
// //    let table=ss*no;
// //    console.log(ss+"*"+no+"="+table);
// // }

// // function compoundInterest (principalAmount , annualInterestRate , numberOfYears)
// // { let answer;
// //   let year =1;
// //   answer = principalAmount;
// //   while (year <= numberOfYears) {
// //   let interest = answer * annualInterestRate;
// //   answer += interest;
// //   year++;
// // }
// //   return answer;

// // }

// // function compoundInterest(principalAmount,annualIntrestRate,NumberodYears){
// //   let ansewer;
// //  let year=1;
// //  ansewer=principalAmount;
// //  while(year<=NumberodYears){
// //     let inrest=ansewer*annualIntrestRate;
// //     ansewer+=inrest;
// //     year++
// //  }
// //   return ansewer;
// // }
// // console.log(compoundInterest(500,8,5));

// // function sumOfPrimeNumbers(limit) {
// //   let answer = 0;

// //   for (let cn = 2; cn <= limit; cn++) {
// //     let flag = true;

// //     // Optimized check, only go up to sqrt(cn)
// //     for (let i = 2;  i <= cn; i++) {
// //       if (cn % i == 0) {
// //         flag = false;
// //         break;
// //       }
// //     }

// //     if (flag) {
// //       answer += cn;
// //     }
// //   }
// //   return answer;
// // }

// // console.log(sumOfPrimeNumbers(17)); // Output: 17 (2 + 3 + 5 + 7)

// // let x=25;
// // switch(true){
// //   case(x>10):
// //   console.log("print me");
// //   case(x<10):
// //   console.log("print me guys");
// // }

// // function sumOfFactorial(num) {
// //   let answer = 0;
  
// //   for(let i=2;i<=num;i++){
// //       if(num%i===0){
// //           answer+=i;
// //       }
// //   }

// // return answer;
// // }
// // console.log(sumOfFactorial(9));

// // function lastDigit(num1 ,num2){
    
// //   let result=true;
// //   console.log("start");
// //   let n1s=num1.length;
// //   console.log(n1s);
// //   let n2s=num2.length;
// //   console.log(n2s);
  
// //   return result;
// // }
// // console.log(lastDigit(29,19));

// // let number=987;
// // let str=number.toString();
// // let rst=str.length-1
// // let chr=str.charAt(rst);
// // console.log(chr);

// // function lastDigit(num1 ,num2){
    
// //   let result=false;
// // // no convert to string   
// // let str1=num1.toString();
// // let str2=num2.toString();
// //   // checking length
// // let rst1=str1.length-1
// // let rst2=str2.length-1
// // // get last digit
// // let chr1=str1.charAt(rst1);
// //   let chr2=str2.charAt(rst2);

// //   if(rst1==rst2){
// //       result=true;
// //   }
  
// //   return result;
// // }
// // console.log(lastDigit(7,19));

// // function lastDigit(num1, num2) {
// //   // Get the last digit of both numbers using the modulo operator
// //   const lastDigit1 = num1 % 10;
// //   const lastDigit2 = num2 % 10;
// //   console.log(lastDigit1);
// //   // Compare the last digits
// //   return lastDigit1 === lastDigit2;
// // }

// // // Test cases
// // console.log(lastDigit(279, 19)); // Output: true
// // console.log(lastDigit(172, 24)); // Output: false

// // function checkdigit(num){
// //   let count=0;
// //   while(num>0){
// //     num=Math.floor(num/10);
// //     count++;
// //   }
// //   return count;
// // }


// //  function twoDigit(num1,num2){
// //   const n1=checkdigit(num1);
// //   const n2=checkdigit(num2);
// //   console.log(n1+" "+n2);
// //  }

// // (twoDigit(283,34));


// // const arrys=[3,56,78,2,5,78];
// // console.log(arrys);
// // //arrys[0]=34;
// // console.log(arrys);4


// const cities=['Deldi','wewewe','wewe','tgfs','asdsfd'];

// // console.log(cities.length);
// // console.log(cities);
// // const pushy=cities.push("ghj");
// // console.log(cities);
// // console.log(pushy);
// // console.log("-----------");
// // const chutty=cities.unshift("chhuutty");
// // console.log(cities);
// // console.log(chutty);
// // console.log("-----------");
// // const popy=cities.pop();
// // console.log(cities);
// // console.log(popy);
// // console.log("-----------");
// // const popysht=cities.shift();
// // console.log(cities);
// // console.log(popysht);
// // console.log("-----------");
// // const indo=cities.indexOf('wewe');
// // console.log(cities);
// // console.log(indo);
// // console.log("-----------");
// // const incle=cities.includes('wewe');
// // console.log(cities);
// // console.log(incle);
// // console.log("-----------");
// // const incle1=cities.includes('wjhtr3ewe');
// // console.log(cities);
// // console.log(incle1);
// // console.log("-----------");

// // function addExpense(newExpense , originalExpenseArray) {
    
// //   originalExpenseArray.push(newExpense);
  
// //       return originalExpenseArray;
      
// // }
// // let updatedExpenses = addExpense(newExpense , originalExpenseArray);
// // console.log(updatedExpenses); 

// // let studentName=["Tina","Raj","Kalu","bulu","Lulu"];

// // for(let i=1;i<=studentName.length;i++){
// //   console.log("Roll No "+i+" - "+studentName[i-1]);
// // }

// //let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// // let nar=[ 1, 12, 1, 4];

// // for(i=0;i<nar.length;i++){
// //       arr.push(nar[i]);
// // }
// // console.log(arr);
// // let newArray=90;
// // let pp=arr.push(newArray);
// // console.log(pp);
// // console.log(arr);

// // let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// // function findDuplicate(arr){
// // //Implement your function here
// //     let newArr =[];
// //     for(let i=0;i<arr.length;i++){
// //         for(let x=i+1;x<arr.length;x++){
// //             if(arr[i]==arr[x] && !newArr.includes(arr[i])){
// //               newArr.push(arr[i]);
                
// //             }
// //         }
// //     }
// //    return newArr; 
// // }    
// //  console.log(findDuplicate(arr));

// // function findDuplicate(arr) {
// //   let newArr = [];  // Initialize newArr as an empty array to store duplicates

// //   for (let i = 0; i < arr.length; i++) {
// //       for (let x = i + 1; x < arr.length; x++) {  // Compare with subsequent elements only
// //           if (arr[i] === arr[x] && !newArr.includes(arr[i])) {
// //               newArr.push(arr[i]);  // Add to newArr if it's not already in the list
// //           }
// //       }
// //   }
// //   return newArr;  // Return the array of duplicates
// // }

// // let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// // // console.log(findDuplicate(arr));  // Output: [4, 1]
// // let check=arr.includes(12);
// // console.log(check);
// // console.log(arr);


// // for(let i in students){
// //   console.log(Number(i)+1+"noll no = "+students[i]);
// // }
// //const arr=['Pawan','Rahul','Puja','Vinod'];
// // for(let student of students){
// //   console.log(student);
// // }



// // function findDuplicate(arr) {
// //   const elementCount = {};
// //   const duplicates = [];

// //   // Count occurrences of each element
// //   for (const element of arr) {
// //       elementCount[element] = (elementCount[element] || 0) + 1;
// //   }

// //   // Extract duplicates
// //   for (const [element, count] of Object.entries(elementCount)) {
// //       if (count > 1) {
// //           duplicates.push(Number(element));
// //       }
// //   }

// //   return duplicates;
// // }

// // const arr=[3,5,7,9,23,67,90,4,3,5,9]
// // findDuplicate(arr);

// // let studentsbatch=['Pawan','Rahul','Puja','Vinod'];
// // let student=["kapur","ramu"]
// // function adding(batch,student){
// //   batch.push(student);
// //   console.log(batch);
// // }

// // adding(studentsbatch,student);


// // function newBatch(batch,...student){
// //  for(let i of student){
// //       batch.push(i);
      
// //  }
// //  console.log(batch);
// // }
// // let studentsbatch=['Pawan','Rahul','Puja','Vinod'];
// // newBatch(studentsbatch,"rohankapur","shyam")


// // let studentsbatch=['Pawan','Rahul','Puja','Vinod'];
// // let maybatch=[];
// // maybatch=[...studentsbatch];
// // console.log(maybatch);
// // console.log(studentsbatch);
// // maybatch.push("firstelement");
// // studentsbatch.push("first");
// // console.log(maybatch);
// // console.log(studentsbatch);

// // let studentsbatch=['Pawan','Rahul','Puja','Vinod'];
// // let maybatch=["rohankapur","shyam"];
// // let newbatch=[...studentsbatch,...maybatch];
// // console.log(studentsbatch);
// // console.log(maybatch);
// // console.log(newbatch);

// //complete the function mergeArray
// //Do not alter the starter code.
// // arr1 = [1,2,4,5,7];
// // arr2 = [3,4,6,7,9,0];
// // let myarr=[];
// // function mergeArray(arr1,arr2){
// //     //Implemet your function here
// //     let arr3=[...arr1,...arr2];
// //     console.log(arr3);
// //     for(let i=0;i<arr3.length;i++){
// //       for(let x=i+1;x<=arr3.length;x++){
// //         if(arr3[i]!=arr3[x] && !myarr.includes(arr3[i])){
// //           //console.log("removing duplicate"+arr3[i]);
// //           myarr.push(arr3[i]);
// //         }
       
// //       }
// //     }
// //     return myarr;
// // }
// // console.log(mergeArray(arr1,arr2));
// // //Output : [1,2,4,5,7,3,6,9,0]


// // let arr=[2,45,67,89,90,23,12,34,56,57,68,70,97,75,41];
// // let newarr=[];

// // for(let i of arr){
// //   if(i%2!==0)
// //  {
// //   continue;
// //  }
// //  if(newarr.length===5){
// //   break;
// //  }
// //  newarr.push(i);
 
// // }
// // console.log(newarr);

// // let arr=[1,6,8,3,5,20,10];
// // let newarr=[];
// // let sum=[];
// // let adds=0;
// // for(let i of arr){
// //   if(i%2!==0)
// //  {
// //   continue;
// //  }
// //  newarr.push(i);
// // }
// // for(let x of newarr){
// //   if(x%5===0){
// //     continue;
// //   }
// //   sum.push(x);
// // }
// // for(let ads of sum)
// // {

// //   adds=adds+ads;
// // }
// // console.log(adds);

// /*------------------Traversing---------------*/

// // let str1="Javascript is a scrpting language.";
// // let str=str1.toLocaleLowerCase();
// // let count=0;
// // for(i=0;i<str.length;i++){
// //  // console.log(str.charAt(i));
// //  if(str.charAt(i)==='a')
// //  {
// //   count++;
// //  }

// // }
// // console.log("Occurance of a = "+count);


// /* ------------------No . of words---------------------*/
// // let str1="Javascript is a scrpting language, but what are you thinking";
// // let str=str1.toLocaleLowerCase();
// // let count=0;
// // for(i=0;i<str.length;i++){
// //  // console.log(str.charAt(i));
// //  if(str.charAt(i)===' ')
// //  {
// //   count++;
// //  }

// // }
// // console.log("Occurance of space ' ' = "+ ++count);

// /*   ------------------- object -------------------------- */

// // const student={
// //   Name:"Pawan Singh",
// //   Age:45,
// //   fex:"Daily.com",
// //   100:"hundread",
// //   show:function(){console.log("I am function inside object")}
// // }
// // student.pappu="";
// // console.log(student);

// /*  multiple of object  */

// // const student={
// //   SecA:{
// //     Student1:{
// //       name:"pintu",
// //       age:34
// //     },
// //     Student2:{
// //       name:"para",
// //       age:44
// //     }
// //   },
// //   SecB:{
// //     Student3:{
// //       name:"pihu",
// //       age:23
// //     },
// //     Student4:{
// //       name:"pota",
// //       age:14
// //     }
// //   }
// // }

// // console.log(student["SecB"]["Student4"]["age"]);


// // const str="hello";
// // const newarry=Array.from(str);
// // console.log(newarry);


// // const ary={
// //   a:1,
// //   b:2,
// //   c:3
// // }
// // for(let x in ary){
// //   console.log(x);
// // }

// /* no duplicate array of the element/ and return position of index of the element */
// // function findElementIndex(arr, ele) {
// //   for (let i = 0; i < arr.length; i++) {
// //       if (arr[i] === ele) {
// //           return i; // Return the index of the first occurrence
// //       }
// //   }
// //   return -1; // Return -1 if the element is not found
// // }

// // // Example usage:
// // const arr1 = [23, 43, 67, 89, 62, 29, 67];
// // const ele1 = 67;
// // console.log(findElementIndex(arr1, ele1)); // Output: 2 (first occurrence)


// //  ----------------reverse string -------

// // function reverseString(str){
//   //Implement Your function here
//   // let str="helloji"
  
//   // let splitString=str.split("");
//   // console.log(splitString);
//   // var reverseString=splitString.reverse();
//   // console.log(reverseString);
//   // var joinString=reverseString.join("");
//   // console.log(joinString);


//   // function reverseString(str){
//   //   return str.split("").reverse().join("");
//   // }

//   // console.log(reverseString("jahah"));

// //   let newStr=[];
// //   function reverseString(str){
    
// //     if(str===""){
// //       return "";
// //     }
// //     else{
// //          for(let i=str.length-1;i>=0;i--){
// //           newStr+=str[i];
// //          }

// // return newStr;
// //   }
// // }
// //   console.log(reverseString("hellow"));



// // const goods = {
// //   apple: { price: 150, quantity: 2 },
// //   banana: { price: 75, quantity: 3 },
// //   orange: { price: 125, quantity: 1 },
// // };
// // function calculatePrice(goods) {
// //   let total = 0;

// //     for (const item in goods) {
// //         if (goods.hasOwnProperty(item)) {
// //             const product = goods[item];
// //             total += product.price * product.quantity;
// //         }
// //     }

// //     return total;
// // }
// // console.log(calculatePrice(goods));
// // //output : 650

// // var userName = 'Tom';
// // var userAge = 10;
// // console.log(`username: ${userName}`);
// // console.log(`userAge: ${userAge}`);

// // greetUser(userName);

// // function greetUser(name) {
// //   console.log(`*****************************`);
// //   var greet = 'I hope you are doing fine.';
// //   console.log(`hello ${name}, ${greet}`);
// //   var currentYear = 2030;
// //   const year = birthYear(currentYear, userAge);
// //   console.log(`*****************************`);
// //   return `Your birth year is ${year}`;
// // }

// // function birthYear(year, age) {
// //   console.log('Calculating the birth year');
// //   return year - age;
// // }

// // var bYear = greetUser(userName);
// // console.log(bYear);

// // function multiply(a, b) {
// //   return a*b;
// // }

// // console.log(multiply);

// // function factorial(n){
// //   if(n===1){
// //     return 1
// //   }
// //   return n*factorial(n-1);
// // }
// // console.log(factorial(5));

// // var x=10;
// // function foo(){
// //   console.log(x);
// //   var x=20;
// // }
// // foo();

// // let a=10;
// // {
// //   console.log(a);
// //   let a=20;
// // }
// // var x;
// // function foo(){
// //   x=10;
// // }
// // console.log(x);

// // function foo(){
// //   'use strict';
// //   x=10;
// // }

// // foo();

// // var x=10;
// // let x=20;
// // console.log(x);

// // Complete the genrateID function
// //Do not alter the starter code
// // function generateID(num1){
// //   //Implement Your function here
   
// //           return function func(){
// //            let str="A_2023";
// //               return (str+"_"+num1++);
              
// //           };
          
// //   }
  
// //   const func = generateID(99);
// //   console.log(func());//Output : A_2023_99
// //   console.log(func()); // Output: A_2023_100


// // var a=1;
// //  function b(){
// //   a=10;
// //   return;
// //   function a(){}
// //  }
// //  b();
// //  console.log(a);

// // let result =(
// //   ()=>{
// //     let x=5;
// //     return ()=>{
// //       x+=1;
// //       return x;
// //     };
// //   }
// // )();
// // console.log(result);


// // Do not modify the main function
// //Convert the functions present inside main to ES6 standard(i.e. to arrow function)  
// // function main() {
// //   let yearData = {};

// //   //Arrow function
// //   let createPerYearData = (year, total) => {
// //     yearData[year] = total;
// //   };

// //   //convert it to arrow function
// //   let printReport = () => {
// //     console.log("Print Report");
// //   };

// //   //convert it to arrow function
// //   let calculateTotalTillDate = (perYearBalance)=> {
// //     let total = 0;
// //     for (let i = 0; i < perYearBalance.length; i++) {
// //       total += perYearBalance[i];
// //     }
// //     return total;
// //   };

// //   //convert it to arrow function
// //   let adjustTotalOfYear = (year, adjustmentFactor)=> {
// //     yearData[year] *= adjustmentFactor;
// //   }
  
// //   //Do not modify the code after this
// //   return {
// //     createPerYearData,
// //     printReport,
// //     calculateTotalTillDate,
// //     adjustTotalOfYear
// //   };
// // };

// //imidiate invoke function expression  IIFE

// // (function()
// // {
// //   console.log("IIFE");
// // })()

// // const user=(function (){
// //   let userData={
// //     userName:'John',
// //     userAge:23,
// //   };
// //   function getName(){
// //     console.log(userData.userName);
// //   }
// //   function updateAge(){
// //     console.log(userData.userAge+3);
// //   }
// //   return {getName,updateAge};
// // })();

// // console.log(user);
// // // console.log(user.userData); cannot access directly
// // user.getName();
// // user.updateAge();\\


// // function main(){
// //   return (function()
// // {
// //   console.log("hello user");
// //  }
// // )();
// // }
// // console.log(main());
// // //main();

// // function main() {

// //   let userAuth = (
// //     function () {
// //       // Create an empty array to store user data.
// //          let registeredUsers =[];
// //       // Define the registerUser function.
// //       return {
// //           registerUser: function(username, password){
// //               registeredUsers.push(username);
// //               registeredUsers.push(password);
              
// //               checkCredentials(username, password);  
              
// //           }
// //       };

// //       // Define the checkCredentials function.
// //       function checkCredentials(username, password){
// //         let chk=registeredUsers.length-1;
// //         let even=chk+0;
// //         let odd=chk+1;
// //         let flag =false;
// //         // if(chk%2===0){
// //         //   even=chk%2;
// //         // }else{
// //         //   odd=chk%2;
// //         // }
// //         // let even=(chk%2===0);
// //         // let odd=(chk%2!==0);
// //           if(registeredUsers[even]===username && registeredUsers[odd]===password){
// //             flag=true;
// //           }
// //           else{
// //             flag=false;
// //           }
            
// //             if(flag){
// //             console.log("The user have been added to the registeredUser array"); 
             
// //           }
// //           else{
// //               console.log("The user is already registered");
// //           }
// //         //   even++;
// //         // odd++;
// //       }

// //       // Return the functions as an object
// //         return {checkCredentials};
// //     }
// //   )();

// //   // Example usage
// //   console.log(userAuth.registerUser("user1", "password123")); 
// //   // Output: "The user have been added to the registeredUser array"
// //   console.log(userAuth.registerUser("user1", "password123")); 
// //   // Output: "The user is already registered"

// //   return userAuth;
// // }

// // console.log(main() );

// // function main() {
// //   let userAuth = (function () {
// //     // Create an empty array to store user data.
// //     let registeredUsers = [];

// //     // Define the registerUser function.
// //     return {
// //       registerUser: function (username, password) {
// //         // Check if the user is already registered
// //         if (checkCredentials(username,password)) {
// //           console.log("The user is already registered");
// //         } else {
// //           // If not registered, add the user
// //           registeredUsers.push({ username, password });
// //           console.log("The user has been added to the registeredUser array");
// //         }
// //       },
// //     };

// //     // Define the checkCredentials function.
// //     function checkCredentials(username,password) {
// //       // Check if the username is already in the registeredUsers array
// //       return registeredUsers.some(user => user.username === username);
// //     }
// //   })();

// //   // Example usage
// //   userAuth.registerUser("user1", "password123");
// //   userAuth.registerUser("user1", "password123");

// //   return userAuth;
// // }

// // console.log(main());
// // function main() {
// //   let userAuth = (function () {
// //     // Create an empty array to store user data.
// //     let registeredUsers = [];

// //     // Define the registerUser function.
    
// //        function registerUser(username, password) {
// //         // Check if the user is already registered
// //         if (checkCredentials(username,password)) {
// //           return `The user is already registered`;
// //         } else {
// //           // If not registered, add the user
// //           registeredUsers.push({ username:username, password:password });
          
// //         return `The user have been added to the registeredUser array`;
// //         }
// //       }
    

// //     // Define the checkCredentials function.
// //     function checkCredentials(username,password) {
// //       // Check if the username is already in the registeredUsers array
// //      for (let i = 0; i < registeredUsers.length; i++) {
// //           if (
// //             registeredUsers[i].username === username &&
// //             registeredUsers[i].password === password
// //           ) {
// //             return true;
// //           }
// //         }
// //         return false;
// //     }
// //        return {
// //         registerUser: registerUser
// //       };
// // // };
// //   })();

// //   // Example usage
// //   userAuth.registerUser("user1", "password123");
// //   userAuth.registerUser("user1", "password123");

// //   return userAuth;
// // }

// // console.log(main());


// // //Refactor the given impure function to pure function.
// // function removeVowels(obj) {
// //   // Hint: To make this function pure, do not modify the original obj.
// //   // Instead, create and return a new object with the modified value.
// //   obj.value = obj.value.replace(/[aeiou]/gi, "");
// // }

// // // you don't need to do anything below. 
// // //you can use it for testing the code.
// // let strObj = { value: "Hello World" };
// // //For pure function
// // let newObj = removeVowels(strObj);
// // removeVowels(strObj);
// // console.log(strObj.value);
// // // console.log(newObj.value);
// /* =-------------------------------callback function----------------*/
// // function greet(wish){
// //   console.log (wish()+" Welcome to javascript");

// // }

// // function sayHi(){
// //   return "Hi";
// // }

// // function sayHello(){
// //   return "Hello";
// // }

// // function sayGoodMorning(){
// //   return "GoodMorning";
// // }

// // greet(sayHi);
// // greet(sayHello);
// // greet(sayGoodMorning);


// // let inputs=[1,2,4,6,8,9];
// // function square(num){
// //   let results=[];
// //   for(let n of num)
// //   {
// //     results.push(n*n);

// //   }
// //   return results;
// // }
// // console.log(square(inputs));

// // function cubes(num){

// //   let arrcub=[];
// //   for(let i of num){
// //     arrcub.push(i*i*i);
// //   }
// //   return arrcub;
// // }
// // console.log(cubes(inputs));

// // let inputs=[1,2,4,6,8,9];

// // function operation(input,funs){
// //   let num=[];
// //   for(let n of input){
// //     num.push(funs(n))
// //   }
// //   return num;
// // }

// // function square(num){
// //   return num*num;
// // }

// // function cube(num){
// //   return num*num*num;
// // }

// // console.log(operation(inputs,square));
// // console.log(operation(inputs,cube));

// // function greeting(greet){
// //   return function (name){
// //     return function(title){
// //       return greet+" "+title+" "+name;
// //     }
// //   }
// // }

// // const message=greeting("hi")("mr.")("pawan");
// // console.log(message);
// // let mysml=Symbol("key1");
// // let prices={
// //   small:200,
// //   medium:350,
// //   large:600,
// //   Extralarge:850,
// //   [mysml]:"mykeyisthis",
// //  "full name":"pawan singh",
// // };
// // let arr=[];
// // for(let i of prices){
// //   arr.push()
// // }

// // console.log(prices);
// // console.log(prices[mysml]);
// // console.log(prices.Extralarge);
// // console.log(prices["small"]);
// // console.log(prices["full name"]);

// // Base prices for each pizza size
// // const pizzaPrices = {
// //   small: 8.00,
// //   medium: 10.00,
// //   large: 12.00
// // };

// // // Function to calculate the total pizza price
// // function calculatePizzaPrice(size, toppings, quantity) {
// //   // Get the base price for the selected size
// //   const basePrice = pizzaPrices[size.toLowerCase()];
  
// //   // Calculate the cost of toppings
// //   const toppingsCost = toppings.length * 1.50;
  
// //   // Calculate the total price
// //   const totalPrice = (basePrice + toppingsCost) * quantity;
  
// //   // Return the total price formatted to two decimal places
// //   return totalPrice.toFixed(2);
// // }

// // // Example usage
// // const size = 'large';
// // const toppings = ['bacon', 'cheese'];
// // const quantity = 1;

// // const totalPrice = calculatePizzaPrice(size, toppings, quantity);
// // console.log(`Total Price: $${totalPrice}`);

// // // Function to calculate the price of a pizza based on size, toppings, and quantity
// // function pizzaPricing(size) {
// //   // Create an object to store the base prices for each pizza size
// //   // Return a function(curried function) that takes the selected toppings as a parameter
// //     // Return another function inside the curried function that takes the quantity as a parameter
// //     let prices={
// //         small:200,
// //         medium:350,
// //         large:600,
// //         Extralarge:850,
// //     };
// //     return function(toppings){
// //         return function(quantity){
// //             let baseprice=prices[size.toLowerCase()];
// //             let NoTopping=toppings.length;
// //             let formularst=(baseprice+NoTopping)*quantity;
// //             return formularst.toFixed(2);
// //         }
// //     }
    
// // }
// // const size = 'large';
// // const toppings = ['bacon', 'cheese'];
// // const quantity = 2;

// // const totalPrice = pizzaPricing(size)(toppings)(quantity);
// // console.log(`Total Price: $${totalPrice}`);

// // let a=[2,4,7,9];

// // const s=a.map( function(current){
// //     return current*current;
// // }

// // );

// // console.log(s);

// //  let a=[2,4,7,9];

// // const s=a.map( (current,ind)=>{
// //   //return {[ind]:current};
// // }

// // );

// // console.log(s);
// // function createUserObjects(ids, names, images) {
// //   return ids.map((id, index) => {
// //       return {
// //           id: id,
// //           name: names[index],
// //           image: images[index]
// //       };
// //   });
// // }

// // // Example input
// // const ids = [1, 2, 3];
// // const names = ["John", "Jane", "Alice"];
// // const images = ["john.jpg", "jane.jpg", "alice.jpg"];

// // // Calling the function
// // const userObjects = createUserObjects(ids, names, images);
// // console.log(userObjects);


// //List of employees with their current salaries
// // const employees = [
// //   { id: 1, name: "Alice", department: "sales", salary: 40000 },
// //   { id: 2, name: "Bob", department: "engineering", salary: 50000 },
// //   { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
// //   { id: 4, name: "David", department: "sales", salary: 35000 },
// //   { id: 5, name: "Emily", department: "engineering", salary: 55000 },
// // ];

// // // Function to increase salaries based on the department
// // function increaseSalaries(employees) {
// //   // Use the map function to iterate over each employee in the array
// //     let newEmployee =employees.map(changeEmployee );
     
// //     function changeEmployee(value){
  
// //     switch(value.department){
// //       case 'sales':
// //        let salaynew=value.salary;
// //        value.salary=salaynew+(salaynew*(10/100));
// //        break;
// //        case 'engineering':
// //        let engineeringnew=value.salary;
// //        value.salary=engineeringnew+(engineeringnew*(15/100));
// //        break;
// //        default:
// //        let marketingnew=value.salary;
// //        value.salary=marketingnew+(marketingnew*(5/100));
// //        break;
// //      }
// //         return value;
         
// //     }  
// //      //console.log(newEmployee); 

// //   return newEmployee;
// // }

// // // You can call the function and log the result to check if the implementation is correct
// // console.log(JSON.stringify(increaseSalaries(employees)));


// // const employees = [
// //   { id: 1, name: "Alice", department: "sales", salary: 40000 },
// //   { id: 2, name: "Bob", department: "engineering", salary: 50000 },
// //   { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
// //   { id: 4, name: "David", department: "sales", salary: 35000 },
// //   { id: 5, name: "Emily", department: "engineering", salary: 55000 },
// // ];

// // // Function to increase salaries based on the department
// // function increaseSalaries(employees) {
// //   return employees.map(employee => {
// //     let increase;

// //     // Determine salary increase percentage based on department
// //     switch (employee.department) {
// //       case 'sales':
// //         increase = 0.10; // 10%
// //         break;
// //       case 'engineering':
// //         increase = 0.15; // 15%
// //         break;
// //       default:
// //         increase = 0.05; // 5% for marketing or any other department
// //         break;
// //     }

// //     // Return a new employee object with updated salary
// //     return {
// //       ...employee,
// //       salary: employee.salary + (employee.salary * increase),
// //     };
// //   });
// // }

// // // Call the function and log the result
// // const updatedEmployees = increaseSalaries(employees);
// // console.log(updatedEmployees);



// // // List of employees with their current salaries
// // const employees = [
// //   { id: 1, name: "Alice", department: "sales", salary: 40000 },
// //   { id: 2, name: "Bob", department: "engineering", salary: 50000 },
// //   { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
// //   { id: 4, name: "David", department: "sales", salary: 35000 },
// //   { id: 5, name: "Emily", department: "engineering", salary: 55000 },
// // ];

// // // Function to increase salaries based on the department
// // function increaseSalaries(employees){
// //   const updatedEmployees = employees.map((employee) => {
// //     let salary = employee.salary;
// //     switch (employee.department) {
// //       case "sales":
// //         salary = (salary * 1.1).toFixed(1);
// //         break;
// //       case "engineering":
// //         salary = (salary * 1.15).toFixed(1);
// //         break;
// //       default:
// //         salary = (salary * 1.05).toFixed(1);
// //         break;
// //     }
// //     return { ...employee, salary };
// //   });
// //   return updatedEmployees;
// // };
                
// // console.log(JSON.stringify(increaseSalaries(employees)));

// /*----------------------------- reduse function-----------------------*/

// // const arr=[2,4,6,8];

// // const sum=arr.reduce((total,sum,index)=>{
// //   console.log(total,sum,index);
// //  return total+sum;
// // },0);
// // console.log(sum);

// // let num=[3,7,5,9];

// // let square=num.map((value)=>{
// //      return value*value;
// // });
// // console.log(square);

// // let sq=num.reduce((value,sq,ss,arr)=>{
// //   console.log(value,sq,ss,arr);
// //   return value=sq*sq;
// // },1);
// // console.log(sq);4

// // let nums=[];

// // let sum=nums.reduce((acc,currentnum)=>{
// // //return currentnum%2===0?acc+currentnum:acc;

// //   return acc+currentnum;

// // },5);
// // console.log(sum);

// // const contacts = [
// //   { name: "Alice", company: "ABC Inc." },
// //   { name: "Bob", company: "XYZ Corp." },
// //   { name: "Charlie", company: "ABC Inc." }
// // ];

// // function mapContactsToCompanies(contacts) {
// //   return contacts.reduce((acc, contact) => {
// //     // Check if the company already exists in the accumulator
// //     if (!acc[contact.company]) {
// //       // If not, initialize it with an empty array
// //       acc[contact.company] = [];
// //     }
// //     // Push the contact name into the company's array
// //     acc[contact.company].push(contact.name);
// //     return acc; // Return the accumulator for the next iteration
// //   }, {});

// // }
// // const result = mapContactsToCompanies(contacts);
// // console.log(result);


// /*-----------filter-----------------------*/

// // let inputs=[3,5,-7,9,-2,6,-9]

// // let positive=inputs.filter((nonNegative)=>{
// //  return nonNegative<3;
// // });

// // console.log("less then 3 number is = "+positive);

// /* remove false value */

// // let arrList=["",3,4,null,0,false,0,4,6,8,"sd"];

// // let removeFalse=arrList.filter(Boolean)
// // console.log(removeFalse);

// // const songs = [
// //   { title: "All of Me", artist: "John Legend", genre: "Pop", duration: 248 },
// //   { title: "Despacito", artist: "Luis Fonsi", genre: "Pop", duration: 279 },
// //   { title: "Someone Like You", artist: "Adele", genre: "Pop", duration: 285 },
// //   { title: "Thriller", artist: "Michael Jackson", genre: "Pop", duration: 357 },
// //   { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", duration: 354 },
// //   {title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock", duration: 480,},
// //   {title: "Sweet Child O' Mine", artist: "Guns N' Roses",genre: "Rock",duration: 355,},
// //   {title: "Smells Like Teen Spirit", artist: "Nirvana",genre: "Rock",duration: 302,},
// //   { title: "Hotel California", artist: "Eagles", genre: "Rock", duration: 390 },
// //   {
// //     title: "Thrash Unreal",
// //     artist: "Against Me!",
// //     genre: "Punk",
// //     duration: 292,
// //   },
// //   {
// //     title: "London Calling",
// //     artist: "The Clash",
// //     genre: "Punk",
// //     duration: 189,
// //   },
// // ];

// // const filters = { genre: "Rock", duration: 350 };

// // // Implement the filterSongs function
// // function filterSongs(songs, filters) {
// //   // Extract genre and duration from the filters object
// //   return songs.filter((value)=> (value.genre===filters.genre && value.duration>filters.duration))
// //   }

// // console.log(filterSongs());

// //let arrList=[3,5,8,9,12,34,6,90];

// // let find1=arrList.find((num)=>num===81);
// // console.log(find1);

// // let find2=arrList.findIndex((num)=>num===81);
// // console.log(find2);

// // let check=arrList.findLast((num)=>num===90);
// // console.log(check);

// // let ab=[1,20,3,4,5,2,4,5];

// // let bb=ab.filter((num,ind,arr)=>
// // {
// //   return arr.indexOf(num)===ind;
// // })

// // console.log(bb);

// // const productList = [
// //   { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
// //   {
// //     id: "p2",
// //     name: "Oranges",
// //     category: "Fruits",
// //     price: 1.99,
// //     inStock: false,
// //   },
// //   {
// //     id: "p3",
// //     name: "Blueberries",
// //     category: "Fruits",
// //     price: 4.99,
// //     inStock: true,
// //   },
// //   {
// //     id: "p4",
// //     name: "Carrots",
// //     category: "Vegetables",
// //     price: 1.0,
// //     inStock: true,
// //   },
// //   {
// //     id: "p5",
// //     name: "Tomatoes",
// //     category: "Vegetables",
// //     price: 1.5,
// //     inStock: true,
// //   },
// // ];

// // function searchAndBuyProduct(productList, productName ) {

// //   let finder=productList.find((productList)=>{
// //     //console.log(productList.name,productName);
// //     return (productList.name===productName)
// //   });
  
// //   if(finder){
// //   if(finder.inStock){
// //      finder.inStock=false;
// //      return true;
// //   }
// //   else{
// //      //finder.inStock=true;
// //      return false;
// //   }
// // }
// // //return productList.find((productList)=>(productList.name===productName)&& (productList.inStock===true)?productList.inStock=false:productList.inStock=true)&&);

// // return false;
// // }
// // let productName="Tomoes";
// // console.log(searchAndBuyProduct(productList, productName ));

// //console.log(this);

// // var names="John";
// // console.log(names);
// // console.log(this.names);
// // console.log(window.names);

// // {
// //   function print(){
// //     console.log(this);
// //   }
// //   print();
// // }

// /* object */

// // const movie={
// //   title:"the Avengers",
// //   year:2023,
// //   genre:"Action",
// //   cost:["srobert juiledt"],
// //   getDetails:function(){
// //               console.log('title: '+movie.title);
// //   },
// //   getMovieDetails:function(details){
// //        console.log(movie[details]);
// //   }
// // };

// // // let detail="year";
// // // movie.getMovieDetails(detail);
// // // console.log(movie.cost);
// // // movie.getDetails();
// // // movie["age"]=10;
// // // console.log(movie.age);
// // // console.log(movie);
// // // newMovie={...movie,sec:"b"}
// // // console.log(newMovie);

// // let newMovie=movie;

// // console.log(newMovie.cost);

// // const getUserDetail = (userProfile, keys) => {
// //   let current = userProfile;
// // console.log(current);
// // console.log(keys);
// //   for (const key of keys) {
// //     console.log(keys);
// //     console.log(key);
// //     console.log("current = "+current+" "+"key ="+[key]);
// //       if (current) {
// //           current = current[key];
// //           console.log(current);
// //           console.log("current = "+current+" "+"key ="+[key]);
// //       } else {
// //           return "Not available";
// //       }
// //   }

// //   return current !== undefined ? current : "Not available";
// // };

// // Example usage
// // const userProfile1 = {
// //   name: "John Doe",
// //   email: "john.doe@example.com",
// //   address: {
// //       city: "New York",
// //       street: "123 Main St",
// //       zipCode: "10001"
// //   }
// // };
// // console.log(userProfile1["email"]);

// // const userProfile2 = {
// //   name: "Marry Jane",
// //   email: "marry.jane@example.com",
// //   address: {
// //       city: "L.A",
// //       street: "154, Washington Road",
// //       block: "001",
// //       zipCode: "10011"
// //   }
// // };


// //console.log(getUserDetail(userProfile2, ['address', 'block']));  // Output: "001"
// // console.log(getUserDetail(userProfile1, ['address', 'block']));  // Output: "Not available"
// // console.log(getUserDetail(userProfile1, ['name']));               // Output: "John Doe"
// //console.log(userProfile2);

// // function Movie(detail){
// //   this.detail=detail;
// // }
  
// // const movie1=new Movie("Bat Man");
// // movie1.prototype.year=2302;
// // console.log(movie1);
// // Movie.prototype.getDetails=function (){
// //   console.log("title "+this.detail);
// // }
// // console.log(movie1.__proto__);
// // const movie2=new Movie("Avtar");
// // console.log(movie2);
// //console.log(movie2.__proto__);

// // console.log(Movie.prototype);
// // console.log(Movie.__proto__);
// // console.log(Object.prototype);
// // console.log(Object.__proto__);
// // console.log(movie1.prototype);
// // console.log(movie1.__proto__);


// // console.log(Movie.prototype===movie1.__proto__);

// // let arr=[1,3,4];
// // console.log(arr.__proto__.__proto__);

// // const {a,b}={a:1,b:2}
// // const x=a+b;

// // console.log(x);

// // let obj={name:"Rohan", country:"Bravio", age:50}
// // let name;
// // ({name}=obj);
// // let {country:c,age:a}=obj;
// // obj.country="canada";
// // console.log(name,c,a);

// /*   ------------Encapsulation ---------  */


// // class VehicleCl{
// //   //properties
// //   #regNumber;
// //   // name ;
// //   // color;
// //   // wheels;
// //   //construtor
// //   constructor(name,color,wheels,number){
// //     this.name=name;
// //     this.color=color;
// //     this.wheels=wheels;
// //     this.#regNumber=number;
// //   }
// //   // private method
// //   #getNumber(number){
// //     return number;
// //   }
// //   // methods
// //   getDetyails(){
// //     console.log(" name = "+this.name+"  color = "+this.color+" wheels = "+this.wheels+
// //       " Registrartion Number "+this.#getNumber(number));
// //   }
// // }

// // const veh1=new VehicleCl("Pawan","white",2,9990);
// // console.log(veh1);
// // console.log(veh1.color);
// // console.log(veh1.number);//undefind


// // class Person {
// //   #name=[];
// //   #age=[];
// //   constructor(name, age) {
// //   this.#name = name;
// //   this.age = age;
// //   this.#age = age;
// //   }
// //   //getter
// //   getName() {
// //   return this.#name;
// //   }
// //   //setter
// //   setName(newname) {
// //     return this.#name=newname;
// //     }
// // }

// // const pp=new Person("pappu",90);
// // console.log(pp);
// // console.log(pp.getName());
// // const tr=pp.setName("lappu");
// // console.log(tr);


// //complete the ExpenseTracker class.
// // Do not alter the starter code
// // class ExpenseTracker {
// //   #expenses;
// //   #income;

// //   constructor(income) {
// //       this.#income = income;
// //       this.#expenses = [];
// //   }

// //   #calculateTotalExpenses() {
// //       return this.#expenses.reduce((total, expense) => total + expense.amount, 0);
// //   }

// //   addExpense(name, amount, date) {
// //       this.#expenses.push({ name, amount, date });
// //   }

// //   calculateBalance() {
// //       const totalExpenses = this.#calculateTotalExpenses();
// //       return this.#income - totalExpenses;
// //   }
// // }

// // // Example usage:
// // const tracker = new ExpenseTracker(5000);
// // tracker.addExpense("Rent", 1000, "2021-10-01");
// // tracker.addExpense("Groceries", 500, "2021-10-02");
// // console.log(tracker.calculateBalance());  // Output: 3500

// //Create the required Classes with each inheriting Class as specified in the Problem Statement.
// function main() {
//   // Crete your class media with proper constructor properties and methods as mentioned.
// class Media{
 
//     constructor(title,artist,duration){
//         this.title=title;
//         this.artist=artist;
//         this.duration=duration
//     }
//     getTitle(){
//        return this.title;
//     }
//      getArtist(){
//          return this.artist;
//      }
//     getDuration(){
//         return this.duration;
//     }
// }
//   //Create a Class Song extending the Media with proper constructor ,properties and methods
// class Song extends Media{
//     constructor(title,artist,duration,album ,genre ){
//         super(title,artist,duration);
//         this.genre=genre;
//         this.album=album;
//     }
//     getAlbum(){
//         return this.album ;
//     }
//     getGenre(){
//         return this.genre ;
//     }
// }
//   //Create a class Podcast inherting from the MEdia
// class Podcast extends Media{
//     constructor(title,artist,duration,host,topic){
//         super(title,artist,duration);
//         this.host=host;
//         this.topic=topic;
//     }
//     getHost(){
//         return this.host;
//     }
//     getTopic(){
//         return this.topic;
//     }
// }
//   //Create class PopSong and PockSong using Song class
// class PopSong extends Song{
//     constructor(title,artist,duration,album ,genre,danceability,energy )
//     {
//         super(title,artist,duration,album ,genre);
//         this.danceability=danceability;
//         this.energy=energy;
//     }
//     getDanceability(){ return this.danceability; }
//     getEnergy(){ return this.energy;}
// }
//   class RockSong extends Song{
//      constructor(title,artist,duration,album ,genre,distortion ,tempo  )
//     {
//         super(title,artist,duration,album ,genre);
//         this.distortion =distortion ;
//         this.tempo =tempo ;
//     }
//       getDistortion(){ return this.distortion; }
//     getTempo(){ return this.tempo;}
// }
//   //Create NewsPodcast and ComedyPodcast using the Podcast class.
// class NewsPodcast extends Podcast{
//     constructor(title,artist,duration,host,topic,source ){
//         super(title,artist,duration,host,topic);
//         this.source=source;
//     }
//     getSource(){
//         return this.source;
//     }
//     getDuration(){return this.duration; }
// }
//    class ComedyPodcast extends Podcast{
//     constructor(title,artist,duration,host,topic,comedian ,rating  ){
//         super(title,artist,duration,host,topic);
//         this.rating=rating;
//         this.comedian=comedian;
//     }
//        getComedian(){return this.comedian; }
//        getRating(){return this.rating ; }
// }
//   //Your code will be evaluated on basis of these operation.
//   const popSong = new PopSong(
//     "Shape of You",
//     "Ed Sheeran",
//     235,
//     "÷",
//     "Pop",
//     0.825,
//     0.652
//   );
//   console.log(popSong.getTitle()); // should output 'Shape of You'
//   console.log(popSong.getArtist()); // should output 'Ed Sheeran'
//   console.log(popSong.getDuration()); // should output 235

//   console.log(popSong.getAlbum()); // should output '÷'
//   console.log(popSong.getGenre()); // should output 'Pop'
//   console.log(popSong.getDanceability()); // should output 0.825
//   console.log(popSong.getEnergy()); // should output 0.652

//   const rockSong = new RockSong(
//     "Stairway to Heaven",
//     "Led Zeppelin",
//     482,
//     "Led Zeppelin IV",
//     "Rock",
//     0.056,
//     63.5
//   );
//   console.log(rockSong.getTitle()); // should output 'Stairway to Heaven'
//   console.log(rockSong.getArtist()); // should output 'Led Zeppelin'
//   console.log(rockSong.getDuration()); // should output 482
//   console.log(rockSong.getAlbum()); // should output 'Led Zeppelin IV'
//   console.log(rockSong.getGenre()); // should output 'Rock'
//   console.log(rockSong.getDistortion()); // should output 0.056
//   console.log(rockSong.getTempo()); // should output 63.5

//   const newsPodcast = new NewsPodcast(
//     "The Daily",
//     "The New York Times",
//     30,
//     "Michael Barbaro",
//     "News",
//     "The New York Times"
//   );
//   console.log(newsPodcast.getTitle()); // should
//   // output 'The Daily'
//   console.log(newsPodcast.getArtist()); // should output 'The New York Times'
//   console.log(newsPodcast.getDuration()); // should output 30
//   console.log(newsPodcast.getHost()); // should output 'Michael Barbaro'
//   console.log(newsPodcast.getTopic()); // should output 'News'
//   console.log(newsPodcast.getSource()); // should output 'The New York Times'

//   const comedyPodcast = new ComedyPodcast(
//     "My Favorite Murder",
//     "Karen Kilgariff and Georgia Hardstark",
//     60,
//     "Karen Kilgariff and Georgia Hardstark",
//     "Comedy",
//     "Karen Kilgariff and Georgia Hardstark",
//     4.8
//   );
//   console.log(comedyPodcast.getTitle()); // should output 'My Favorite Murder'
//   console.log(comedyPodcast.getArtist()); // should output 'Karen Kilgariff and Georgia Hardstark'
//   console.log(comedyPodcast.getDuration()); // should output 60
//   console.log(comedyPodcast.getHost()); // should output 'Karen Kilgariff and Georgia Hardstark'
//   console.log(comedyPodcast.getTopic()); // should output 'Comedy'
//   console.log(comedyPodcast.getComedian()); // should output 'Karen Kilgariff and Georgia Hardstark'

//   console.log(comedyPodcast.getRating()); // should output 4.8
//   return {
//     Media,
//     Song,
//     Podcast,
//     PopSong,
//     RockSong,
//     NewsPodcast,
//     ComedyPodcast
//   };
// }
// main();


//Do not alter the starter code
// function main(){

//   //Create Character constructor function
//   function Character (health ,strength,agility){
//       this.health=health;
//       this.strength=strength;
//       this.agility=agility;
//   }
//   //Create Warrior ,Mage, Enemy and Archer constructor fntion inheriting Character
//   function Warrior (health ,strength,agility,weaponType){
//       Character.call(this,health ,strength,agility);
//       this.weaponType=weaponType;
//   }
//   function Mage (health ,strength,agility,spellType){
//       Character.call(this,health ,strength,agility);
//       this.spellType=spellType;
//   }
//   function Archer(health ,strength,agility,arrowType)
//   {
//     Character.call(this,health ,strength,agility);
//       this.arrowType=arrowType;   
//   }
//   //Create constructor function for Hero inheriting Hero and Mage
//  // Hero.prototype = Object.create(Character.prototype);
// //Hero.prototype = Object.create(Warrior.prototype);
// //Hero.prototype = Object.create(Mage.prototype);
// //Hero.prototype=Object.assign(Warrior.prototype, Mage.prototype,Character.prototype); // If needed

// Hero.prototype.constructor = Hero;
//   function Hero (health ,strength ,agility,weaponType,spellType,specialAbility ){
//       //Character.call(this,health ,strength ,agility);
//       Warrior.call(this,health ,strength,agility,weaponType);
//       Mage.call(this,health ,strength ,agility,spellType);
//       this.specialAbility=specialAbility;
//   }

// // Object.assign(Warrior.prototype, Mage.prototype,Character.prototype,Hero.prototype); // If needed

// // Hero.prototype.constructor = Hero;

//   function Enemy (health ,strength,agility,enemyType){
//       Character.call(this,health ,strength,agility);
//       this.enemyType=enemyType;
//   }
//   let warrior1 = new Warrior(100, 50, 30, "sword");
//   let mage1 = new Mage(80, 20, 50, "fireball");
//   let archer1 = new Archer(90, 40, 40, "poison");
//   let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
//   let enemy1 = new Enemy(200, 80, 20, "goblin");
  
//   console.log(warrior1);
//   console.log(mage1);
//   console.log(archer1);
//   console.log(hero1);
//   console.log(enemy1);
  
//   return {Character,Hero,Warrior,Mage,Archer,Enemy};
//   }
//   main();

//Do not alter the starter code.
// function main() {
//   //Create your Message Class here with all the properties and methods
// class Message{
//     sender;
//     receiver;
//     messageContent;
//     constructor(sender,receiver,messageContent){
//         this.sender=sender;
//         this.receiver=receiver;
//         this.messageContent=messageContent;
//     }
//    static totalMessages=0;
//     static status =false;
    
//     static recordMessage(){
//        this.totalMessages++ ;
        
//     } 
//    static changeStatus (){
//     this.status = !this.status;
//     const statusMessage = this.status ? "online" : "offline";
//     console.log(`The status has been changed to ${statusMessage}`);
//     }
// sendMessage (){
//   console.log(`The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`);
//   Message.recordMessage();
// }    
// displayDetails(){
//   const currentStatus = Message.status ? "online" : "offline";
//   console.log(`Sender: ${this.sender}`);
//   console.log(`Receiver: ${this.receiver}`);
//   console.log(`Message: ${this.messageContent}`);
//   console.log(`Status: ${currentStatus}`);
//   console.log(`Total Messages: ${Message.totalMessages}`);
//     }

//   }
//   Message.changeStatus();
// const myMessage = new Message("John", "Jane", "Hello");

// myMessage.sendMessage();
// myMessage.displayDetails();
// Message.changeStatus();

// Message.changeStatus();
// const myMessage1 = new Message("John", "Jane", "Hello");

// myMessage1.sendMessage();
// myMessage1.displayDetails();
// Message.changeStatus();
//   return Message;
  
// }

// main();

// class Circle{
//   constructor(radius){
//     this.radius=radius;
//   }
//    getDetails(){
//     console.log(this.radius*2);
//    }
// }

// let cc= new Circle(4);
// console.log(cc.radius);
// console.log(cc.getDetails());

// function main() {
//   //create your class here with the name Account with all the private properties and getter and setter
//   class Account {
//       #accountNumber;
//       #balance ;
//       constructor(accountNumber) {
//         this.#accountNumber = accountNumber;
//         this.#balance = 0; // Initialize balance to 0
//     }
  
//   get balance(){
//       return this.#balance;
//   }
//   set balance(value){
//       if(value>0){
//           return this.#balance=value;;
//       }
//       else{
//           console.log("Please enter a positive value for the balance");
//       }
//   }
//   deposit(value){
      
//       return this.balance+=value;
//   }
//   withdraw(num){
//     if(num>0 && num<500)
//       {return this.balance-=num;}
//       else{console.log("Insufficient balance");}
//   }
//   }
//   const myAccount = new Account("1234567890");
//   myAccount.deposit(10);
//   myAccount.withdraw(-200);
//   console.log(myAccount.balance); // output: 300
//   //Do not modify the return statement
//   return Account;
// }
// main();

// const dd=new Date;
// const nn=dd.now();
// console.log(dd);

//Do not alter the starter code.
// function main(){
//     //Create your class "User" here with all the properties and methods
//     class User{
//         #name;
//         #email;
//         #password;
//         #posts=[];
//         constructor (name,email,password){
//             this.#name=name;
//             this.#email=email;
//             this.#password=password;
            
//         }
//         get getters() {
//             return this.#name; // Getter for name
//         }
//         set setters({name,email,password}){
//             this.#name=name;
//             this.#email=email;
//             this.#password=password;
//         }
//         addPost(post) {
//             this.#posts.push(post);
//         }

//         deletePost(post) {
//             this.#posts = this.#posts.filter(p => p !== post);
//         }
//         displayPosts() {
//             console.log("Posts by " + this.#name + ":");
//             this.#posts.forEach(post => console.log(`- ${Post.title}`));
//             console.log("\n");
//         }
//     }
//     //Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
//         class Post extends User{
//             #title;
//             #content;
//             #date;
//             #likeCount;
//     constructor(name,email,password,title,content,date,likeCount){ 
//         super(name,email,password);     
//         this.#title=title;
//             this.#content =content;
//             this.#date =date;
//         this.#likeCount =0;
//                  }
//             get cls2getter(){
//                  this.#title=title;
//             this.#content =content;
//             this.#date =date;
//             }
//             set cls2setter({title,content,date,likeCount}){
//                 this.#title=title;
//             this.#content =content;
//             this.#date =date;
//         this.#likeCount =likeCount;
//             }
//             addLike (){
//                 this.#likeCount++;
//             }
//             displayDetails(){
//                 //   console.log(`Status: ${currentStatus}`);
//                 console.log("Output:");
//                 console.log("owners : "+this.getters);
//                  console.log('title : '+this.#title);
//                  console.log('content : '+this.#content);
//                  console.log('date : '+this.#date);
//                 console.log('likeCount : '+this.#likeCount);
//             }
//         }
        
//       const user1 = new User("John", "john@example.com", "password123");
//       const post1 = new Post(
//         "John", 
//         "john@example.com",
//         "password123",
//         "My first post",
//         "Lorem ipsum dolor sit amet",
//         "2021-01-01"
//       );
//       const post2 = new Post(
//         "John", 
//         "john@example.com",
//         "password123",
//         "My second post",
//         "Consectetur adipiscing elit",
//         "2021-01-02"
//       );
      
//       user1.addPost(post1);
//       user1.addPost(post2);
      
//       post1.addLike();
//       post1.addLike();
      
//       user1.displayPosts();
//       // Output:
//       // Posts by John:
//       // - My first post
//       // - My second post
      
//       post1.displayDetails();
//       // Output:
//       // Owner: John
//       // Title: My first post
//       // Content: Loremipsum dolor sit amet
//       // Date: 2021-01-01
//       // Likes: 2
//       return {User,Post};
//     }
//     main();

// class User {
//     // Private properties
//     #name;
//     #email;
//     #password;
//     #posts = [];

//     constructor(name, email, password) {
//         this.#name = name;
//         this.#email = email;
//         this.#password = password;
//     }

//     // Getters and Setters
//     get name() {
//         return this.#name;
//     }

//     set name(newName) {
//         this.#name = newName;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }

//     get password() {
//         return this.#password;
//     }

//     set password(newPassword) {
//         this.#password = newPassword;
//     }

//     // Methods
//     addPost(post) {
//         this.#posts.push(post);
//     }

//     deletePost(post) {
//         this.#posts = this.#posts.filter(p => p !== post);
//     }

//     displayPosts() {
//         console.log(`${this.#name}'s Posts:`);
//         this.#posts.forEach(post => console.log(`- ${post.title}`));
//         console.log("\n");
//     }
// }

// class Post extends User{
//     // Private properties
//     #title;
//     #content;
//     #date;
//     #likeCount = 0;
   

//     constructor( name,title, content, date) {
//         super(name);
//         this.#title = title;
//         this.#content = content;
//         this.#date = date;
//     }

//     // Getters and Setters
//     get title() {
//         return this.#title;
//     }

//     set title(newTitle) {
//         this.#title = newTitle;
//     }

//     get content() {
//         return this.#content;
//     }

//     set content(newContent) {
//         this.#content = newContent;
//     }

//     get date() {
//         return this.#date;
//     }

//     set date(newDate) {
//         this.#date = newDate;
//     }

//     get likeCount() {
//         return this.#likeCount; // Only getter for likeCount
//     }

//     // Methods
//     addLike() {
//         this.#likeCount++;
//     }

//     displayDetails() {
//         console.log("Post Details:");
//         console.log(`Owner: ${this.name.name}`);
//         console.log(`Title: ${this.#title}`);
//         console.log(`Content: ${this.#content}`);
//         console.log(`Date: ${this.#date}`);
//         console.log(`Likes: ${this.#likeCount}`);
//     }
// }

// // Example usage:
// const user1 = new User("John Doe", "john@example.com", "password123");
// const post1 = new Post(user1, "My first post", "Hello, this is my first post!", "2021-01-01");
// const post2 = new Post(user1, "My second post", "Another day, another post!", "2021-01-02");

// user1.addPost(post1);
// user1.addPost(post2);

// post1.addLike();
// post1.addLike();

// user1.displayPosts(); // Displays the titles of posts
// post1.displayDetails(); // Displays details of post1
