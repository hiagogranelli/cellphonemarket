import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';

import {formatPrice } from '../../Util/format';
import api from '../../Services/api';
import * as CartActions from '../../Store/modules/cart/actions';
import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

  addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { ammount } = this.props;

    return (
      <ProductList>
        { products.map(product => (
        <li key={product.id}>
          <img src={product.picture} alt={product.title}/>
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
  
          <button type="button" 
          onClick={() => this.handleAddProduct(product)}
          >
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 
              {ammount[product.id] || 0}
            </div>
  
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  ammount: state.cart.reduce((ammount, product) => {
    ammount[product.id] = product.ammount;

    return ammount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps )(Home);