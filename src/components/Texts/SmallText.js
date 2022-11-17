import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

import { colors } from "../colors";

const { primary, secondary, platinum, darkGrey, lightGrey, black } = colors;

const StyledText = styled.Text`
  font-size: 13px;
  color: ${black};
`;

const SmallText = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default SmallText;
