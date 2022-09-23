import styled from "styled-components";

export const Ambient = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const StyledInput = styled.input`
  width: 600px;
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
  margin-top: 20px;
  ::placeholder {
    color: #fafafa;
  }
  :focus {
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.7);
  }
`;

export const InfiniteScroller = styled.div`
  width: 650px;
  height: 80vh;
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  .box {
    width: 90%;
    height: 150px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 20px;
  }

  p {
    margin: 0;
    font-family: "Poppins";
    font-size: 18px;
    font-weight: 400;
    color: #fafafa;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .oberserver {
    width: 100px;
    height: 100px;
    background-color: red;
    z-index: 1;
    padding-bottom: 20px;
  }
`;
