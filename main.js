'use strict';     /*그냥 js문서엔 이걸 맨 위에 넣어줘!*/

//1.Variable (변수선언방법)
let personname = 'Sumin'; /* let이라는 함수를 이용해 name이라는 변수를 선언, 변수 name에 Sumin이라는 값을 할당. 변수를 선언할 수 있는 유일한 키워드*/
console.log(personname);

personname = 'hello'; /*다시 변수 name에 hello라는 변수 값을 할당.*/
console.log(personname);

//블록사용 : 블록 밖에서는 블록 안의 내용 볼 수 없게 됨 : Block scope
{
  let personname = 'Sumin';
  console.log(personname);
  personname = 'hello';
  console.log(personname);
}
console.log(personname); //이렇게 했을 때 콘솔에 personname에 해당하는 게 아무 값도 뜨지 않음


let globalName = 'global name'; //global scope : 블록을 쓰지 않고 파일 안에다가 정의하는 애. 어느 곳에서나(블록 안&밖) 접근이 가능함. 메모리에 탑재 되어있기 때문에 가능한 최소한으로 쓰는 게 좋음.

//let이 나오기 전엔 var을 썼었음. 근데 var hoisting이 발생하니까, 얘는 block scope도 없어! 그니까 이제 var쓰지마!
//var hoisting: 선언을 어디에 했는지와 상관없이 제일 위로 선언을 끌어 올리는 것.




//2.Constant 
// : 한번 할당하면 값이 절대 바뀌지 않는 것-> immutable data type임 
// cf) mutable data type : 할당해도 값을 바꿔줄 수 있는 애 ex)let

const daysInWeek = 7;
const maxNumber = 5; //변하지 않는 값들

{
let age = '24';
console.log(age);

age = '25';
console.log(age);
//age라는 변수는 24에서 25로 바뀜
}

//3. Variable types
// primitive, single item (더이상 작은 것으로 나눠질 수 없는 것) : number, string, boolean, null, undefiedn, symbol
// object, box container (single item들을 여러 개 묶어서 한 박스로 생각하는 것)

//number
const count = 17; //정수
const size = 17.1 //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
//자바스크립트에선 위 처럼 아무 숫자나 입력해도 모두 number로 여김

const infinity =  1 / 0;
const negativeinfinity = -1 /0;
const nAn ='not a number'  / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'Hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ' '
//true: any other value

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);
//null과 undefined는 차이가 있음. null은 텅텅비어있는 값이라고 내가 선언을 한거고, undefined는 선언은 되었지만 값이 지정되지 않은 것.


//symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`) //symbol은 .description을 넣어서 spring으로 전환해서 출력해줘야함.

//object, real-life object, data structure
const Sumin = {name: 'Sumin', age: 24};

//4. Dynamic typing : dynamically typed language : 선언할 때 어떤 type인지 선언하지 않고, runtime(프로그램이 동작할 때) 할당하는 값에 따라 type이 변경될 수 있다는 것. 근데 이것 때문에 런타임에러가 자주 발생하게 될 수 있으니 조심!


//text라는 변수가 할당하는 값에 따라 type이 변경되는 예시
let text = 'hello'; //여기선 string type
console.log(text.charAt(0)); //h   0번째 index에 있는 애
console.log(`value: ${text}, type: ${typeof text}`);
text = 1; //여기선 number type
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; //여기선 string 7과 number 5를 더함. 근데 문자열과 숫자를 더하니까 5를 string으로 이해함.
console.log(`value: ${text}, type: ${typeof text}`); //75가 됨 string type
text = '8' / '2'; //여기선 string과 string을 나누는 것이지만 string 속을 보면 number임. 따라서 number로 이해함.
console.log(`value: ${text}, type: ${typeof text}`); // 4가 됨 number type
console.log(text.charAt(0));