import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px black solid;
  padding: 0.5rem;
  text-decoration: none;
  color: black;

  :hover {
    background-color: lightgray;
  }

  > * {
    flex: 150px;
  }

  h3,
  h4 {
    flex: 0px;
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

  @media (max-width: 750px) {
    img {
      top: 0.5rem;
      height: 20px;
      width: 20px;
    }
    h1 {
      font-size: small;
    }
    h3 {
      font-size: small;
      top: 0;
      margin-left: 0.25rem;
    }
  }
`;

interface PriceProps {
  price: boolean;
}

export const PriceDiv = styled.div<PriceProps>`
  color: ${(props) => (props.price ? "green" : "red")};
`;
