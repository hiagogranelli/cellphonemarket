import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
        <Link to="/">
            <h1>CellStore</h1>
        </Link>

        <Cart to="/cart">
            <div>
                <strong>Meu Carrinho</strong>
                <span>{cartSize} Itens</span>
            </div>
            <MdShoppingBasket size={36} color="#fff" />
        </Cart>
    </Container>
  );
}
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header)
