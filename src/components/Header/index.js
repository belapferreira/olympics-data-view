import React from 'react';

import { Container, HeaderContent } from './styles';

import olympicsLogo from '../../assets/symbol.svg';

export default function Header() {
  return (
    <Container>
      <HeaderContent>
        <img src={olympicsLogo} alt="Símbolo das Olimpíadas" />
        <span>Olympic Games</span>
      </HeaderContent>
    </Container>
  );
}
