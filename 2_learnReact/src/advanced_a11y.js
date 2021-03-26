function ListItem({ item }) {
  return (
    <React.Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
      {/* htmlForの中身はinput側のidと同じ値！ */}
      <label htmlFor="namedInput">Name:</label>
      <input id="namedInput" type="text" name="name"/>
    </React.Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}

// refを使って特定のDOMにフォーカスをセットする
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // Create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focus = this.focus.bind(this)
  }

  focus() {
    console.log(this.textInput)
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  

  
  render() {
  // Use the `ref` callback to store a reference to the text input DOM
  // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={this.textInput}
        />
        <button onClick={this.focus}>Focus!</button>
      </div>
    );
  }
}

function CustomTextInput(props) {

  return (
    <div>
      <input ref={props.inputRef} />
      <Button onClick={props.focus} />
    </div>
  );
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  focus =() => {
    // Now you can set focus when required.
    this.inputElement.current.focus();

  }

  render() {
    return (
      // refは通常のpropsのように子供に渡せるっぽい
      <CustomTextInput focus={focus} inputRef={this.inputElement} />
    );
  }
}


ReactDOM.render(
  <Parent />,
  // <CustomTextInput />,
  // <Glossary items={[{term: 'carrot', description: 'orange'},{term: 'ternip', description: 'white'}]} />,
  document.getElementById('root')
)


// a11yには、他にもスキップリンク、ロールの設定など本来色々考えるべきことがある。

