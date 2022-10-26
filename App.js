import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

const App = () => {

  const handleNuevoPresupuesto = (presupuesto) => {
    if(Number(presupuesto) > 0) {
      console.log('presupuesto valido')
  }else{
    console.log('presupuesto inválido')
  }}

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        <NuevoPresupuesto 
          handleNuevoPresupuesto={handleNuevoPresupuesto}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6',
  },
});

export default App;
