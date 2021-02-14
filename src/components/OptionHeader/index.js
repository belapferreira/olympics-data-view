import React from 'react';
import PropTypes from 'prop-types';

import { Container, Left, DropdownContainer, Right } from './styles';

export default function OptionHeader({
  children,
  route,
  years,
  onChange,
  value,
}) {
  return (
    <Container>
      <Left>
        <span>Year</span>

        <DropdownContainer>
          <select value={value} onChange={onChange}>
            {years.map((year) => (
              <option key={(item, index) => index.toString()}>{year}</option>
            ))}
          </select>
        </DropdownContainer>
      </Left>

      <Right>
        <a href={route}>{children}</a>
      </Right>
    </Container>
  );
}

OptionHeader.propTypes = {
  children: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
