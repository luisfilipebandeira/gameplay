import React from 'react'

import {
  styles
} from './styles'

import {
  TouchableOpacity, TouchableOpacityProps
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'

export function ButtonAdd({...rest}: TouchableOpacityProps){
  return (
    <TouchableOpacity 
      style={styles.container} 
      {...rest}
    >
      <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  )
}