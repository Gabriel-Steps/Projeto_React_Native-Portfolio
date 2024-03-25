import React from 'react';
import { View,Image,Text } from 'react-native';

import { styles } from './ImagemPrincipalStyle';
import ImagemLogo from '../../../assets/Logo_Projeto.png'

export function ImagemPrincipal() {
  return (
    <View style={styles.container}>
        <Image style={styles.ImagemLogo} source={ImagemLogo}/>
    </View>
  );
}