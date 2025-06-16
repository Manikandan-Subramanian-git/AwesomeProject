import React from 'react'
import { Button, Text, View } from 'react-native';
import styles from "./styles"

import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Root';
type Props = NativeStackScreenProps<RootStackParamList, "login">;
// type Props = NativeStackNavigationProp<
//   RootStackParamList,
//   "login"
// >;

const login = (props:Props) => {
 const {navigation} = props;

 const go = ()=>{
   navigation.navigate("signup", {text:"dfdm"})
 }
  return (
    <View>(
     <Text style={styles.container}>)ckdf</Text>
     <Button title='click' onPress={go}></Button>
    </View>
  )
}

export default login;
