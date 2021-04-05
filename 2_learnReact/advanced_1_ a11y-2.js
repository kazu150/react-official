var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlurExample = function (_React$Component) {
  _inherits(BlurExample, _React$Component);

  function BlurExample(props) {
    _classCallCheck(this, BlurExample);

    var _this = _possibleConstructorReturn(this, (BlurExample.__proto__ || Object.getPrototypeOf(BlurExample)).call(this, props));

    _this.state = { isOpen: false };
    _this.timeOutId = null;

    _this.onClickHandler = _this.onClickHandler.bind(_this);
    _this.onBlurHandler = _this.onBlurHandler.bind(_this);
    _this.onFocusHandler = _this.onFocusHandler.bind(_this);
    return _this;
  }

  _createClass(BlurExample, [{
    key: "onClickHandler",
    value: function onClickHandler() {
      this.setState(function (currentState) {
        return {
          isOpen: !currentState.isOpen
        };
      });
    }

    // We close the popover on the next tick by using setTimeout.
    // This is necessary because we need to first check if
    // another child of the element has received focus as
    // the blur event fires prior to the new focus event.

  }, {
    key: "onBlurHandler",
    value: function onBlurHandler() {
      var _this2 = this;

      this.timeOutId = setTimeout(function () {
        _this2.setState({
          isOpen: false
        });
      });
    }

    // If a child receives focus, do not close the popover.

  }, {
    key: "onFocusHandler",
    value: function onFocusHandler() {
      clearTimeout(this.timeOutId);
    }
  }, {
    key: "render",
    value: function render() {
      // React assists us by bubbling the blur and
      // focus events to the parent.
      return React.createElement(
        "div",
        { onBlur: this.onBlurHandler,
          onFocus: this.onFocusHandler },
        React.createElement(
          "button",
          { onClick: this.onClickHandler,
            "aria-haspopup": "true",
            "aria-expanded": this.state.isOpen },
          "Select an option"
        ),
        this.state.isOpen && React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            "Option 1"
          ),
          React.createElement(
            "li",
            null,
            "Option 2"
          ),
          React.createElement(
            "li",
            null,
            "Option 3"
          )
        )
      );
    }
  }]);

  return BlurExample;
}(React.Component);

ReactDOM.render(React.createElement(BlurExample, null), document.getElementById('root'));

// 常にキーボードを使ってテストしていると、問題がすぐ見つかってよい