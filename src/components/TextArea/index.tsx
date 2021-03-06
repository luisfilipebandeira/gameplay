import React from 'react'

import {
  styles
} from './styles'

import { TextInput, TextInputProps } from 'react-native'

export function TextArea({...rest}: TextInputProps){
    return (
     <TextInput 
      {...rest} 
      style={styles.container} />
    )
}