
/***
 grading for score of students
 if the max score is 100, and min score is zero
 if score is btw zero and 100= A
 70-79= B
 60-69= C
 50-59= D
 45 -49 E
 0-40= F
 if greater max score or less min= invalid score
 */

 let maxScore = 100;
 let minScore = 0;
 let score = 70;

 if (score >= 80 && score <= maxScore){
    console.log("A");
 } else if(score >= 70 && score < 80){
    console.log("B");
 } else if (score >= 60 && score < 70){
    console.log("C");
 } else if (score >= 50 && score < 60){
    console.log("D");
 } else if (score >= 40 && score <50){
    console.log("E");
 } else if (score >= minScore && score < 40){
    console.log("F");
 } else {
    console.log("Invalid score");
 }