import React from 'react';
import CheckBoxLabel from '../../ex11_2checkbox/CheckboxLablal/CheckboxLabal';
const arr = ['I hear', 'I smell', 'I taste', 'I see'];
class App extends React.Component {
  state = { isChecked: '' };
  toggle = (booli) => {
    this.setState({ isChecked: !booli });
  };
  render() {
    return (
      <div>
        <form>
          <CheckBoxLabel
            text={arr[0]}
            func={(e) => this.toggle(e)}
            checked={this.state.isChecked}
          />
          <CheckBoxLabel
            text={arr[1]}
            func={(e) => this.toggle(e)}
            checked={this.state.isChecked}
          />
          <CheckBoxLabel
            text={arr[2]}
            func={(e) => this.toggle(e)}
            checked={this.state.isChecked}
          />
          <CheckBoxLabel
            text={arr[3]}
            func={(e) => this.toggle(e)}
            checked={this.state.isChecked}
          />
        </form>
      </div>
    );
  }
}
export default App;
