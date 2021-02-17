import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 78%;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 24px;

  h1 {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
    margin-bottom: 16px;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 12px;
    }
  }
`;

export const DropdownCountry = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;

  span {
    font-size: 20px;
    margin-right: 12px;
  }

  select {
    height: 28px;
    width: 160px;
    border-color: #409ae9;
    border-radius: 4px;
    font-family: 'Noto Sans JP', sans-serif;
    color: #141414;
  }

  @media (max-width: 1024px) {
    span {
      font-size: 16px;
    }

    select {
      height: 24px;
      width: 154px;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    span {
      font-size: 14px;
    }

    select {
      height: 20px;
      width: 140px;
      font-size: 12px;
    }
  }

  @media (max-width: 425px) {
    span {
      font-size: 12px;
    }

    select {
      height: 16px;
      width: 120px;
      font-size: 10px;
    }
  }

  @media (max-width: 375px) {
    span {
      font-size: 10px;
    }

    select {
      height: 14px;
      width: 100px;
      font-size: 9px;
    }
  }

  @media (max-width: 320px) {
    span {
      font-size: 10px;
    }

    select {
      height: 12px;
      width: 80px;
      font-size: 8px;
    }
  }
`;
