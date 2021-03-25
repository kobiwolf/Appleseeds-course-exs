import React from 'react';
import { Link } from 'react-router-dom';
import dataFetched from '../data';
import Card from './Card';
import myUrl from '../api';
class ProductDetail extends React.Component {
  state = {};
  async componentDidMount() {
    const data = await dataFetched;
    const current = data.find(
      (avatar) => avatar.id === this.props.match.params.id
    );
    this.setState({ current });
  }

  displayData = () => {
    if (this.state.current) {
      return (
        <>
          <Card product={this.state.current} />
          <button>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/users"
            >
              back
            </Link>
          </button>
          <Link to="/users/"></Link>
        </>
      );
    }
    return <></>;
  };
  render() {
    return <>{this.displayData()}</>;
  }
}
export default ProductDetail;
