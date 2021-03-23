import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './componets/Header';
import Homepage from './componets/Homepage';
import Products from './componets/Products';
import ProductDetail from './componets/ProdutctDetail ';

class App extends React.Component {
  state = { store: [] };
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetail} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
