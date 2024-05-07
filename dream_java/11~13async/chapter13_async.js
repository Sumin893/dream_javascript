'use strict';

// async & await
// 깔끔하게 promise를 사용할 수 있는 방법

// 1. async
async function fetchUser() {
  // do network reqeust in 10 secs....
  return 'ellie';
}

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     //do network request in 10 secs..
//     resolve('ellie');
//   });
// } ======> 이 코드에서 promise와 resolve를 빼고 async로 바꿔 쓰면 뒤에 코드와 동일하게 됨.

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨ async 함수 안에서만 사용가능
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  const applePromise = getApple(); //promise를 만들면 delay없이 promise가 바로 병렬적으로 동시에 실행이 되니까. (=아랫줄도 마찬가지)
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
//Promise.all: promise배열 전달 시 모든 promise들이 병렬적으로 다 받을 때까지 모아주는 것.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]); //race: 배열에서 가장 먼저 값을 return하는 아이만 전달되는 것
}

pickOnlyOne().then(console.log);