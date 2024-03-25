import React from 'react';
import { View,Text,Pressable, Linking, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'

import { styles } from './BotoesStyle';

export function Botoes() {
  function copiarGmail(){
    Clipboard.setStringAsync("gabrielpassosfrancisco@gmail.com")
    Alert.alert("Mensagem","O gmail foi copiado")
  }
  return (
    <View style={styles.container}>
        <Pressable style={styles.BotaoLikedin} onPress={() => Linking.openURL("https://www.linkedin.com/in/gabriel-passos-francisco-3713a4277/")}>
            <Text style={styles.TextoStyle}><MaterialCommunityIcons name='linkedin' size={22} /> Linkedin</Text>
        </Pressable>
        <Pressable style={styles.BotaoGitHub} onPress={() => Linking.openURL("https://github.com/Gabriel-Steps")} >
            <Text style={styles.TextoStyle}><MaterialCommunityIcons name='github' size={22}/> GitHub</Text>
        </Pressable>
        <Pressable style={styles.BotaoGmail} onPress={copiarGmail}>
            <Text style={styles.TextoStyle}><MaterialCommunityIcons name='gmail' size={22}/> Gmail</Text>
        </Pressable>
    </View>
  );
}