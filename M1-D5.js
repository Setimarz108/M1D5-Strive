/*/ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/


//ffffffffffffff

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */
function area (width, hight){
    
    let area = width * hight
   return area
}
console.log(area(12,12))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */

function crazySum(int1, int2){
    
    let sumForEqualNums = int1 + int2 -3
    let sum = int1 + int2

    if(int1 === int2){
        return sumForEqualNums
    }else {
        return sum
    }
}

crazySum(8,2)

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

function crazyDiff (num){

         
    let difference = Math.abs(num - 19)

    if(num > 19){
        return difference * 3;
    }else {
        return difference
    } 
}

crazyDiff(25)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

function boundary(n){

       if(n >= 20 && n <= 100 || n === 400){
         
             return true
       }
       else { 
            return false}
}

console.log(boundary(300))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

function strivify(myString) {

         let addStrive = 'Strive' 

         if(myString === addStrive || ""){
             return myString
         } else if(myString != addStrive){
             return 'Strive' + myString
                 }
                 else{ 
                     return 'Please write something'
                 }
       }

       console.log(strivify(" Strive rocks"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

function check3and7(num) {
     
    if( num % 3 === 0 || num % 7 === 0){
        return true
    } else {
        return false
    }
    
}

console.log(check3and7(54))
console.log(check3and7(34))
console.log(check3and7(20))
console.log(check3and7(17))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

function reverseString (string){

            let splitString = string.split("")
            let reverseArr = splitString.reverse()
            let joinArr = reverseArr.join('')

            return joinArr
}

console.log(reverseString("This is a test of this function"))
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

function upperFirst(word){
    
    return word.charAt (0).toUpperCase() + word.slice(1)
}


console.log(upperFirst("mi nombre es camilo"))

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

function cutString(string){
    
    let removeFirstLetter = string.substring(1)
    let removeLastLetter = string.substring(0, string.length - 1)
    let newString = removeFirstLetter + removeLastLetter

    return newString
}

console.log(cutString("Esto es una prueba"))
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

function giveMeRandom(n){

      let array = []
      let generateRandomNum = Math.floor(Math.random() * 10)
      for (let i=0 ; i<= n; i++){
          array.push(generateRandomNum)
      }
      
      return array
           
}

console.log(giveMeRandom(9))

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/