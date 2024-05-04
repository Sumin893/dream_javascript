'use strict';

// 1. String concatenation
console.log('my' + ' cat'); //string 더하기 string
console.log('1' + 2 ); //string 더하기 num이지만 num을 자동으로 string 취급
console.log(`string literals: 1 + 2 = ${1 + 2}`); //$셀을 이용.  

console.log("Sumin's \n \tbook");  // \n:세로 줄바꿈 \t:tab

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. Increment and dectrement operators
let counter = 2;
const preIncrement = ++counter; //counter 앞에 ++를 붙여준 게 increment operator임. 
//counter = counter +1;
//preIncrement = counter; 와 같은 뜻! counter에 1을 더해주고 그 counter값을 preIncrement에 할당한 거!
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; 
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
//postIncrement = counter;
//counter = counter + 1; 와 같은 뜻! 변수의 값을 postIncrement에 할당한 뒤 1을 더해주는 것!

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; //x = x + y;와 같음
x -= y;
x *= y;
x /= y;

console.log(x *= y); //이렇게 출력시키기

//5. Comparison operators (True/False로 출력이 나옴!)
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

//6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) : 얘는 하나만 true이면 출력이 true임. 
//근데 맨 처음 대상이 true면 뒤에 true가 있든 flase가 있든 그냥 보지도 않고 true를 출력함.
console.log(`or: ${value1 || value2 || check()}`); //value1이나 2에 true가 있다면 check함수까지 보지 않아도 됨.
//그래서 함수 호출하는 애들을 제일 뒤에 놓고 간단한 애들을 맨 앞에 놓기!

// && (and), 애는 하나만 false이면 출력이 false임.
console.log(`and: ${value1 && value2  && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log('Happy');
  }
  return true;
}

// ! (not) 
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 타입을 변경해서 검사해줌!
console.log(stringFive == numberFive); //T
console.log(stringFive != numberFive); //F

// === strict equality, no type conversion 타입이 다르면 다른애야! 웬만하면 이거쓰기!
console.log(stringFive === numberFive); //F
console.log(stringFive !== numberFive); //T

// object equality by reference
const Sumin1 = { name: 'Sumin'};
const Sumin2 = { name: 'Sumin'};
const Sumin3 = Sumin1;
console.log(Sumin1 == Sumin2); //F
console.log(Sumin1 === Sumin2); //F
console.log(Sumin1 === Sumin3); //T

//Quiz
console.log(0 == false); //T
console.log(0 === false); //F (0이 boolean type은 아니니까)
console.log('' == false); //T
console.log('' === false); //F (''이 boolean type은 아니니까)
console.log(null == undefined); //T
console.log(null === undefined); //F

// 8. Conditional operators: if
// if, else if, else
const name = 'Sumin';
if (name == 'Sumin') {
  console.log('Welcome, Sumin!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
//use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser ='Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
    console.log('love you');
    break;
  case 'Firefox':
    console.log('love you');
    break;
  default :
  console.log('same all!');
    break;
}

//  Chrome과 Firefox는 같은 내용을 출력함
// case 'Chrome':
// console.log('love you');
// break;
// case 'Firefox':
// console.log('love you');
// 따라서
// case 'Chrome':
// case 'Firefox':
// console.log('love you');
// 이렇게만 써줘도 됨!


// 11. Loops
// while loop, while the condition is truthy
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first
//then check the condition
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
//block을 먼저 실행하고 싶으면 do-while, 조건문이 맞을 때만 block을 실행하고 싶으면 while 사용.

//for loop, for(begin; condition; step) begin은 딱 한번만 호출. condition과 step을 계속 해줌.
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaraion block안에 let변수를 주기.
  console.log(`inline variable for: ${i}`);
}

//nested loops : 이건 피해라!
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

//Quiz
//break(loop를 아예 끝내는 것), continue(지금꺼만 skip)







//Q1. iterate form 0 to 10 and print only even numbers (use continue)
for (let i =0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}