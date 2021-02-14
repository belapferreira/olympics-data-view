import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #ffffff;
  align-items: center;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 16px;
  display: flex;
  align-items: center;

  img {
    height: 44px;
    margin-right: 20px;
  }

  span {
    font-size: 40px;
    font-weight: 500;
  }
`;
