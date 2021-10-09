import React from 'react'
import { SvgProps } from 'react-native-svg'

import {
  styles
} from './styles'

import {
  TouchableOpacityProps,
  TouchableOpacity,
  View,
  Text
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

type Props = TouchableOpacityProps & {
  title: string
  icon: React.FC<SvgProps>
  checked: boolean
  hasCheckBox?: boolean
}

export function Category({title, icon: Icon, checked=false, hasCheckBox=false,...rest}: Props){
  return (
    <TouchableOpacity
      {...rest}
    >
      <LinearGradient
        style={styles.container}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      > 
        <LinearGradient 
          style={[styles.content, {opacity: checked ? 1 : 0.5}]}
          colors={[checked ? theme.colors.secondary85 : theme.colors.secondary50, theme.colors.secondary40]}
        >
          {hasCheckBox &&
            <View style={checked ? styles.checked : styles.check} />
          }
          
          <Icon width={48} height={48} />

          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  )
}