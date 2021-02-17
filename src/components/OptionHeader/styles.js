import styled from 'styled-components';

/*
@media (max-width: 1024px) {
}

@media (max-width: 768px) {
}

@media (max-width: 425px) {
}

@media (max-width: 375px) {
}

@media (max-width: 320px) {
}
 */
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 24px;
    margin-right: 12px;
  }

  @media (max-width: 1024px) {
    span {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    span {
      font-size: 16px;
    }
  }

  @media (max-width: 425px) {
    span {
      font-size: 12px;
    }
  }

  @media (max-width: 375px) {
    span {
      font-size: 10px;
    }
  }

  @media (max-width: 320px) {
    span {
      font-size: 10px;
    }
  }
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

  @media (max-width: 1024px) {
    select {
      height: 24px;
      width: 60px;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    select {
      height: 20px;
      width: 56px;
      font-size: 12px;
    }
  }

  @media (max-width: 425px) {
    select {
      height: 16px;
      width: 52px;
      font-size: 10px;
    }
  }

  @media (max-width: 375px) {
    select {
      height: 14px;
      width: 50px;
      font-size: 9px;
    }
  }

  @media (max-width: 320px) {
    select {
      height: 12px;
      width: 48px;
      font-size: 8px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
`;

export const NavButton = styled.div`
  background: #ffffff;
  padding: 8px 12px;
  margin-left: 16px;
  border-radius: 4px;
  font-size: 16px;
  right: 0;

  a {
    font-family: 'Noto Sans JP', sans-serif;
    text-decoration: none;
    color: #141414;
  }

  @media (max-width: 1024px) {
    padding: 6px 10px;
    margin-left: 14px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    margin-left: 12px;
    font-size: 12px;
  }

  @media (max-width: 425px) {
    padding: 4px 6px;
    margin-left: 10px;
    font-size: 10px;
  }

  @media (max-width: 375px) {
    padding: 4px 6px;
    margin-left: 8px;
    font-size: 8px;
  }

  @media (max-width: 320px) {
    padding: 4px 6px;
    margin-left: 8px;
    font-size: 8px;
  }
`;
