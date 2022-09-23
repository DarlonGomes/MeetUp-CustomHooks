import styled from "styled-components";

const Watch = styled.div`
  width: 500px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  z-index: 1;
  box-shadow: rgb(0 0 0 / 12%) 11.3713px 11.3713px 10.0172px 0px,
    rgb(0 0 0 / 14%) 100px 100px 80px 0px;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Visor = styled.div`
  width: 320px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  top: 20px;
  border-radius: 10px;
  margin-bottom: 80px;
  box-sizing: border-box;
  padding: 10px;
  gap: 5px;
  .wrapper {
  }
  p {
    font-family: "Audiowide";
    font-size: 40px;
    color: #e3e3e3;
  }
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid #a4a4a4;
  cursor: pointer;
  font-family: "Cabin";
  font-weight: 400;
  font-size: 14px;
  color: #e3e3e3;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export { Watch, Visor, Button, ButtonWrapper };
