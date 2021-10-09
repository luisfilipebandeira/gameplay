import React, { useState } from 'react'

import {
  styles
} from './styles'

import {
  View,
  FlatList,
  Text
} from 'react-native'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParamList } from '../../routes/auth.routes'

type Props = StackNavigationProp<AuthStackParamList, 'Home'>

export function Home(){
  const [category, setCategory] = useState('')

  const navigation = useNavigation<Props>()

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '6',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={() => navigation.navigate('AppointmentCreate')} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <ListHeader title="Partidas Agendadas" subtitle="Total 6" />
      <FlatList 
        data={appointments}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.matches}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({ item }) => (
          <Appointment data={item} onPress={() => navigation.navigate('AppointmentDetail')} />
        )}
        contentContainerStyle={{paddingBottom: 24}}
      />
    </View>
  )
}