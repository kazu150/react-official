'use strict';

// classを利用するとなぜstateが使えるのか
// Clockをレンダーしている限り、Clockクラスのインスタンスは1つだけ使われる
// このことで、ローカルstateやライフサイクルメソッドが使える

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    //クラスコンポーネントは常にpropsを引数として親クラスのコンストラクタを呼び出す必要あり
    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = { date: new Date() }; //constructorは、this.stateを直接代入してよい唯一の場所
    // stateは完全ローカル、カプセル化されていて、他のコンポーネントから参照できない
    return _this;
  }

  _createClass(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      //データフローに影響しないフィールド（メソッド？）をthisに追加するのは自由
      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmonunt',
    value: function componentWillUnmonunt() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'It is ',
          this.state.date.toLocaleTimeString(),
          '.'
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Clock, null),
    React.createElement(Clock, null),
    React.createElement(Clock, null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));