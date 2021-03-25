// stateの同期をするなら、共通の祖先コンポーネントにリフトアップしよう

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function BoilingVerdict(props) {
  if(props.celsius > 100){
    return <p>沸騰してます</p>
  }
  return <p>沸騰してません</p>
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render(){
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>{scaleNames[scale]}で温度を入力</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'}
  }

  handleCelsiusChange(temperature){
    this.setState({scale: 'c', temperature})
  }

  handleFahrenheitChange(temperature){
    this.setState({scale: 'f', temperature})
  }

  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale=== 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale=== 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        {/* それぞれのコンポーネントに独立して存在するstateを共通化させるには */}
        {/* stateを共通の祖先コンポーネントに移行（リフトアップ）する */}
        <TemperatureInput 
          scale="c" 
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput 
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
)