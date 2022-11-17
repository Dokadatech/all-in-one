import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

import { colors } from '../colors'

const {primary,secondary,platinum, darkGrey,lightGrey} = colors

const StyledText = styled.Text`
    font-size: 15px;
    color: ${lightGrey};
    text-align: left;

`



const RegularText = (props) => {
  return (
  <StyledText {...props}>
        {props.children}
  </StyledText>
  )
}

export default RegularText