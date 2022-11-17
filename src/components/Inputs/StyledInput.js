import { View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";

const { primary, platinum, white, lightGrey, lightSecondary, black } = colors;

const InputField = styled.TextInput`
  padding: 15px;
  background-color: ${white};
  width: 330px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 30px;
  height: 50px;
  border-color: ${primary};
  border-width: 2px;
`;

const EyeIcon = styled.TouchableOpacity`
  position: absolute;
  top: 75px;
  right: 90px;
  z-index: 1;
`;

const StyledInput = ({ label, isPassword, ...props }) => {
  const [backgroundInputColor, setbackgroundInputColor] = useState(white);
  const [hidePassword, setHidePassword] = useState(true);
  const blur = () => {
    props?.onBlur;
    setbackgroundInputColor(platinum);
  };

  const focus = () => {
    props?.onFocus;
    setbackgroundInputColor(white);
  };
  return (
    <View>
      <SmallText
        style={{
          color: primary,
          fontWeight: "bold",
          marginTop: 45,
          marginLeft: 35,
        }}
      >
        {label}
      </SmallText>
      <InputField
        {...props}
        placeholderTextColor={black}
        style={{ backgroundColor: backgroundInputColor, ...props?.style }}
        onBlur={blur}
        onFocus={focus}
        secureTextEntry={isPassword && hidePassword}
      />
      {isPassword && (
        <EyeIcon onPress={() => setHidePassword(!hidePassword)}>
          <MaterialCommunityIcons
            name={hidePassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color={black}
          />
        </EyeIcon>
      )}
    </View>
  );
};

export default StyledInput;
