import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../Root';
import login from '../../screens/login';
import Signup from '../../screens/signup';
import HomeScreen from '../../screens/home';

const Stack = createNativeStackNavigator<RootStackParamList>();

const  StackNavigation =()=> {
  return (
     <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
       <Stack.Screen  name="login" component={login}></Stack.Screen>
       <Stack.Screen  name="signup" component={Signup}></Stack.Screen>
       <Stack.Screen  name="home" component={HomeScreen}></Stack.Screen>
     </Stack.Navigator>
  )
}

export default StackNavigation;