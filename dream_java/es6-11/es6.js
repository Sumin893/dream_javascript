/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

{
  const ellie1 = {
    name: 'Ellie',
    age: '18',
  };

  const name = 'Ellie';
  const age = '18';

  // 💩이렇게 쓰지말고
  const ellie2 = {
    name: name,
    age: age,
  };

  // ✨이렇게 하나로만 쓰자! 이게 best!
  const ellie3 = {
    name,
    age,
  };

  console.log(ellie1, ellie2, ellie3);
  console.clear();
}

/**
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 */
{
  // object
  const student = {
    name: 'Anna',
    level: 1,
  };

  // 💩
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // ✨
  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student; //이름을 바꾸고 싶다면
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ['🐶', '😽'];

  // 💩
  {
    const first = animals[0]; //index로 배열에 접근!
    const second = animals[1];
    console.log(first, second);
  }

  // ✨
  {
    const [first, second] = animals;
    console.log(first, second);
  }
  console.clear();
}

/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 */
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy [...array]
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = 'newKey';
  console.log(array, arrayCopy, arrayCopy2);



  // object copy { ...obj1 }
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ['🍑', '🍓'];
  const fruits2 = ['🍌', '🥝'];
  const fruits = [...fruits1, ...fruits2]; //배열 2개 병합도 가능
  console.log(fruits);

  // object merge
  const dog1 = { dog: '🐕' };
  const dog2 = { dog: '🐶' };
  const dog = { ...dog1, ...dog2 }; //object 2개도 병합 가능 (동일한 key를 가지는 obj일 경우 젤 마지막에 오는 애가 최종적으로 값을 덮어 씌움)
  console.log(dog);
  console.clear();
}

/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
  // 💩
  {
    function printMessage(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }

  // ✨
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }
  console.clear();
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
{
  const isCat = true;
  // 💩
  {
    let component;
    if (isCat) {
      component = '😸';
    } else {
      component = '🐶';
    }
    console.log(component);
  }

  // ✨
  {
    const component = isCat ? '😸' : '🐶';
    console.log(component);
    console.log(isCat ? '😸' : '🐶');
  }
  console.clear();
}

/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
  const weather = '🌤';
  const temparature = '16°C';

  // 💩
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
  );

  // ✨
  
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);

}