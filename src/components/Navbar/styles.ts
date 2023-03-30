import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  background-color: #d2d2d2;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  @media (max-width: 750px) {
    height: 3rem;
    h1 {
      font-size: medium;
    }
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-left: 2rem;
  text-decoration: none;
  font-weight: bold;
  color: #333;
  h1 {
    position: relative;
    bottom: 0.5rem;
  }
  @media (max-width: 750px) {
    margin-top: 0.5rem;
    margin-left: 1rem;
    .Icon {
      width: 2rem;
      height: 2rem;
    }
    h1 {
      bottom: 0.25rem;
    }
  }
`;

export const RouteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 1rem;
  margin-right: 5rem;
  margin-left: 0.5rem;

  h1 {
    position: relative;
    bottom: 0.5rem;
  }
  @media (max-width: 750px) {
    gap: 1rem;
    margin-right: 1rem;
  }
`;
export const RouteLink = styled.h1`
  color: black;
  text-decoration: none;

  :hover {
    color: white;
  }
`;
