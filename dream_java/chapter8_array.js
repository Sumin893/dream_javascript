'use strict';

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2.Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //배열 번호로 접근하면 그 안에 들어있는 obj가 출력됨. 여기선 사과
console.log(fruits[1]); //바나나
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); // 바나나. 총길이의 -1인덱스를 입력하면 가장 마지막 obj를 받아올 수 있음.

console.clear();
//3. Looping over an array
// print all fruits

//a. for루프 적용 
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//b. for of사용
for ( let fruit of fruits) {
  console.log(fruit);
}

//c. forEach : 배열안에 들어있는 value들마다 내가 전달한 함수를 출력하는 구나.
//fruits.forEach(function (fruit, index) {
  //console.log(fruit, index);
//});
//아래와 같이 쓸 수 있음

fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the ene
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the begining
fruits.unshift('🍓','🍑');
console.log(fruits);

//shift: remove an item from the begining
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push 
// : 가능하면 shift나 unshift (전체의 데이터가 움직여야하니까) 보다는 pop이나 push를 사용해라.

//splice: remove an item by index position(지정위치의 data삭제) index와 remove할 것의 개수를 지정하기.
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(1, 1); // 1번 index에 있던 바나나만 지워짐.
//fruits.splice(1); //index만 지정 (몇 개를 remove할 지는 안 지정함.)
console.log(fruits);// 1번 index부터 뒤에 모든 obj가 remove됨.
fruits.splice(1, 1, '🍏', '🍉'); //1번 index에서 1개 지우고, 청사과, 수박을 그 자리에 추가함.
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🍇'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); //사과가 몇번째 index에 있는지 //0
console.log(fruits.indexOf('🍉')); //수박이 몇번째 index에 있는지 //2
console.log(fruits.indexOf('🥥')); //-1. 코코넛은 안에 없으니까

//includes
console.log(fruits.includes('🍉')); //수박이 이 array안에 있는지 //true
console.log(fruits.includes('🥥')); // false

//lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); //0
console.log(fruits.lastIndexOf('🍎')); //5