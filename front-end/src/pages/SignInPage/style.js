import styled from "styled-components";

const Ambient = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fromTop 1300ms;
  margin-top: 200px;
  z-index: 1;
  a {
    font-family: "Raleway";
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin-top: 30px;
  }
  @keyframes fromTop {
    0% {
      top: -900px;
    }
    50% {
      top: 40px;
    }
    100% {
      top: 0px;
    }
  }
`;

const Banner = styled.div`
  width: 700px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px 0 0;
  border-radius: 20px 20px 0 0;
  box-sizing: border-box;
  img {
    width: 40px;
    height: 40px;
    object-fit: fill;
    filter: invert(100%);
    margin-bottom: 20px;
  }
  h3 {
    font-family: "Lexend";
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    margin: 0 0 10px;
  }

  p {
    font-family: "Lexend";
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    margin: 0 0 5px;
  }
`;

const SignInButton = styled.button`
  border-radius: 4px;
  width: 88px;
  height: 36px;
  border-radius: 5px;
  margin-top: 20px;
  border: none;
  color: ${(props) => (props.status ? "#729BC3" : "#fff")};
  background: ${(props) =>
    props.status ? "rgba(255, 255, 255, 0.5)" : "#4498D9"};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14);

  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const FormWrapper = styled.form`
  width: 700px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  margin-bottom: 10px;
  font-family: "Lexend";
  font-size: 16px;
  color: #fafafa;
  box-sizing: border-box;
  padding: 20px;
  ::placeholder {
    color: #fafafa;
  }
  :focus {
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.7);
  }
`;

export {
  Ambient,
  Menu,
  Banner,
  SignInButton,
  FormWrapper,
  Options,
  StyledInput,
};
