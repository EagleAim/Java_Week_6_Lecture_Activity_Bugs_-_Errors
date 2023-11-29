myGrades = [100, 100, 90, 73, 78, 94, 86];

var myAverage = 0;

for (var i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

var avg = myAverage / myGrades.length;

console.log("My grade average is " + avg);


/*The code above has bugs. Use your debugger to step through the code and find and fix any bugs.
What bugs did you find?
I found that my grade average comes out as NaN

How did you fix them?
I had to 
1. make a variable at the begining of my Average
2. change let to var in like 5
3. change 1 to 0 in line 5
4. change my Average in line 11 to "var avg"
6. change myAverage to avg in line 13
*/


