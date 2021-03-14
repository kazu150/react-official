function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return React.createElement(
    'li',
    null,
    props.value
  );
}

function NumberList(props) {
  var numbers = props.numbers;
  var listItems = numbers.map(function (number) {
    return (
      // Correct! Key should be specified inside the array.
      React.createElement(ListItem, { key: number.toString(), value: number })
    );
  }
  // keyは配列に対してかける。なのでmapの直下の要素にかけるべし 
  );
  return React.createElement(
    'div',
    null,
    React.createElement(
      'ul',
      null,
      listItems
    ),
    content
  );
}

var posts = [{ id: 1, title: 'hoge' }, { id: 2, title: 'fuga' }];

var Post = function Post(props) {
  console.log(props);
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      props.id
    ),
    React.createElement(
      'p',
      null,
      props.title
    ),
    React.createElement(
      'p',
      null,
      props.key
    )
  );
};

var content = posts.map(function (post) {
  return React.createElement(Post, {
    key: post.id //key属性はpropsで引き継げない（多分予約語だから） 
    , id: post.id,
    title: post.title });
});

var numbers = [1, 2, 3, 4, 5, 6];
ReactDOM.render(React.createElement(NumberList, { numbers: numbers }), document.getElementById('root'));