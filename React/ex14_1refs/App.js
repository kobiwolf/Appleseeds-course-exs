import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterData: [], originalData: [] };
    this.refss = React.createRef();
  }
  componentDidMount = () => {
    this.refss.current.focus();
  };
  render() {
    return (
      <>
        <form>
          <h1>hello!</h1>
          <input type="text" ref={this.refss}></input>
        </form>
      </>
    );
  }
}

export default App;
