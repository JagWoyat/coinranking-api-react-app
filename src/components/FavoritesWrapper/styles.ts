import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem;
  @media (max-width: 750px) {
    margin: 1rem;
  }
`;
