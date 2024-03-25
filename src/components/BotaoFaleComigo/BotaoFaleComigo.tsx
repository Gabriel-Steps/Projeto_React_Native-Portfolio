import React from 'react';
import { View,Pressable,Text,Alert} from 'react-native';

import { styles } from './BotaoFaleComigoStyle';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'
 
export function BotaoFaleComigo() {
    function copiarGmail(){
        Clipboard.setStringAsync("gabrielpassosfrancisco@gmail.com")
        Alert.alert("Mensagem","O gmail foi copiado")
      }
  return (
    <View style={styles.container}>
        <Pressable style={styles.BotaoGmail} onPress={copiarGmail}>
            <Text style={styles.TextoStyle}><MaterialCommunityIcons name='gmail' size={22}/> Gmail</Text>
        </Pressable>
    </View>
  );
}
