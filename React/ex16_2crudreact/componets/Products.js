import React from 'react';
import { Link } from 'react-router-dom';
import dataFetched from '../data';
import AddPage from './AddPage';
import myUrl from '../api';
import Card from './Card';
import data from '../data';
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isAdd: false, isEdit: false };
    this.refInput = React.createRef();
  }
  async componentDidMount() {
    const data = await dataFetched;
    this.setState({ data });
  }
  toggleAddEvent = () => {
    this.setState({ isAdd: !this.state.isAdd });
  };
  updateState = (data) => {
    this.setState({ data: [...this.state.data, data] });
  };
  deleteCard = async (obj) => {
    await myUrl.delete(`/users/${obj.id}`);
    let a = [...this.state.data];
    a.splice(this.state.data.indexOf(obj), 1);
    this.setState({
      data: a,
    });
  };
  editCard(obj) {
    console.log(obj);
  }
  render() {
    return (
      <>
        <ul>
          {this.state.data.map((item) => (
            <li key={item.id}>
              <Card product={item} />
              <button onClick={() => this.deleteCard(item)}>delete</button>
              {this.state.isEdit && <input ref={this.refInput} />}
              <button onClick={() => this.editCard(item)}>edit</button>
            </li>
          ))}
        </ul>
        {this.state.isAdd && (
          <AddPage func={this.toggleAddEvent} updateState={this.updateState} />
        )}
        <button onClick={this.toggleAddEvent}>add</button>
      </>
    );
  }
}
export default List;
