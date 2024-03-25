import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { styles } from './HomeStyle';
import { ImagemPrincipal } from '../../components/ImagemPrincipal/ImagemPrincipal';
import { Botoes } from '../../components/Botoes/Botoes';

export default function Home({navigation} : any) {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 50}}>
      <ImagemPrincipal />
      </View>
      <Text style={{fontSize: 25,fontWeight: 'bold',marginBottom: 15,marginTop: 10}}>Gabriel Passos Francisco</Text>
      <View>
        <Botoes />
      </View>
        <StatusBar style='dark' />
    </View>
  );
}