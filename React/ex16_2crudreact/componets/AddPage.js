import React from 'react';
import { Link } from 'react-router-dom';
import myUrl from '../api';

class AddPage extends React.Component {
  constructor(props) {
    super(props);
    this.ref1 = React.createRef();
  }
  onClick = async () => {
    const newOne = await myUrl.post(`/users`, {
      name: this.ref1.current.value,
    });
    this.props.func();
    this.props.updateState(newOne.data);
  };
  render() {
    return (
      <>
        <input type="text" ref={this.ref1} placeholder="name"></input>
        <Link to="/users">
          <button onClick={() => this.onClick()}>save</button>
        </Link>
      </>
    );
  }
}
export default AddPage;
