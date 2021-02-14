import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  span {
    font-size: 24px;
    margin-right: 12px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;

  select {
    height: 28px;
    width: 64px;
    border-color: #409ae9;
    border-radius: 4px;
    font-family: 'Noto Sans JP', sans-serif;
    color: #141414;
  }
`;

export const Right = styled.div`
  background: #ffffff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  right: 0;

  a {
    font-family: 'Noto Sans JP', sans-serif;
    text-decoration: none;
    color: #141414;
  }
`;
