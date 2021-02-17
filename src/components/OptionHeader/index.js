import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Left, DropdownContainer, Right, NavButton } from './styles';

export default function OptionHeader({
  left,
  right,
  leftRoute,
  rightRoute,
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
        <NavButton>
          <Link to={leftRoute}>{left}</Link>
        </NavButton>

        <NavButton>
          <Link to={rightRoute}>{right}</Link>
        </NavButton>
      </Right>
    </Container>
  );
}

OptionHeader.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  leftRoute: PropTypes.string.isRequired,
  rightRoute: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
