'use strict';

//Promise is a JavaScript object for asynchronous operation. 비동기적인 것을 수행할 때 콜백함수 대신 유용하게 쓰임. state(상태), producer와 consumer의 차이점을 이해.

//State: pending(promise가 만들어져서 operation이 수행중인 상태) -> fulfilled(성공적으로 operation이 끝난 상태) or rejected(파일을 찾을 수 없거나 네트워크에 문제가 생긴 상태)
//Producer vs Consumer

//1. Producer
//when new Promise is created, the executor runs automatically.(promise가 만들어지면 우리가 전달한 executor라는 콜백함수가 자동으로 실행됨.)

const promise = new Promise((resolve, reject) => {
  //doing some heavy work(network, read files등 시간이 오래걸리는 task들을 promise함수로 쓰기)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie')
    //reject(new Error('no network'));
  }, 2000);
});

//2. Consumers: then(resolve의 파라미터가 then의 value로 전달됨 or ), catch, finally
promise //
  .then((value) => {
  console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });


//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
  return new Promise((resolve,reject) => {
    setTimeout(() => resolve(num -1), 1000);
  });
})
.then(num => console.log(num));


//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`🐔`), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
      //resolve(`${hen} => 🥚`), 1000);
  });

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

  getHen()
  .then(getEgg)   //hen => getEgg(hen)
  .catch(error => {
    return '🥐';
  })
  .then(egg => cook(egg)) 
  .then(meal => console.log(meal))
  .catch(console.log);

  //이거 다 줄여쓰면   getHen().then(getEgg).then(cook).then(console.log);로 축약가능

  