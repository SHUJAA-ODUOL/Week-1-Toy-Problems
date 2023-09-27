//prompts the user for input
function studentMarks(){
const userInput = parseFloat(prompt("Enter the students mark(between 0 and 100):"));
const marks = parseFloat(userInput)

if(marks>=79 && marks<=100){
      let grade;
      //marks greater than 79 and less or equal to 100 is a A
      if(marks>=79 && marks<=100){
        grade= 'A'
        //marks between 60 to 79 is a B
      }else if(marks>=60 && marks<=79){
        grade= 'B'
        //marks between 49 to 59 is a C
      }else if(marks>=49 && marks <=59){
        grade= 'C'
        //marks between 40 to 49 is a D
      }else if(marks>= 40 && marks<= 49){
        grade= 'D'
        //marks less than 40 is a E
      }else if(marks < 40 && marks>0){
        grade= 'E'
      }

        console.log(`The student's grade ${grade}`)


}
}







