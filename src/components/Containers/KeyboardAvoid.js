import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import {  StatusBarHeight } from '../Shared'
import { colors } from '../colors'
import { KeyboardAvoidingView, Keyboard, ScrollView, Pressable, Platform } from 'react-native'

const {primary,secondary,platinum} = colors





const KeyboardAvoid = (props) => {
  return (
  (<KeyboardAvoidingView style={{flex: 1, backgroundColor: 'transparent'}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={60}
  >
      <ScrollView showsVerticalScrollIndicator={false}>
            <Pressable onPress={Keyboard.dismiss}>
                    {props.children}
            </Pressable>
      </ScrollView>
    
  </KeyboardAvoidingView>)
  )
}

export default KeyboardAvoid