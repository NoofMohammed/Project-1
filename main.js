let obj = {
  Q1: {
    value: "What is javaScript extension?",
    1: ".html",
    2: ".js",
    3: ".css",
    4: "main",
    Answar: "2",
  },
  Q2: {
    value: "How to delete secend element from array?",
    1: "array.slice(1,2)",
    2: "array.splice(1,1)",
    3: "array.splice(0,2)",
    4: "array[1]",
    Answar: "2",
  },
  Q3: {
    value: "Which one is object?",
    1: "{9}",
    2: "[0,9]",
    3: "{9.k}",
    4: "{name: 'noof', age: '24'}",
    Answar: "4",
  },
  Q4: {
    value: "An important thing to learn to become aprofessional in javaScript?",
    1: "html",
    2: "nothing",
    3: "Error handling",
    4: "All",
    Answar: "3",
  },
  Q5: {
    value: "To add to the array,use?",
    1: "array.join()",
    2: "array.split()",
    3: "array.slice()",
    4: "array.push()",
    Answar: "4",
  },
  Q6: {
    value: "[1,2,3][2] =>(?)",
    1: "3",
    2: "0",
    3: "1",
    4: "2",
    Answar: "1",
  },
  Q7: {
    value: "Which one is array?",
    1: "{1,2,3}",
    2: "{A:'1',B: '2'}",
    3: "[1,2,3,4]",
    4: "2,4",
    Answar: "3",
  },
  Q8: {
    value: "Math.floor(2.99) =>?",
    1: "1",
    2: "2",
    3: "4",
    4: "2.99",
    Answar: "2",
  },
  Q9: {
    value: "[Hello, Noof].join(' ') =>?",
    1: "Hellonoof",
    2: "[hello Noof]",
    3: "{Hello: 'Noof'}",
    4: "'Hello Noof'",
    Answar: "4",
  },
  Q10: {
    value: "[1,2,3,4,5].ravars() =>?",
    1: "15",
    2: "[1,2,3,4,5]",
    3: "[5,4,3,2,1]",
    4: "[1,2,3]",
    Answar: "3",
  },
};
let result = 0;
let currntAnswer;
var selectors = document.getElementsByClassName("select");

for (var i = 0; i < selectors.length; i++) {
  selectors[i].addEventListener("click", function () {
    var old = document.getElementsByClassName("active");
    if (old[0]) {
      old[0].className = old[0].className.replace(" active", "");
    }
    this.className += " active";
    currntAnswer = this.id
  });
}

document.getElementById("question").innerText = "What is javaScript extension?";
document.getElementById("1").innerText = ".html";
document.getElementById("2").innerText = ".js";
document.getElementById("3").innerText = ".css";
document.getElementById("4").innerText = "main";

document.getElementById("next").onclick = function () {
  nextQuestion();
  var old = document.getElementsByClassName("active");
    if (old[0]) {
      old[0].className = old[0].className.replace(" active", "");
    }

};
const arrarQ = Object.keys(obj);

let index = 0;


const nextQuestion = () => {
  
  
  if (index>= arrarQ.length){
    alert(result)
     return
}

let key = arrarQ[index];
  index += 1;
  console.log(key,"key")
let questionObj = obj[key];
console.log(questionObj.Answar , "object",currntAnswer,"currntAnswer" )
if(questionObj.Answar == currntAnswer ){
  result += 1
  
}

  

  
  
  document.getElementById("question").innerText = questionObj.value;
  document.getElementById("1").innerText = questionObj[1];
  document.getElementById("2").innerText = questionObj[2];
  document.getElementById("3").innerText = questionObj[3];
  document.getElementById("4").innerText = questionObj[4];
  
  




  
 

  //  return obj[key].value
};

