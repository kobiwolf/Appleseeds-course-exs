import React from 'react';
import Square from './componets/Square/Square';
class App extends React.Component {
  state = { isDisplay: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isDisplay: true });
    }, 2000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ isDisplay: false });
    }, 4000);
  }
  render() {
    return (
      this.state.isDisplay === true && (
        <div>
          <Square width="150px" color="pink" />;
          <Square width="70px" color="pink" />;
          <Square width="100px" color="pink" />;
        </div>
      )
    );
  }
}
export default App;
