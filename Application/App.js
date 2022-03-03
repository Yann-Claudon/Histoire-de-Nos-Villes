import 'react-native-gesture-handler';
import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

// récupération des 4 pages par défaut de l'application
import Accueil from "./Components/Accueil";
import Filtre from "./Components/Filtre";
import Actu from "./Components/Actu";
import Settings from "./Components/Settings";
import Carte from './Components/Carte';

// création de la barre de navigation
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const Map = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Carte" component={Carte} />
    </Stack.Navigator>
  )
};
export default class App extends Component {

  render() {
    return (
      // Affiche en bas de l'écran une barre de navigation
      <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Accueil" component={Map} options={{ headerShown: false }} />
        <Tabs.Screen name="Filtres" component={Filtre} options={{ headerShown: false }} />
        <Tabs.Screen name="Actualités" component={Actu} options={{ headerShown: false }} />
        <Tabs.Screen name="Paramètres" component={Settings} options={{ headerShown: false }} />
      </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}