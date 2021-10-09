import React from 'react'

import {
  styles
} from './styles'

import {
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  FlatList
 } from 'react-native'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'

import { Fontisto } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'

import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader'
import { ListDivider } from '../../components/ListDivider'
import { Member } from '../../components/Member'
import { ButtonIcon } from '../../components/ButtonIcon'

export function AppointmentDetail(){
  const members = [
    {
      id: '1',
      username: 'Luis',
      avatar_url: 'https://github.com/luisfilipebandeira.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Luis',
      avatar_url: 'https://github.com/luisfilipebandeira.png',
      status: 'offline'
    },
    {
      id: '3',
      username: 'Luis',
      avatar_url: 'https://github.com/luisfilipebandeira.png',
      status: 'ocupado'
    }
  ]

  return (
    <Background>
      <Header 
        title="Detalhes" 
        action={
          <TouchableOpacity>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        }
      />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="total 3" />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>

    </Background>
  )
}