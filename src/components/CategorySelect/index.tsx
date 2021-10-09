import React from 'react'

import {
  styles
} from './styles'

import {
  ScrollView
} from 'react-native'

import { categories } from '../../utils/categories'
import { Category } from '../Category'

type Props = {
  categorySelected: string
  setCategory: (categoryId: string) => void
  hasCheckedBox?: boolean
}

export function CategorySelect({categorySelected, setCategory, hasCheckedBox=false}: Props){
  return (
    <ScrollView 
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 40}}
    >
      {categories.map(category => (
        <Category 
          activeOpacity={0.8}
          key={category.id} 
          title={category.title} 
          icon={category.icon} 
          checked={category.id === categorySelected} 
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckedBox}
        />
      ))}
    </ScrollView>
  )
}