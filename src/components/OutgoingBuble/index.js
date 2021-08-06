import React from "react";

import { Container } from "./style";

function index({ text, id }) {
  return (
    <Container>
      {id} {text}
    </Container>
  );
}

export default index;
