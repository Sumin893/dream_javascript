'use strict';

// JSON: JavaScript Object Notation

// simplest data interchange format
// lightweight text-based structure
// easy to read
// key-value pairs
// used for serialization and transmission of data between the network the network connection
// independent programming language and platform

//1. Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple', 'banana']); //배열을 json으로 변환
console.log(json); //["apple", "banana"]

const rabbit = { //obj를 json으로 변환
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
}; //obj는 출력, 함수jump는 출력되지 않음.

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']); //원하는 특성만 출력도 가능 
// {"name":"tori"}
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});


//2. JSON to Object
//parse(json)

console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj); //모든 key와 value가 출력됨!
rabbit.jump(); //can jump!
//obj.jump(); //error

console.log(rabbit.birthDate.getDate()); //30
console.log(obj.birthDate.getDate()); //error



//jsondiff.com
//jsonbeautifier
//jsonparser
//json validator