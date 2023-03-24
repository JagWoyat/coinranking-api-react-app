import React from "react";
import styled from "styled-components";

type Props = {
  icon: any;
};

const Icon = styled.button<Props>`
  width: 4rem;
  height: 4rem;
  background: none;
  background-image: url(${({ icon }) => icon});
  background-size: 100%;
  border: none;
`;

export default Icon;
