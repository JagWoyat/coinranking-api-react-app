import styled from "styled-components";

interface WrapperProps {
  visible: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 40px 70px;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  right: 0;
  top: 10vh;
  height: 90vh;
  width: 40rem;
  background-color: white;
  box-shadow: -5px 0 15px lightgray;
  transform: translate(${({ visible }) => (visible ? "0" : "105%")});
  transition: transform 0.25s ease-in-out;
`;

export const ShowButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 700px;
`;
