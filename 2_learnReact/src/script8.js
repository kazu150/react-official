class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', fruit: 'lime'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    // setState() は自動的に部分的な state を現在の state にマージする
    // ↑注意。useStateはしない
  }

  handleSubmit(event) {
    alert(`text: ${this.state.text}
fruit: ${this.state.fruit}
    `);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
        </label>
        <label>
          Pick your favorite flavor:

          {/* 複数の要素をForm内に入れるときに、要素の識別のためにname属性が有効である */}

          <select name="fruit" value={this.state.fruit} onChange={this.handleChange} >
            <option value="grapefruit">Grapefluit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
)