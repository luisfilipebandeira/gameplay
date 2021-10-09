import React from 'react'

import {
  styles
} from './styles'

import { TextInput, TextInputProps } from 'react-native'

export function SmallInput({...rest}: TextInputProps){
    return (
     <TextInput 
      keyboardType="number-pad"
      {...rest} 
      style={styles.container} />
    )
}