import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { statusBarHeight } from "../Shared";
import { colors } from "../colors";

const { primary } = colors;

const StyledView = styled.View`
  flex: 1;
  ${statusBarHeight && `padding-top:${statusBarHeight + 30}px`};
  background-color: ${primary};
`;

const MainContainer = (props) => {
  return <StyledView {...props}>{props.children}</StyledView>;
};

export default MainContainer;
