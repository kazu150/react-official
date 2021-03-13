'use strict';

const formatName = user => `${user.firstName} ${user.lastName}`

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'https://avatars.githubusercontent.com/u/33169480?s=400&u=8ef87b22becd07b9a6f01bc7ec996ca2e2e3de80&v=4'
};

const elementJsx = <h1>Hello, {formatName(user)}</h1>;

const getGreeeting = user => {
  if (user) <h1>Hello, {formatName(user)}</h1>;
  return <h1>Hello, Stranger</h1>
}

const elementJsxWithFormula = getGreeeting();

const elementWithProp = <div tabIndex="0"></div>

const elementWithPropWithFormula = <img src={user.avatarUrl}></img> //閉じタグで表現してもいいんだね

const elementWithJsxCreateElement = React.createElement(
  'h1',
  {className: 'greeeting'},
  'hello, world'
)

const elementWithJsxObject = {
  type: 'h1',
  props: {
    className: 'greeeting',
    children: 'testestsets'
  }
};  //これは動かない。Doc側でわかりやすく説明するために用意してくれた疑似Reactオブジェクトってことかな

// ReactDOM.render(
//   elementWithJsxCreateElement,
//   document.getElementById('root')
// );

// Reactの要素はイミュータブルであり、UIを変更するには新しい要素をReact.render()に渡さなければならない
// そして、Reactは毎秒UIツリー全体を作成したとしても、内容が変更された箇所のみが更新される。（仮想DOMだからこれができる？）
// 通常はステート付コンポーネント内でステートをいじり、UIを動かしていく

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);