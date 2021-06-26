import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CorpoInstr from './modulos/components/CorpoInstr';
import Tempo from "./modulos/modelos/Tempo.js"
import Som from './modulos/modelos/Som.js'
import { Sound } from 'expo-av/build/Audio';


export default function App() {
  const som = new Som()


  return (
    <View style={styles.container}>
      <CorpoInstr
        tempo={new Tempo(som.tocarSom, som.pararSom)}
        tocarSom = {som.tocarSom}
        sons={Object.keys(som.sons)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
