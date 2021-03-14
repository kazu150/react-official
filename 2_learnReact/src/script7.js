function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem  key={number.toString()} value={number} />
    // keyは配列に対してかける。なのでmapの直下の要素にかけるべし 
  );
  return (
    <div>
      <ul>
        {listItems}
      </ul>
      {content}
    </div>
  );
}

const posts = [{id: 1, title: 'hoge'},{id: 2, title: 'fuga'}]

const Post = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.title}</p>
      <p>{props.key}</p> 
      {/* 引き継げない↑keyの中身は表示できない */}
    </div>
  )
}

const content = posts.map((post) =>
  <Post
    key={post.id} //key属性はpropsで引き継げない（多分予約語だから） 
    id={post.id}
    title={post.title} />
);

const numbers = [1, 2, 3, 4, 5, 6];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);