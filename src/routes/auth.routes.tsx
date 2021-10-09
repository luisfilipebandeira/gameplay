import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import { SignIn } from '../screens/SignIn'
import { Home } from '../screens/Home'
import { AppointmentDetail } from '../screens/AppointmentDetail'
import { AppointmentCreate } from '../screens/AppointmentCreate'

export type AuthStackParamList = {
  SignIn: undefined
  Home: undefined
  AppointmentDetail: undefined
  AppointmentCreate: undefined
}

const { Navigator, Screen } = createStackNavigator<AuthStackParamList>()

export function AuthRoutes(){
  return(
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetail" component={AppointmentDetail} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  )
}