import React from 'react'

import {
  styles
} from './styles'

import {Image, Text, TouchableOpacity, TouchableOpacityProps, View} from 'react-native'
import DiscordImg from '../../assets/discord.png'

interface Props extends TouchableOpacityProps{
  title: string
}

export function ButtonIcon({title, ...rest}: Props){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
      <Image source={DiscordImg} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}