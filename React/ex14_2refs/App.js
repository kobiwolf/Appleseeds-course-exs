import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterData: [], originalData: [] };
    this.refss = React.createRef();
  }
  onclick = () => {
    console.log(this.refss.current.value);
  };
  componentDidMount() {
    this.refss.current.focus();
  }
  render() {
    return (
      <>
        <textarea ref={this.refss} />
        <button onClick={this.onclick}>copy</button>
      </>
    );
  }
}

export default App;
