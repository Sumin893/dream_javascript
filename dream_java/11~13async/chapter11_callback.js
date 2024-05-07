'use strict';

//JavaScript is synchronous. :동기적
//Execute the code block in order after hoisting : hoisting이 된 이후부터 코드가 하나하나씩 순차적으로 실행된다.
//hoisting: var, function declaration : 자동적으로 선언들이 제일 위로 올라가는 것.
console.log('1'); //동기
setTimeout(function() {   //브라우저 api는 무조건 브라우저한테 요청을 보내고 응답을 기다리지 않고 console.log로 넘어감
  console.log('2');
}, 1000); //비동기
console.log('3'); //동기

//arrow function으로 바꾸면
//setTimeout(() => console.log('2'), 1000);

//Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello')); //동기

//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); //비동기



//Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user =>{
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);