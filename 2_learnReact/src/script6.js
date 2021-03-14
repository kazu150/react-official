const numbers = [1,2,3,4,5];
const listItems = numbers.map(number => <li>{number}</li>);

ReactDOM.render(
  <ul>{listItems}</ul>, //配列を{}で囲むだけで適切にレンダーできる
  document.getElementById('root')
)