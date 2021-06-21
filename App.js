import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Perfil from './src/pages/Perfil';
import Login from './src/pages/Login';
import Login_ from './src/pages/Login_';
import Swipe from './src/pages/Swipe';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Sobre':
            iconName = 'information';
            break;
          default:
            iconName = 'ellipsis-horizontal-circle';
            break;
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#1E90FF',
      inactiveTintColor: '#777',
      showLabel: false,
    }}
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Sobre" component={Sobre}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Swipe">
        <Stack.Screen 
          name="Home" 
          component={Tabs} 
          // options={{
          //   title:'Bem vindo',
          //   headerStyle:{
          //     backgroundColor:'#121212'
          //   },
          //   headerTintColor: '#FFF'
          // }}
        />
        
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Login_" component={Login_} />
        <Stack.Screen name="Swipe" component={Swipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

