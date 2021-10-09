import React, { ReactNode } from 'react'

import {
  styles
} from './styles'

import {
  TouchableOpacity,
  View,
  Text
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string
  action?: ReactNode
}

export function Header({ title, action }: Props){
  const navigation = useNavigation()

  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary100, theme.colors.secondary40]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather 
          name="arrow-left" 
          size={24}
          color={theme.colors.heading}
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        {title}
      </Text>

      {action ?
        <View>
          {action}
        </View>

        :

        <View style={{width: 24}} />
      }
      
    </LinearGradient>
  )
}