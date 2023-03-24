import React, { useState } from "react";
import add from "../../assets/add.svg";
import Icon from "../Icon";
import Form from "../Form/Form";
import { Wrapper, ShowButton } from "./styles";

interface FormProps {
  onSubmit: any;
}

export default function NewCryptoBar({ onSubmit }: FormProps) {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper visible={visible}>
      <h2>Add new cryptocurrency</h2>
      <Form onSubmit={onSubmit} />
      <Icon
        as={ShowButton}
        icon={add}
        onClick={() => {
          setVisible(!visible);
        }}
      />
    </Wrapper>
  );
}
