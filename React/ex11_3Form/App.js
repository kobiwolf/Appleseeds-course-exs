import React from 'react';
import TextInput from './componets/TextInput/TextInput';
import Select from './componets/Select/Select';
import Button from './componets/Button/Button';

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    freeText: '',
    age: '',
    isSend: false,
  };
  onTextInput = (data, name) => {
    this.setState({ [name]: data });
  };
  onButtonClicked = () => {
    this.setState({ isSend: true });
  };
  reload = () => {
    this.setState({
      firstName: '',
      lastName: '',
      freeText: '',
      age: '',
      isSend: false,
    });
  };
  onBackButton = () => {
    this.setState({ isSend: false });
  };
  putForm = () => {
    return (
      <form>
        <TextInput
          func={this.onTextInput}
          text="firstName"
          value={this.state.firstName}
        />
        <TextInput
          func={this.onTextInput}
          text="lastName"
          value={this.state.lastName}
        />
        <Select func={this.onTextInput} value={this.state.age} text="age" />
        <TextInput
          func={this.onTextInput}
          text="freeText"
          type="textArea"
          value={this.state.freeText}
        />
        <Button func={this.onButtonClicked} text="continue" />
      </form>
    );
  };
  putReview = () => {
    let arrOfState = Object.entries(this.state);
    arrOfState.splice(arrOfState.length - 1, 1); // i did the splice to remove the isSend key
    return (
      <div>
        {arrOfState.map(([key, value]) => (
          <h2>
            {key}:{value}
          </h2>
        ))}
        <Button text="submit" func={this.reload} />
        <Button text="Back" func={this.onBackButton} />
      </div>
    );
  };
  render() {
    return <div>{!this.state.isSend ? this.putForm() : this.putReview()}</div>;
  }
}
export default App;
