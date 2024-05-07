'use strict';

//Function
// fundimental building block in the program (프로그램을 구성하는 중요한 building block)
// subprogram can be used multiple times (subprogram이라고도 불리고 여러번 재사용이 가능함.)
// performs a task or calculates a value (한가지의 task나 값을 계산하는 데 사용.)

//1. Function declaration 
//function name(param1, param2) { body... return; }
//one function === one thing (하나의 함수는 하나의 일만 하게 해야함.)
//naming: doSomething, command, verb (이름을 동사형태로 지정해 주면 좋음.)
//e.g. createCardAndpoint -> createCard, createPoint 
//function is object in JS (JS에서 함수는 object로 여기기 때문에 변수에 할당할 수도 있고, 파라미터로 전달이 되고, 함수를 return할 수도 있음.)

function printHello() {
  console.log('Hello');
}
printHello();


//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const Sumin = { name: 'Sumin' };
changeName(Sumin);
console.log(Sumin);

//3. Default parameters
function showMessage(message, from = 'unkown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!'); //from은 정의가 되지 않음.  Hi! + by + undefined 가 출력.


// 4. Rest parameters
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); //local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  } //함수를 함수 안에 하나 더 추가했을 때. 마찬가지로 자식함수는 부모꺼를 가져올 수 있지만, 부모는 자식꺼를 가져올 수 없음.
  // console.log(childMessage); //윗 줄의 이유로 이 줄이 에러가 뜨게 됨!
}
printMessage();
//밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다!!! 
//지역변수를 밖에서 출력시키면 에러! (안에서만 접근이 가능하니까)
//안에서는 global을 불러올 수도, 출력시킬 수도 있음!


//6. Return a value
function sum(a , b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}
//블록 안에서 logic을 길게 작성하면 길어지고 가독성이 떨어짐.

//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}
//조건이 맞지 않을 때 빨리 return을 해버리고 조건이 맞을 때만 그 긴 logic을 실행하는 식으로 바꾸기!






//First-class function
//functions are treated like any other variable (function은 다른 variable과 마찬가지로)
//can be assigned as a value to variable (변수에 할당이 되고)
//can be passed as an argument to other functions (parameter로 전달도 되고)
//can be returned by another function (return값으로도 return이 됨)

//1. Function expression (위의 내용을 가능하게 하는 것이 function expression)
//a function declaration can be called earlier than it is defined.
//a function expression is created when the execution reaches it.
const print = function() { //함수를 선언함과 동시에 print에 함수를 할당. function에 이름이 없음 = anonymous function
  //function() -> function print (); 로 하면 함수 이름이 print가 되니까 named function
  console.log('print');
};
print(); //print 출력
const printAgain = print;
printAgain(); //다시 또 print 출력
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { //printYes, printNo 두 개의 callback functions가 parameter로 전달되어 
  if (answer === 'love you') {
    printYes();
  } else {
    printNo;
  }
}
//anonymous function
const printYes = function () { //printYes변수에 YES를 출력하는 함수를 넣고 
  console.log('yes!');
};
//named function
//디버깅할 때 함수이름 나오게 되니까 더 나음(better debugging in debugger's stack traces)
//recursions
const printNo = function print() { //printNo변수에 NO를 출력하는 함수를 넣어
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function (함수를 간결하게 만들어주는 애)
//always anonymous
// const simplePrint = function() {
//   console.log('simplePrint!');
// }
//위의 예를
const simplePrint = () => console.log('simplePrint!');
//함수이름 없애고, 블록 없애고, =>를 추가!

// const add = function(a, b) {
//   return a + b;
// } 
//얘도 위에 애를 아래로! (간결하게!!)
const add = (a, b) => a + b;

//IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();
// hello(); //호출하는 것을 쓰지 않고 함수를 선언함과 동시에 호출하는 것!


//Quiz!!!!!!!!
//function calculate(command, a, b)
//command: (add, substract, divide, multiply, remainder)