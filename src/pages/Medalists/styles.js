import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 78%;
  margin: auto;
  margin-top: 16px;

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
