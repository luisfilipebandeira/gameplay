import React from 'react'

import {
  styles
} from './styles'

import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'

interface Props extends TouchableOpacityProps{
  title: string
}

export function Button({title, ...rest}: Props){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}