import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { StatusBarHeight } from "../Shared";
import { colors } from "../colors";

const { primary, secondary, platinum } = colors;

const StyledView = styled.View`
  flex: 1;
  background-color: ${primary};
`;

const MainContainer = (props) => {
  return <StyledView {...props}>{props.children}</StyledView>;
};

export default MainContainer;
