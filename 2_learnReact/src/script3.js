'use strict';

// classを利用するとなぜstateが使えるのか
// Clockをレンダーしている限り、Clockクラスのインスタンスは1つだけ使われる
// このことで、ローカルstateやライフサイクルメソッドが使える

class Clock extends React.Component {

  constructor(props) {
    super(props); //クラスコンポーネントは常にpropsを引数として親クラスのコンストラクタを呼び出す必要あり
    this.state = {date: new Date()}; //constructorは、this.stateを直接代入してよい唯一の場所
    // stateは完全ローカル、カプセル化されていて、他のコンポーネントから参照できない
  }

  componentDidMount() {
    //データフローに影響しないフィールド（メソッド？）をthisに追加するのは自由
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmonunt() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
