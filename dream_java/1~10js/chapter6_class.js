'use strict';

// Object-oriendted programming
// class: template
// object: instance of a class



// 1. Class declarations
//class는 fields(data)와 methods가 종합적으로 묶여있는 것.
class Person {
  // constructor (생성자)
  constructor(name, age) {
    // 속성(field) : name이랑 age
    this.name = name;
    this.age = age;
  }


  speak() {  // 행동(methods)
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name); //ellie
console.log(ellie.age); //20
ellie.speak(); //ellie: hello!



// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() { //get을 이용해서 값을 return하고 
    return this._age; //위의 this.age와 변수의 이름을 조금 다르게 써야함. 아니면 "call stack이 닫혔어!"라고 에러가 뜸.
  }

  set age(value) { //set을 이용해서 값을 설정하는 것
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1); //user의 age가 -1인 것은 말이 안됨
console.log(user1.age);



// 3. Fields (public, private)
class Experiment {
  publicField = 2;
  #privateField = 0; //해시기호 쓰면 private. class 내부에서만 값이 보이고 접근, 변경 가능.
}
const experiment = new Experiment();
console.log(experiment.publicField); //얘는 출력이 2
console.log(experiment.privateField); //얘는 undefined로 출력.



// 4. Static properties and methods
//static은 object마다 할당되는 게 아니라, class자체에 붙는 거임.
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//object(들어오는 data)에 상관없이 공통적으로 class에서 쓸 수 있는 거라면 static과 static method를 이용하는 것이 메모리 사용에 좋음.


// 5. Inheritance
class Shape { //shape으로 한번에 정의를 해버림
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} //extends라는 키워드를 이용하면 Shape에 있는 모든 것들이 rectangle에 포함이 됨.

class Triangle extends Shape {
  draw() {
    super.draw(); //부모의 method도 출력되고, 밑의 method도 출력됨.
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());



// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //왼쪽의 object가 오른쪽을 이용해 만들어 진 것인지 아닌지 확인하는 것 => T/F로 return //T
console.log(triangle instanceof Rectangle); //F
console.log(triangle instanceof Triangle); //T
console.log(triangle instanceof Shape); //T
console.log(triangle instanceof Object); //T
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);