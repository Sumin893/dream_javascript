/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
{
  const person1 = {
    name: 'Ellie',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob',
      },
    },
  };
  const person2 = {
    name: 'Bob',
  };

  // 💩💩💩💩💩💩
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1); //출: Bod
    // printManager(person2); //출: manager of undefined error
  }

  // 💩💩💩 ternary operator사용
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // 💩 and 연산자 사용
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // ✨ Optional Chaining 사용!!!!!
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
  console.clear();
}

/**
 * Nullish Coalescing Operator (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
{
  // Logical OR operator
  // false: false, '', 0, null, undefined 다 false임.
  {
    const name = 'Ellie';
    const userName = name || 'Guest'; //앞이 false여야 뒤에꺼가 실행됨.
    console.log(userName); //name이 Ellie로 false가 아니니까 name 'Ellie'가 출력됨.
  }

  {
    const name = null; //null은 false임.
    const userName = name || 'Guest'; //'Guest'가 출력되게 됨.
    console.log(userName);
  }

  // 💩
  {
    const name = ''; //문자가 비어있어도, 사용자가 아무런 이름을 쓰고 싶지 않을 때도 false로 간주해서 guest가 출력되는 문제가 발생!
    const userName = name || 'Guest';
    console.log(userName);

    const num = 0; //0도 false라서!
    const message = num || 'undefined';
    console.log(message);
  }

  // ✨
  {
    const name = ''; //이름이 있다면
    const userName = name ?? 'Guest'; //이름을 쓰고. 이름에 아무런 값이 없다면 guest를 이용.
    console.log(userName); //비어진 문자열 출력됨.

    const num = 0; //num이라는 변수에 값이 있다면 
    const message = num ?? 'undefined'; //num을 이용하고. num이 없을 때만 undefined를 작성하자.
    console.log(message); //0이 출력됨.
  }
}