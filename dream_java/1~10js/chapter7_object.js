'use strict';
//Objects
//one of the JavaScript's data types.
//a collection tof related data and/or functionality.
//Nearly all objects in JavaScript are instances of Object
//object = {key : value }; //object는 key(변수) 와 value(값)의 집합체다!


// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax. class를 이용

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// can add properties later
ellie.hasJob = true; //뒤늦게 이 특성을 추가하는 것이 가능함.
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;//특성 삭제도 가능함
console.log(ellie.hasJob);



// 2. Computed properties (계산된 properties)
// key는 항상 String type
console.log(ellie.name); //코딩하는 그 순간 해당하는 값을 받아오고 싶을 때. 코딩할 때는 이렇게 쓰는 게 맞음.
console.log(ellie['name']);//정확하게 어떤 key가 필요한지 모를 때, 런타임 때 받아오고 싶을 때, 실시간으로 원하는 걸 가져오고 싶을 때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) { //사용자한테 받아올 땐 어떤 걸 출력할 지 모르는 상황이니까 여기선 []를 쓰는 게 맞음.
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');



// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);



// 4. Constructor Function
function Person(name, age) {
  // this = {}; //생략
  this.name = name;
  this.age = age;
  // return this; //생략
}


// 5. in operator: property existence check (key in obj) : 해당하는 obj안에 key가 있는지 없는지 확인
console.log('name' in ellie); // : name이라는 key가 ellie라는 obj안에 있는지 T
console.log('age' in ellie); // T
console.log('random' in ellie); //F
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable) 순차적
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);


const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue  red를 blue가 덮어씀!
console.log(mixed.size); //big