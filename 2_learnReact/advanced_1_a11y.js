var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ListItem(_ref) {
  var item = _ref.item;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "dt",
      null,
      item.term
    ),
    React.createElement(
      "dd",
      null,
      item.description
    ),
    React.createElement(
      "label",
      { htmlFor: "namedInput" },
      "Name:"
    ),
    React.createElement("input", { id: "namedInput", type: "text", name: "name" })
  );
}

function Glossary(props) {
  return React.createElement(
    "dl",
    null,
    props.items.map(function (item) {
      return React.createElement(ListItem, { item: item, key: item.id });
    })
  );
}

// refを使って特定のDOMにフォーカスをセットする

var CustomTextInput = function (_React$Component) {
  _inherits(CustomTextInput, _React$Component);

  function CustomTextInput(props) {
    _classCallCheck(this, CustomTextInput);

    // Create a ref to store the textInput DOM element
    var _this = _possibleConstructorReturn(this, (CustomTextInput.__proto__ || Object.getPrototypeOf(CustomTextInput)).call(this, props));

    _this.textInput = React.createRef();
    _this.focus = _this.focus.bind(_this);
    return _this;
  }

  _createClass(CustomTextInput, [{
    key: "focus",
    value: function focus() {
      console.log(this.textInput);
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.textInput.current.focus();
    }
  }, {
    key: "render",
    value: function render() {
      // Use the `ref` callback to store a reference to the text input DOM
      // element in an instance field (for example, this.textInput).
      return React.createElement(
        "div",
        null,
        React.createElement("input", {
          type: "text",
          ref: this.textInput
        }),
        React.createElement(
          "button",
          { onClick: this.focus },
          "Focus!"
        )
      );
    }
  }]);

  return CustomTextInput;
}(React.Component);

function CustomTextInput(props) {

  return React.createElement(
    "div",
    null,
    React.createElement("input", { ref: props.inputRef }),
    React.createElement(Button, { onClick: props.focus })
  );
}

var Parent = function (_React$Component2) {
  _inherits(Parent, _React$Component2);

  function Parent(props) {
    _classCallCheck(this, Parent);

    var _this2 = _possibleConstructorReturn(this, (Parent.__proto__ || Object.getPrototypeOf(Parent)).call(this, props));

    _this2.focus = function () {
      // Now you can set focus when required.
      _this2.inputElement.current.focus();
    };

    _this2.inputElement = React.createRef();
    return _this2;
  }

  _createClass(Parent, [{
    key: "render",
    value: function render() {
      return (
        // refは通常のpropsのように子供に渡せるっぽい
        React.createElement(CustomTextInput, { focus: focus, inputRef: this.inputElement })
      );
    }
  }]);

  return Parent;
}(React.Component);

ReactDOM.render(React.createElement(Parent, null),
// <CustomTextInput />,
// <Glossary items={[{term: 'carrot', description: 'orange'},{term: 'ternip', description: 'white'}]} />,
document.getElementById('root'));

// a11yには、他にもスキップリンク、ロールの設定など本来色々考えるべきことがある。