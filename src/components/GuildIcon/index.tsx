import React from 'react'

import {
  styles
} from './styles'

import {
  Text,
  Image 
} from 'react-native'

type Props = {
}

export function GuildIcon(){
  return (
    <Image 
      source={{uri: 'https://cdn.ome.lt/fqLuB-mG2695B6zeNbYc0YiC0ow=/970x360/smart/uploads/conteudo/fotos/discord_logo_LCZVn2Q.png'}} 
      style={styles.image} 
      resizeMode="cover"
    />
  )
}