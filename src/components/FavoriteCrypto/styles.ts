import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 0;
  border: 3px solid;
  border-radius: 20px;
  border-color: ${(props) => props.color || "black"};
  padding: 0.5rem;

  :hover {
    background-color: lightgray;
  }
`;

export const JustDiv = styled.div`
  color: black;
  text-decoration: none;
  position: relative;

  h5 {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    text-align: end;
    color: gray;
  }

  > * {
    margin: 0;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;

  img {
    position: relative;
    top: 1rem;
    height: 40px;
    width: 40px;
    margin-right: 0.5rem;
  }

  h3 {
    position: relative;
    top: 0.875rem;
    margin-left: 0.375rem;
    color: gray;
  }
  > * {
    margin-bottom: 0;
  }
`;

export const ButtonWraper = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    border: none;
    width: 5rem;
    height: 2rem;
    text-align: center;
  }

  .Edit {
    background-color: darkseagreen;
  }

  .Remove {
    background-color: crimson;
  }
`;

interface PriceProps {
  price: boolean;
}

export const PriceDiv = styled.div<PriceProps>`
  color: ${(props) => (props.price ? "green" : "red")};
`;
