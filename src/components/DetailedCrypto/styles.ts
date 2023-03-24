import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5rem;
  margin: 0;
  max-width: 600px;
  img {
    position: relative;
    height: 200px;
    width: 200px;
  }

  h4 {
    background-color: lightgray;
    border-radius: 10px;
    width: 5rem;
    text-align: center;
    margin-bottom: 0;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;

  h3 {
    position: relative;
    top: 0.875rem;
    margin-left: 0.375rem;
    color: gray;
  }
`;

interface ButtonWProps {
  availible: boolean;
}

export const ButtonWraper = styled.div<ButtonWProps>`
  display: flex;
  justify-content: space-around;
  button {
    border: none;
    width: 8rem;
    height: 4rem;
    font-size: large;
    font-weight: 700;
    text-align: center;
  }

  .Add {
    background-color: ${({ availible }) =>
      availible ? "darkseagreen" : "darkseagreen"};
    color: ${({ availible }) => (availible ? "black" : "gray")};
  }

  .Edit {
    background-color: blueviolet;
  }
`;

interface PriceProps {
  price: boolean;
}

export const PriceDiv = styled.div<PriceProps>`
  color: ${(props) => (props.price ? "green" : "red")};
`;
