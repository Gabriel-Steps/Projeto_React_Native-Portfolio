import React from 'react';
import { View,Text } from 'react-native';

import { styles } from './CompetenciasStyle';
import {MaterialCommunityIcons} from '@expo/vector-icons'

export function Competencias() {
  return (
    <View style={styles.container}>
        <Text style={[styles.TextStyle, {color: '#FF750F'}]}>HTML: <MaterialCommunityIcons name='star' size={25} color={'gold'}/><MaterialCommunityIcons name='star' size={25} color={'gold'}/><MaterialCommunityIcons name='star' size={25} color={'gold'}/><MaterialCommunityIcons name='star' size={25} color={'gold'}/><MaterialCommunityIcons name='star' size={25} color={'gold'}/></Text>
        <Text style={[styles.TextStyle, {color: '#522AFF'}]}>CSS: <MaterialCommunityIcons name='star' size={25} color={'gold'}/><MaterialCommunityIcons name='star' size={25} color={'gold'}/><MaterialCommunityIcons name='star' size={25} color={'gold'}/><MaterialCommunityIcons name='star' size={25} color={'gold'}/></Text>
        <Text style={[styles.TextStyle, {color: '#0012BA'}]}>React: <MaterialCommunityIcons name='star' size={25} color={'gold'}/><MaterialCommunityIcons name='star' size={25} color={'gold'}/><MaterialCommunityIcons name='star' size={25} color={'gold'}/><MaterialCommunityIcons name='star' size={25} color={'gold'}/></Text>
    </View>
  );
}