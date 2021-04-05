const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext(
  themes.dark // デフォルトの値
);

// ------------------

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      >hoge</button>
    );
  }
}
// ThemedButtonを使用する中間のコンポーネント
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

// ------------------

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // ThemeProvider 内の ThemedButton ボタンは
    // state からのテーマを使用し、外側では
    // デフォルトの dark テーマを使用します
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// この例はconsumerがないけどなくてもいいんか？→classコンポーネントだからOK説
// Providerがなければ、グローバルに読みに行くっぽい