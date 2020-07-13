import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.primary.default};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  background-color: ${(props) => props.theme.primary.default};
  background-image: url(${(props) => props.background_image});
  background-blend-mode: luminosity;

  /* box-shadow: inset 10px 10px 140px 164px rgba(0, 0, 0, 0.75); */
  box-shadow: inset 38px 0px 59px 144px rgba(0, 0, 0, 0.75);

  padding: 40px 40px 40px 100px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 100px;

  div.title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    span {
      font-size: 65px;
      font-weight: 700;
      color: ${(props) => props.theme.white.default};
    }
  }

  div.close {
    img:hover {
      cursor: pointer;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 30%;
  padding: 40px 100px;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primary.light},
    ${(props) => props.theme.primary.dark}
  );

  div.options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    margin-bottom: 10px;
    border-bottom: 1.5px solid ${(props) => props.theme.primary.custom};

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      padding-bottom: 10px;
      position: relative;
      background: transparent;
      color: ${(props) => props.theme.grafit.light};
      font-size: 24px;

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

      &:hover {
        cursor: pointer;
      }
    }

    & > button + button {
      margin-left: 60px;
    }

    div.icon-telecine {
      display: flex;
      justify-content: flex-end;
      width: 50%;
    }
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  width: 100%;

  height: 80%;
`;

export const DivGeneral = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  div.icons {
    display: flex;
    align-items: center;

    width: 30%;

    button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        margin-bottom: 8px;
        width: 40px;
        height: 40px;
      }

      span {
        color: ${(props) => props.theme.grafit.light};
      }
      &:hover {
        cursor: pointer;
      }
    }

    & > button + button {
      margin-left: 50px;
    }
  }

  div.synopsis {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    height: 100%;
    margin-right: 50px;

    padding: 20px 0;

    span {
      &.title {
        font-size: 24px;
      }

      color: ${(props) => props.theme.grafit.light};
    }
  }
`;

export const DivCast = styled.div`
  display: flex;
  align-items: center;

  div.one-cast {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 160px;
    height: 100px;

    border-radius: 5px;

    background: ${(props) => props.theme.grafit.custom};

    span.title {
      font-size: 20px;
      font-weight: 700;
      color: ${(props) => props.theme.grafit.light};
    }
    span.name {
      font-size: 16px;
      color: ${(props) => props.theme.grafit.default};
    }
  }

  & > div + div {
    margin-left: 15px;
  }
`;
