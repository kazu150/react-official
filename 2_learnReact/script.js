'use strict';

var formatName = function formatName(user) {
  return user.firstName + ' ' + user.lastName;
};

var user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'https://avatars.githubusercontent.com/u/33169480?s=400&u=8ef87b22becd07b9a6f01bc7ec996ca2e2e3de80&v=4'
};

var elementJsx = React.createElement(
  'h1',
  null,
  'Hello, ',
  formatName(user)
);

var getGreeeting = function getGreeeting(user) {
  if (user) React.createElement(
    'h1',
    null,
    'Hello, ',
    formatName(user)
  );
  return React.createElement(
    'h1',
    null,
    'Hello, Stranger'
  );
};

var elementJsxWithFormula = getGreeeting();

var elementWithProp = React.createElement('div', { tabIndex: '0' });

var elementWithPropWithFormula = React.createElement('img', { src: user.avatarUrl }); //閉じタグで表現してもいいんだね

var elementWithJsxCreateElement = React.createElement('h1', { className: 'greeeting' }, 'hello, world');

var elementWithJsxObject = {
  type: 'h1',
  props: {
    className: 'greeeting',
    children: 'testestsets'
  }
}; //これは動かない。Doc側でわかりやすく説明するために用意してくれた疑似Reactオブジェクトってことかな

// ReactDOM.render(
//   elementWithJsxCreateElement,
//   document.getElementById('root')
// );

// Reactの要素はイミュータブルであり、UIを変更するには新しい要素をReact.render()に渡さなければならない
// そして、Reactは毎秒UIツリー全体を作成したとしても、内容が変更された箇所のみが更新される。（仮想DOMだからこれができる？）
// 通常はステート付コンポーネント内でステートをいじり、UIを動かしていく

function tick() {
  var element = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Hello, world!'
    ),
    React.createElement(
      'h2',
      null,
      'It is ',
      new Date().toLocaleTimeString(),
      '.'
    )
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);