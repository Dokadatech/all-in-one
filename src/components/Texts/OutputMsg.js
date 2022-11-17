import React from "react";
import styled from "styled-components/native";

import { colors } from "../colors";

const { success, error } = colors;

const StyledText = styled.Text`
  font-size: 13px;
  color: ${(props) => (props.success ? success : error)};
  text-align: center;
`;

const OutputMsg = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default OutputMsg;
