import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

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
