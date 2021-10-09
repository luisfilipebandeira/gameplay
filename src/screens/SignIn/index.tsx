import React from 'react'

import { 
   View, 
   Text, 
   Image
} from 'react-native'

import {
   styles,
} from './styles'

import IlustrationImg from '../../assets/illustration.png'

import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/native'

import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParamList } from '../../routes/auth.routes'

type Props = StackNavigationProp<AuthStackParamList, 'SignIn'>

export function SignIn(){
  const navigation = useNavigation<Props>()

  function handleSign(){
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}> 
      <Image source={IlustrationImg} style={styles.image} /> 

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{`\n`}
          e organize suas{`\n`}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
        Crie grupos para jogar seus games{`\n`}
        favoritos com seus amigos
        </Text>

        <ButtonIcon 
          onPress={handleSign}
          title="Entrar com Discord"
          activeOpacity={0.7}  
        />
      </View>
    </View>
  )
}