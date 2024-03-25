import React from 'react';
import { View,Text } from 'react-native';

import { styles } from './SkillScreenStyle';
import { ImagemPrincipal } from '../../components/ImagemPrincipal/ImagemPrincipal';
import { Competencias } from '../../components/Competencias/Competencias';
import { BotaoFaleComigo } from '../../components/BotaoFaleComigo/BotaoFaleComigo';

export default function SkillScreen() {
  return (
    <View style={styles.container}>
        <View>
            <ImagemPrincipal />
        </View>
        <Text style={{margin: 20,fontSize: 25,fontFamily: 'sans-serif',fontWeight: 'bold'}}>Minhas habilidades:</Text>
        <View style={{width: '70%'}}>
          <Competencias />
        </View>
        <View style={{marginTop: 55}}>
          <BotaoFaleComigo />
        </View>
    </View>
  );
}