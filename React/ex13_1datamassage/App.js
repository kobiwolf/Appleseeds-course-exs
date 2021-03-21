import React from 'react';
import Name from './componets/Name';
import Card from './componets/Card';
import data from './data';

class App extends React.Component {
  state = { name: [], bornBefore: [] };
  getAllName = () => {
    this.setState({ name: data.map((person) => person.name) });
  };
  componentDidMount() {
    this.getAllName();
    this.bornBefore();
  }
  bornBefore = async () => {
    const bornBefore = data.filter(
      (person) => new Date(person.birthday).getFullYear() < 1990
    );
    this.setState({ bornBefore: bornBefore });
  };
  render() {
    return (
      <>
        <Name names={this.state.name} />
        {this.state.bornBefore.map((person) => (
          <Card person={person} />
        ))}
      </>
    );
  }
}
export default App;
