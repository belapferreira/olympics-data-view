import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #ffffff;
  align-items: center;
`;

export const HeaderContent = styled.div`
  max-width: 78%;
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

  @media (max-width: 1024px) {
    img {
      height: 40px;
      margin-right: 20px;
    }

    span {
      font-size: 36px;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 36px;
      margin-right: 20px;
    }

    span {
      font-size: 32px;
    }
  }

  @media (max-width: 425px) {
    img {
      height: 32px;
      margin-right: 20px;
    }

    span {
      font-size: 28px;
    }
  }

  @media (max-width: 375px) {
    img {
      height: 28px;
      margin-right: 20px;
    }

    span {
      font-size: 24px;
    }
  }

  @media (max-width: 320px) {
    img {
      height: 24px;
      margin-right: 20px;
    }

    span {
      font-size: 20px;
    }
  }
`;
