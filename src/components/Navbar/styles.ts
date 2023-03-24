import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #d2d2d2;
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
`;

export const RouteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 1rem;
  margin-right: 5rem;

  h1 {
    position: relative;
    bottom: 0.5rem;
  }
`;
export const RouteLink = styled.h1`
  color: black;
  text-decoration: none;

  :hover {
    color: white;
  }
`;
