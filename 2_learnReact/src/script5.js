class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false, showWarning: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function WarningBanner(props) {
  if (!props.warn) {
    return null; //自身をほかコンポーネントからrenderしないようにするためには、nullとすればよい
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

const LoginButton = props => {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

const LogoutButton = props => {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
