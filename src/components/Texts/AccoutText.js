import React from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import SmallText from "./SmallText";

const { secondary, black, goldish } = colors;

const PressText = styled.Pressable`
  padding-vertical: 5px;
  font-size: 15px;
  align-self: center;
`;

const AccountText = (props) => {
  return (
    <PressText {...props}>
      <SmallText style={{ color: goldish }}>{props.children}</SmallText>
    </PressText>
  );
};

export default AccountText;
