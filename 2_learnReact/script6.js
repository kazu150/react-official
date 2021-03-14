var numbers = [1, 2, 3, 4, 5];
var listItems = numbers.map(function (number) {
  return React.createElement(
    'li',
    null,
    number
  );
});

ReactDOM.render(React.createElement(
  'ul',
  null,
  listItems
), //配列を{}で囲むだけで適切にレンダーできる
document.getElementById('root'));