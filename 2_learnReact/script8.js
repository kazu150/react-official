var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameForm = function (_React$Component) {
  _inherits(NameForm, _React$Component);

  function NameForm(props) {
    _classCallCheck(this, NameForm);

    var _this = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

    _this.state = { text: '', fruit: 'lime' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(NameForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
      // setState() は自動的に部分的な state を現在の state にマージする
      // ↑注意。useStateはしない
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      alert('text: ' + this.state.text + '\nfruit: ' + this.state.fruit + '\n    ');
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'label',
          null,
          'Name:',
          React.createElement('input', { type: 'text', name: 'text', value: this.state.text, onChange: this.handleChange })
        ),
        React.createElement(
          'label',
          null,
          'Pick your favorite flavor:',
          React.createElement(
            'select',
            { name: 'fruit', value: this.state.fruit, onChange: this.handleChange },
            React.createElement(
              'option',
              { value: 'grapefruit' },
              'Grapefluit'
            ),
            React.createElement(
              'option',
              { value: 'lime' },
              'Lime'
            ),
            React.createElement(
              'option',
              { value: 'coconut' },
              'Coconut'
            )
          )
        ),
        React.createElement('input', { type: 'submit', value: 'Submit' })
      );
    }
  }]);

  return NameForm;
}(React.Component);

ReactDOM.render(React.createElement(NameForm, null), document.getElementById('root'));