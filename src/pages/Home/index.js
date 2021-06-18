import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button 
      title="Perfil"
      onPress={()=>{navigation.navigate('Perfil')}}
      />
      {/* <Button 
      title="Muda titulo"
      onPress={ () => navigation.setOptions({ title: 'INICIO'})}
      /> */}
    </View>
  );
}
