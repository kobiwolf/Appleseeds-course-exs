import React from 'react';
import axios from 'axios';
import Card from './componets/Card';
import Input from './componets/Input';

class App extends React.Component {
  state = { filterData: [], originalData: [] };
  componentDidMount = async () => {
    const info = await (
      await axios.get('https://randomuser.me/api/?results=16')
    ).data.results;
    const filterData = info.map((person) => {
      return {
        id: person.id.value,
        name: person.name.first + ' ' + person.name.last,
        picture: person.picture.medium,
      };
    });
    this.setState({ filterData, originalData: filterData });
  };
  filterByInput = (value) => {
    const filterData = this.state.originalData.filter((person) =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ filterData });
  };
  render() {
    return (
      <>
        <Input func={this.filterByInput} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {this.state.filterData.map((person, i) => {
            return <Card person={person} key={i} />;
          })}
        </div>
      </>
    );
  }
}
export default App;
