import 'react-native-gesture-handler';
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

// récupération des 4 pages par défaut de l'application
import Accueil from "./Components/Accueil";
import Filtre from "./Components/Filtre";
import Actu from "./Components/Actu";
import Settings from "./Components/Settings";
import Carte from './Components/Carte';

// Icones des onglets
import Ant from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';

// création de la barre de navigation
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const Map = () => {
  return(
    <Stack.Navigator screenOptions={ {headerShown: false} }>
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Carte" component={Carte}/>
    </Stack.Navigator>
  )
};

const MapFiltre = () => {
  return(
    <Stack.Navigator screenOptions={ {headerShown: false} }>
        <Stack.Screen name="Filtre" component={Filtre}  />
        <Stack.Screen name="Carte" component={Carte} />
    </Stack.Navigator>
  )
};
export default class App extends Component {

  render() {
    return (
      // Affiche en bas de l'écran une barre de navigation
      <NavigationContainer>
      <Tabs.Navigator screenOptions={ {headerShown: false, tabBarShowLabel: false, tabBarInactiveTintColor:"#030202", tabBarActiveTintColor:"#F29718" } }>
        <Tabs.Screen name="Accueil" component={Map} options={{tabBarIcon:({color, size}) => (<Ionicon name="location-sharp" color={color} size={size}/>) }}/>
        <Tabs.Screen name="Filtres" component={MapFiltre} options={{tabBarIcon:({color, size}) => (<Ionicon name="filter" color={color} size={size}/>) }}/>
        <Tabs.Screen name="Actualités" component={Actu} options={{tabBarIcon:({color, size}) => (<Ionicon name="newspaper-outline" color={color} size={size}/>) }}/>
        <Tabs.Screen name="Paramètres" component={Settings} options={{tabBarIcon:({color, size}) => (<Ionicon name="settings-outline" color={color} size={size}/>) }}/>
      </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}