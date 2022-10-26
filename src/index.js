import "./styles.css";

const inputFirst = document.getElementById("inputOne");
const inputSecond = document.getElementById("inputTwo");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const div = document.getElementById("div");
const mul = document.getElementById("mul");
const output = document.getElementById("output");

function addEventHandler() {
  var inputOne = inputFirst.value;
  var inputTwo = inputSecond.value;
  add.style.backgroundColor = "#59bfff";
  sub.style.backgroundColor = "#ececec";
  div.style.backgroundColor = "#ececec";
  mul.style.backgroundColor = "#ececec";
  if (inputOne && inputTwo) {
    if (isNaN(inputOne) === false && isNaN(inputTwo) === false) {
      var addition = Number(inputOne) + Number(inputTwo);
      output.innerText = addition;
    } else {
      output.innerText = "Input can take only numeric values!!";
    }
  } else {
    output.innerText = "Input both the values!!";
  }
}
function subEventHandler() {
  var inputOne = inputFirst.value;
  var inputTwo = inputSecond.value;
  sub.style.backgroundColor = "#59bfff";
  add.style.backgroundColor = "#ececec";
  div.style.backgroundColor = "#ececec";
  mul.style.backgroundColor = "#ececec";
  if (inputOne && inputTwo) {
    if (isNaN(inputOne) === false && isNaN(inputTwo) === false) {
      var subtract = Number(inputOne) - Number(inputTwo);
      output.innerText = subtract;
    } else {
      output.innerText = "Input can take only numeric values!!";
    }
  } else {
    output.innerText = "Input both the values!!";
  }
}

function divEventHandler() {
  var inputOne = inputFirst.value;
  var inputTwo = inputSecond.value;
  div.style.backgroundColor = "#59bfff";
  add.style.backgroundColor = "#ececec";
  sub.style.backgroundColor = "#ececec";
  mul.style.backgroundColor = "#ececec";
  if (inputOne && inputTwo) {
    if (isNaN(inputOne) === false && isNaN(inputTwo) === false) {
      var divide = Number(inputOne) / Number(inputTwo);
      output.innerText = divide;
    } else {
      output.innerText = "Input can take only numeric values!!";
    }
  } else {
    output.innerText = "Input both the values!!";
  }
}
function mulEventHandler() {
  var inputOne = inputFirst.value;
  var inputTwo = inputSecond.value;
  mul.style.backgroundColor = "#59bfff";
  add.style.backgroundColor = "#ececec";
  sub.style.backgroundColor = "#ececec";
  div.style.backgroundColor = "#ececec";
  if (inputOne && inputTwo) {
    if (isNaN(inputOne) === false && isNaN(inputTwo) === false) {
      var multiply = Number(inputOne) * Number(inputTwo);
      output.innerText = multiply;
    } else {
      output.innerText = "Input can take only numeric values!!";
    }
  } else {
    output.innerText = "Input both the values!!";
  }
}

add.addEventListener("click", addEventHandler);
sub.addEventListener("click", subEventHandler);
div.addEventListener("click", divEventHandler);
mul.addEventListener("click", mulEventHandler);
