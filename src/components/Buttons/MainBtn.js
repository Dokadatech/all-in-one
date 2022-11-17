import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";

const { secondary } = colors;

const ButtonView = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${secondary};
  width: 330px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 30px;
  height: 50px;
`;

const MainBtn = (props) => {
  return (
    <ButtonView onPress={props.onPress} {...props}>
      <SmallText>{props.children}</SmallText>
    </ButtonView>
  );
};

export default MainBtn;
