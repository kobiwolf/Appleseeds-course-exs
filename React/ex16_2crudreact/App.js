import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListPage from './componets/Products';
import User from './componets/ProdutctDetail ';
import Homepage from './componets/Homepage';
import Header from './componets/Header';
import AddPage from './componets/AddPage';

class App extends React.Component {
  state = { data: [] };
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/users" exact component={ListPage} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
