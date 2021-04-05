const MyContext = React.createContext({hoge: 12345});
MyContext.displayName = "hoge"

class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* 値に基づいて何かをレンダーします */
    return (
      // <div>{`${value.hoge} on ${MyContext.displayName}`}</div>
      <MyContext.Consumer>
        {value => `${value.hoge} on ${MyContext.displayName}`}
      </MyContext.Consumer>
      // ↑関数コンポーネント内でcontextを読み取るときは、consumerが必要だったが、これがuseContextに置き換わった？という理解でいいんだろうか
    )
  }
}

ReactDOM.render(
  <MyContext.Provider value={{hoge:67890}}>
    <MyClass />
  </MyContext.Provider>,
  document.getElementById('root')
)

// classコンポーネントでContextを呼び出すときは、contextTypeをつかう