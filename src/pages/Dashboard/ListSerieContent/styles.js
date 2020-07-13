import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;

  transform: translateX(1400px);
  box-shadow: -2px 0px 152px 198px rgba(0, 0, 0, 0.58);

  background: rgba(0, 0, 0, 0.6);
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  height: 5%;
  width: 100%;

  padding-bottom: 30px;

  border-bottom: 1.5px solid ${(props) => props.theme.grafit.light};

  button {
    font-weight: 700;
    color: ${(props) => props.theme.grafit.light};
    font-size: 22px;
    position: relative;

    background: transparent;
    transition: 200ms ease;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.white.default};
      border-bottom: 2px solid ${(props) => props.theme.secondary.default};
    }

    &.selected {
      border-bottom: 2px solid ${(props) => props.theme.secondary.default};
    }

    &:focus {
      color: ${(props) => props.theme.white.default};

      &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: ${(props) => props.theme.secondary.default};
      }
    }
  }

  & > button + button {
    margin-left: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95%;

  padding: 5px;

  div.ep {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${(props) => props.theme.white.default};
      font-weight: 700;

      width: 250px;
    }

    img {
      width: 40px;
      height: 40px;
    }
    &:hover {
      cursor: pointer;
    }
  }

  & > div {
    margin-top: 15px;
  }
`;
